// Require the Bolt package (github.com/slackapi/bolt)
require("dotenv").config();

// Import database operations
const lib = require("./dbOperations");
const home = require("./views/home");
const post = require("./views/post");
const postboard = require("./views/postboard");
const profile = require("./views/profile");

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
    const allPosts = await lib.getAllPosts(db);
    // check if user exists first?
    await func();
    const myPosts = await lib.getAllPostsByUserId(db, body.event.user);

    let blocks = home.createProfilePrompt();
    
    if (!allPosts || allPosts.length == 0) {
      await webclient.views.publish({
        token: botToken,
        user_id: event.user,
        view: home.renderDefaultHome(),
      });
    } else if (!myPosts || myPosts.length == 0) {
      // TODO
      await webclient.views.publish({
        token: botToken,
        user_id: event.user,
        view: home.renderDefaultHome(),
      });
    } else {

      let myPostViews = home.myPostHeader();

      for (const post of myPosts) {
        let member = [];
        for (const userId of post.member) {
          const userProfile = await webclient.users.profile.get({
            user: userId,
          });
          member.push(member.push(userProfile.profile.display_name));
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
    // console.log(body);
    // For Testing Only
    // await func();
    // const result = await lib.getUserById(db, "U02C2CKDF38");
    // console.log(result);
    //   await func();
    //   // store post id
    //   obj = {
    //     course: "CIT 596",
    //     expertise: ["Java"],
    //     member: ["U01F5ADBG1K"],
    //     capacity: 4,
    //     message: "hey",
    //   };
    //   const posts = await lib.deletePost(db, "61e4271c7f49c4ade1bf8729");
    //   console.log(posts);
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

// CLICK BUTTON: add a new post to database
// TODO: create a new channel
socketModeClient.on("interactive", async ({ body, ack }) => {
  try {
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
      const member_ids = arr[3].post_enter_member.selected_users; // include self?
      const team_capacity = arr[4].post_enter_number.selected_option.text.text;
      const message = arr[5].post_enter_message.value;
      // console.log(name, course, skills, member_ids, team_capacity, message);
      const newPost = {
        userId: body.user.id,
        name: name,
        course: course,
        expertise: skills,
        member: member_ids,
        capacity: team_capacity,
        message: message,
      };
      await func();
      await lib.addPost(db, newPost);
    }
  } catch (error) {
    console.log("An error occurred", error);
  }
});

// TODO: Edit a post
// socketModeClient.on("interactive", async ({ body, ack }) => {
//   try {
//     await ack();
//     if (body.view.callback_id === "modal_create_post") {
//       const data = body.view.state.values;
//       const arr = Object.keys(data).map(function (k) {
//         return data[k];
//       });
//       // console.log(arr);
//       const name = arr[0].post_enter_username.value;
//       const course = arr[1].post_enter_course.selected_option.text.text;
//       const skills = arr[2].post_enter_expertise.selected_options.map(
//         (e) => e.text.text
//       );
//       const member_ids = arr[3].post_enter_member.selected_users; // include self?
//       const team_capacity = arr[4].post_enter_number.selected_option.text.text;
//       const message = arr[5].post_enter_message.value;
//       // console.log(name, course, skills, member_ids, team_capacity, message);
//       const newPost = {
//         userId: body.user.id,
//         name: name,
//         course: course,
//         expertise: skills,
//         member: member_ids,
//         capacity: team_capacity,
//         message: message,
//       };
//       await func();
//       await lib.addPost(db, newPost);
//     }
//   } catch (error) {
//     console.log("An error occurred", error);
//   }
// });

// TODO: Delete a post

// TODO: Join Channel

(async () => {
  await socketModeClient.start();
  console.log("⚡️ Bolt app is running!");
})();

// TODO: Deployment using Heroku (We will use the following after we deploy the app.)

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
