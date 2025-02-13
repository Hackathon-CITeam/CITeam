// Require the Bolt package (github.com/slackapi/bolt)
require("dotenv").config();

// Import database operations
const lib = require("./dbOperations");
const home = require("./views/home");
const post = require("./views/post");
const postboard = require("./views/postboard");
const profile = require("./views/profile");
const channel = require("./views/channel");

const { SocketModeClient } = require("@slack/socket-mode");
const { WebClient } = require("@slack/web-api");
const connect = require("mongodb");

const appToken = process.env.SLACK_APP_TOKEN;
const botToken = process.env.SLACK_BOT_TOKEN;

const socketModeClient = new SocketModeClient({ appToken });

const webclient = new WebClient(botToken);

let db;
async function func() {
  try {
    db = await lib.connect(process.env.MONGODB_URL);
  } catch (error) {
    console.log("An error occurred", error);
  }
}
func();

// Attach listeners to events by type. See: https://api.slack.com/events/message
socketModeClient.on("app_home_opened", async ({ event, body, ack }) => {
  try {
    await ack();

    await func();
    const userExists = await lib.userExists(db, body.event.user);
    let blocks = home.renderDescription();
    if (!userExists) {
      blocks = blocks.concat(profile.defaultProfile());
    } else {
      await func();
      const user = await lib.getUserById(db, body.event.user);
      blocks = blocks.concat(
        profile.viewProfile(user.name, user.graduation_year, user.expertise)
      );
    }

    await func();
    const allPosts = await lib.getAllPosts(db);

    await func();
    const myPosts = await lib.getAllPostsByUserId(db, body.event.user);

    if ((!allPosts || allPosts.length == 0) && !userExists) {
      await webclient.views.publish({
        token: botToken,
        user_id: event.user,
        view: home.renderDefaultHome(),
      });
    } else if (!myPosts || myPosts.length == 0) {
      blocks = blocks.concat(home.myPostHeader());
      blocks = blocks.concat([
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "*You don't have any posts yet.*",
          },
        },
      ]);
      let allPostViews = home.allPostHeader();
      allPostViews = blocks.concat(allPostViews);

      for (const post of allPosts) {
        let member = [];
        for (const userId of post.member) {
          const userProfile = await webclient.users.profile.get({
            user: userId,
          });
          member.push(userProfile.profile.display_name);
        }

        let allPostView = postboard.renderAllPost(
          post._id,
          post.name,
          post.course,
          post.expertise,
          member,
          post.capacity,
          post.message
        );
        allPostViews = allPostViews.concat(allPostView);
      }

      await webclient.views.publish({
        token: botToken,
        user_id: event.user,
        view: {
          type: "home",
          callback_id: "home_view",
          blocks: allPostViews,
        },
      });
    } else {
      let myPostViews = home.myPostHeader();

      for (const post of myPosts) {
        let member = [];
        for (const userId of post.member) {
          const userProfile = await webclient.users.profile.get({
            user: userId,
          });
          member.push(userProfile.profile.display_name);
        }
        let myPostView = postboard.renderMyPost(
          post._id,
          post.name,
          post.course,
          post.expertise,
          member,
          post.capacity,
          post.message
        );
        myPostViews = myPostViews.concat(myPostView);
      }

      myPostViews = blocks.concat(myPostViews);

      let allPostViews = home.allPostHeader();

      allPostViews = myPostViews.concat(allPostViews);

      for (const post of allPosts) {
        let member = [];
        for (const userId of post.member) {
          const userProfile = await webclient.users.profile.get({
            user: userId,
          });
          member.push(userProfile.profile.display_name);
        }

        let allPostView = postboard.renderAllPost(
          post._id,
          post.name,
          post.course,
          post.expertise,
          member,
          post.capacity,
          post.message
        );
        allPostViews = allPostViews.concat(allPostView);
      }

      await webclient.views.publish({
        token: botToken,
        user_id: event.user,
        view: {
          type: "home",
          callback_id: "home_view",
          blocks: allPostViews,
        },
      });
    }
  } catch (error) {
    console.log("An error occurred", error);
  }
});

// CLICK BUTTON: Prompt to create user profile view (See https://slack.dev/node-slack-sdk/socket-mode)
socketModeClient.on("interactive", async ({ body, ack }) => {
  try {
    await ack();
    // console.log(body);
    if (body.actions[0].value === "create_profile") {
      await webclient.views.open({
        trigger_id: body.trigger_id,
        view: profile.createProfile(),
      });
    }
  } catch (error) {
    console.log("An error occurred", error);
  }
});

// CLICK BUTTON: Prompt to create a new post view
socketModeClient.on("interactive", async ({ body, ack }) => {
  try {
    await ack();
    if (body.actions[0].value === "create_post") {
      await webclient.views.open({
        trigger_id: body.trigger_id,
        view: post.createPost(),
      });
    }
  } catch (error) {
    console.log("An error occurred", error);
  }
});

// CLICK BUTTON: Prompt to create an edit profile view
socketModeClient.on("interactive", async ({ body, ack }) => {
  try {
    await ack();
    if (body.actions[0].value === "edit_profile") {
      await webclient.views.open({
        trigger_id: body.trigger_id,
        view: profile.editProfile(),
      });
    }
  } catch (error) {
    console.log("An error occurred", error);
  }
});

let editPostId = null;

// CLICK BUTTON: Prompt to create an edit post view, and record post id
socketModeClient.on("interactive", async ({ body, ack }) => {
  try {
    await ack();
    // console.log(body);
    if (body.actions[0].value === "mypost_edit") {
      editPostId = body.actions[0].action_id.split("_")[2];
      await func();
      const result = await lib.getUserById(db, body.user.id); // retrieve from Slack?
      await webclient.views.open({
        trigger_id: body.trigger_id,
        view: post.editPost(result.name),
      });
    }
  } catch (error) {
    console.log("An error occurred", error);
  }
});

// Edit post confirm
socketModeClient.on("interactive", async ({ body, ack }) => {
  try {
    await ack();
    if (body.view.callback_id === "modal_edit_post") {
      const data = body.view.state.values;
      const arr = Object.keys(data).map(function (k) {
        return data[k];
      });
      // console.log(arr);
      await func();
      const result = await lib.getUserById(db, body.user.id); // retrieve from Slack?
      const course = arr[0].post_enter_course.selected_option.text.text;
      const skills = arr[1].post_enter_expertise.selected_options.map(
        (e) => e.text.text
      );
      const member_ids = arr[2].post_enter_member.selected_users;
      const team_capacity = arr[3].post_enter_number.selected_option.text.text;
      const message = arr[4].post_enter_message.value;
      // console.log(name, course, skills, member_ids, team_capacity, message);
      const updatedPost = {
        userId: body.user.id,
        name: result.name,
        course: course,
        expertise: skills,
        member: member_ids,
        capacity: team_capacity,
        message: message,
      };
      await func();
      await lib.updatePost(db, editPostId, updatedPost);
    }
  } catch (error) {
    console.log("An error occurred", error);
  }
});

let deletePostId = null;

// CLICK BUTTON: Prompt to create a delete post view, and record post id
socketModeClient.on("interactive", async ({ body, ack }) => {
  try {
    await ack();
    // console.log(body);
    if (body.actions[0].value === "mypost_delete") {
      deletePostId = body.actions[0].action_id.split("_")[2];
      await func();
      const result = await lib.getPostById(db, deletePostId);
      let member = [];
      for (const userId of result.member) {
        const userProfile = await webclient.users.profile.get({
          user: userId,
        });
        member.push(userProfile.profile.display_name);
      }
      await webclient.views.open({
        trigger_id: body.trigger_id,
        view: post.deletePost(
          result.name,
          result.course,
          result.expertise,
          member,
          result.capacity
        ),
      });
    }
  } catch (error) {
    console.log("An error occurred", error);
  }
});

// Delete post confirm
socketModeClient.on("interactive", async ({ body, ack }) => {
  try {
    await ack();
    if (body.view.callback_id === "modal_delete_post") {
      await func();
      await lib.deletePost(db, deletePostId);
    }
  } catch (error) {
    console.log("An error occurred", error);
  }
});

// CLICK BUTTON: add a new user to database
socketModeClient.on("interactive", async ({ body, ack }) => {
  try {
    await ack();
    if (body.view.callback_id === "modal_create_profile") {
      const data = body.view.state.values;
      const arr = Object.keys(data).map(function (k) {
        return data[k];
      });
      // console.log(arr);
      const name = arr[0].profile_enter_username.value;
      const year = arr[1].profile_enter_year.value;
      const skills = arr[2].profile_enter_expertise.selected_options.map(
        (e) => e.text.text
      );
      // console.log(name, year, skills, body.user.id);
      const newUser = {
        name: name,
        graduation_year: year,
        expertise: skills,
        userId: body.user.id,
      };
      await func();
      await lib.addUser(db, newUser);
    }
  } catch (error) {
    console.log("An error occurred", error);
  }
});

// CLICK BUTTON: edit user profile
socketModeClient.on("interactive", async ({ body, ack }) => {
  try {
    await ack();
    if (body.view.callback_id === "modal_edit_profile") {
      const data = body.view.state.values;
      const arr = Object.keys(data).map(function (k) {
        return data[k];
      });
      // console.log(arr);
      const name = arr[0].profile_enter_username.value;
      const year = arr[1].profile_enter_year.value;
      const skills = arr[2].profile_enter_expertise.selected_options.map(
        (e) => e.text.text
      );
      // console.log(name, year, skills, body.user.id);
      const updatedUser = {
        name: name,
        graduation_year: year,
        expertise: skills,
        userId: body.user.id,
      };
      await func();
      await lib.updateUser(db, body.user.id, updatedUser);
    }
  } catch (error) {
    console.log("An error occurred", error);
  }
});

// CLICK BUTTON: add a new post to database
socketModeClient.on("interactive", async ({ body, ack }) => {
  try {
    // console.log("in the func");
    await ack();
    if (body.view.callback_id === "modal_create_post") {
      const data = body.view.state.values;
      const arr = Object.keys(data).map(function (k) {
        return data[k];
      });
      // console.log(arr);
      const name = arr[0].post_enter_username.value;
      const course = arr[1].post_enter_course.selected_option.text.text;
      const skills = arr[2].post_enter_expertise.selected_options.map(
        (e) => e.text.text
      );
      const member_ids = arr[3].post_enter_member.selected_users;
      const team_capacity = arr[4].post_enter_number.selected_option.text.text;
      const message = arr[5].post_enter_message.value;
      // console.log(name, course, skills, member_ids, team_capacity, message);

      // create a channel and invite all the team members
      let channel_name = "CITeams-";
      const nospaceName = name.replace(/\s/g, "");
      channel_name += nospaceName;
      channel_name += "-";
      const nospace = course.replace(/\s/g, "");
      channel_name += nospace;
      channel_name = channel_name.toLowerCase();
      let result = await webclient.conversations.create({
        name: channel_name,
      });
      await webclient.conversations.setTopic({
        channel: result.channel.id,
        topic: `Recruiting ${team_capacity} teammates for ${course}.`,
      });
      // console.log("here");
      // console.log(`result.data.ok ${result.data.ok}`);
      // Handling duplicate channel name: if the name is taken, we will increment to the string
      // while (!result.data.ok) {
      //   let num = arseInt(channel_name[channel_name.length - 1]);
      //   if (num) {
      //     num += 1;
      //     channel_name.replace(/.$/, num);
      //   } else {
      //     channel_name += "-1";
      //   }
      //   result = await webclient.conversations.create({
      //     name: channel_name,
      //   });
      // }
      // console.log(result);
      let strings = member_ids.join(",");
      strings += ", ";
      strings += body.user.id;
      const result2 = await webclient.conversations.invite({
        channel: result.channel.id,
        users: strings,
      });
      // console.log(result2);

      const newPost = {
        userId: body.user.id,
        name: name,
        course: course,
        expertise: skills,
        member: member_ids,
        capacity: team_capacity,
        message: message,
        channelId: result.channel.id,
      };
      await func();
      // console.log("add post");
      await lib.addPost(db, newPost);
    }
  } catch (error) {
    console.log("An error occurred", error);
  }
});

let joinChannelId = null;

// CLICK BUTTON: User joins a channel
socketModeClient.on("interactive", async ({ body, ack }) => {
  try {
    await ack();
    // console.log(body);
    if (body.actions[0].value === "join_channel") {
      joinChannelId = body.actions[0].action_id.split("_")[2];
      await func();
      const result = await lib.getPostById(db, joinChannelId);
      let member = [];
      for (const userId of result.member) {
        const userProfile = await webclient.users.profile.get({
          user: userId,
        });
        member.push(userProfile.profile.display_name);
      }
      await webclient.views.open({
        trigger_id: body.trigger_id,
        view: channel.joinChannel(
          result.name,
          result.course,
          result.expertise,
          member,
          result.capacity
        ),
      });
    }
  } catch (error) {
    console.log("An error occurred", error);
  }
});

// Confirm join channel
socketModeClient.on("interactive", async ({ body, ack }) => {
  try {
    await ack();
    // console.log(body);
    await func();
    const postResult = await lib.getPostById(db, joinChannelId);
    if (body.view.callback_id === "modal_join_channel") {
  
    // let channels = await webclient.conversations.list();
    // console.log(channels);   
      await webclient.conversations.join({
        channel: postResult.channelId,
      });
    }
  } catch (error) {
    console.log("An error occurred", error);
  }
});

(async () => {
  await socketModeClient.start();
  console.log("⚡️ Bolt app is running!");
})();

// Deployment using Heroku (We will use the following after we deploy the app.)

// const { App } = require("@slack/bolt");

// const app = new App({
//   token: process.env.SLACK_BOT_TOKEN,
//   signingSecret: process.env.SLACK_SIGNING_SECRET,
//   socketMode: true,
//   appToken: process.env.SLACK_APP_TOKEN
// });

// (async () => {
//   // Start your app
//   await app.start(process.env.PORT || 3000);

//   console.log('⚡️ Bolt app is running!');
// })();

// // All the room in the world for your code
// app.event('app_home_opened', async ({ event, client, context }) => {
//   console.log("home page opened");
//   try {
//     /* view.publish is the method that your app uses to push a view to the Home tab */
//     const result = await client.views.publish({

//       /* the user that opened your app's app home */
//       user_id: event.user,

//       /* the view object that appears in the app home*/
//       view: {
//         type: 'home',
//         callback_id: 'home_view',

//         /* body of the view */
//         blocks: [
//           {
//             "type": "section",
//             "text": {
//               "type": "mrkdwn",
//               "text": "*Welcome to your _App's Home_* :tada:"
//             }
//           },
//           {
//             "type": "divider"
//           },
//           {
//             "type": "section",
//             "text": {
//               "type": "mrkdwn",
//               "text": "This button won't do much for now but you can set up a listener for it using the `actions()` method and passing its unique `action_id`. See an example in the `examples` folder within your Bolt app."
//             }
//           },
//           {
//             "type": "actions",
//             "elements": [
//               {
//                 "type": "button",
//                 "text": {
//                   "type": "plain_text",
//                   "text": "Click me!"
//                 }
//               }
//             ]
//           }
//         ]
//       }
//     });
//   }
//   catch (error) {
//     console.error(error);
//   }
// });
