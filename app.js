// Require the Bolt package (github.com/slackapi/bolt)
require('dotenv').config();

const { SocketModeClient } = require('@slack/socket-mode');
const { WebClient } = require('@slack/web-api');
const appToken = process.env.SLACK_APP_TOKEN;

const botToken = process.env.SLACK_BOT_TOKEN;

const socketModeClient = new SocketModeClient({ appToken });

const webclient = new WebClient(botToken);

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
              text: "*Welcome to CITeams Home Page * :tada:",
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "CITeams is a convenient Slack app to help MCIT students find and recruit project team members for CIT & CIS courses.",
            },
          },
          {
            type: "actions",
            elements: [
              {
                type: "button",
                text: {
                  type: "plain_text",
                  text: "Create a new post",
                  emoji: true,
                },
                style: "primary",
                value: "create_post",
              },
              {
                type: "button",
                text: {
                  type: "plain_text",
                  text: "View my posts",
                  emoji: true,
                },
                value: "my_posts",
              },
              {
                type: "button",
                text: {
                  type: "plain_text",
                  text: "View all posts",
                  emoji: true,
                },
                value: "all_posts",
              },
            ],
          },
        ],
      },
    });
  } catch (error) {
    console.log('An error occurred', error);
  }
});

(async () => {
  await socketModeClient.start();
  console.log("⚡️ Bolt app is running!");
})();

//We will use the following after we deploy the app

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

