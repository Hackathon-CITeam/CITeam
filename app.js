// Require the Bolt package (github.com/slackapi/bolt)
require('dotenv').config();

// Import database operations
const lib = require('./dbOperations');

// Import other modules
const views = require("./views");

const { SocketModeClient } = require('@slack/socket-mode');
const { WebClient } = require('@slack/web-api');

const appToken = process.env.SLACK_APP_TOKEN;
const botToken = process.env.SLACK_BOT_TOKEN;

const socketModeClient = new SocketModeClient({ appToken });

const webclient = new WebClient(botToken);

let db;
async function func() {
  db = await lib.connect(process.env.MONGODB_URL);
};
func();


// Attach listeners to events by type. See: https://api.slack.com/events/message
socketModeClient.on('app_home_opened', async ({event, body, ack}) => {
  try {
    await ack();
    await webclient.views.publish({
      token: botToken,
      user_id: event.user,
      view: {
        type: "home",
        callback_id: "home_view",

        /* body of the view */
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Descriptions*",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "CITeams is a convenient Slack app to help MCIT students find and recruit project team members for CIT & CIS courses.",
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Want to get started? Click to create profile.*",
            },
          },
          {
            type: "actions",
            elements: [
              {
                type: "button",
                text: {
                  type: "plain_text",
                  text: "Create Profile",
                  emoji: true,
                },
                style: "primary",
                value: "create_profile",
                action_id: "create_profile",
              },
            ],
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: ":heart_eyes_cat: *My Posts*\nYou don't have any posts yet.",
            },
            accessory: {
              type: "button",
              text: {
                type: "plain_text",
                text: "Create Post",
                emoji: true,
              },
              style: "primary",
              value: "create_post",
              action_id: "create_post",
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: ":heart_eyes_cat: *Post Board*\nNo posts yet.",
            },
          },
        ],
      },
    });
  } catch (error) {
    console.log('An error occurred', error);
  }
});

// CLICK BUTTON: Prompt to create user profile view (See https://slack.dev/node-slack-sdk/socket-mode)
socketModeClient.on("interactive", async ({ body, ack }) => {
  await ack();
  console.log(body);
  if (body.actions[0].value === "create_profile") {
    await webclient.views.open({
      trigger_id: body.trigger_id,
      view: views.createProfile(),
    });
  }
});

// CLICK BUTTON: Grab info from user profile modal to the database
socketModeClient.on("interactive", async ({ body, ack }) => {
  await ack();
  // Try catch
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
  }
});

// CLICK BUTTON: Prompt to create a new post view
// socketModeClient.on("interactive", async ({ body, ack }) => {
//   await ack();
//   if (body.actions[0].value === "modal_create_profile") {
//     await webclient.views.open({
//       trigger_id: body.trigger_id,
//       view: views.createPost(),
//     });
//   }
// });

(async () => {
  await socketModeClient.start();
  console.log("⚡️ Bolt app is running!");
})();

// We will use the following after we deploy the app

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

