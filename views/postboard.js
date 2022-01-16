// TODO: Render each post in the post board on home page
// myPost vs allPost (different button)
// Copy and paste your completed {...} code from Block Kit Builder to here
const renderPost = () => {
  return {
    "blocks":[
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "#ChannelName   2 members"
        }
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "#Teams-Seren-CIT594\n:bust_in_silhouette:@Ruichen Zhang @Yihong Zhang @Seren Liu\n:books: CIT594 \n:raised_hands: Recruit for *2* teammates\n :sparkles: Java, Python"
        }
      },
      {
        "type": "section",
        "text": {
          "type": "plain_text",
          "text": "Description.",
          "emoji": true
        }
      },
      {
        "type": "actions",
        "elements": [
          {
            "type": "button",
            "text": {
              "type": "plain_text",
              "text": "Edit",
              "emoji": true
            },
            "value": "click_me_123",
            "style": "primary",
            "action_id": "actionId-0"
          },
          {
            "type": "button",
            "text": {
              "type": "plain_text",
              "text": "Delete",
              "emoji": true
            },
            "value": "click_me_123",
            "style": "danger",
            "action_id": "actionId-1"
          }
        ]
      },
      {
        "type": "divider"
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "#ChannelName   2 members"
        }
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "#Teams-Seren-CIT594\n:bust_in_silhouette:@Ruichen Zhang @Yihong Zhang @Seren Liu\n:books: CIT594 \n:raised_hands: Recruit for *2* teammates\n :sparkles: Java, Python"
        }
      },
      {
        "type": "section",
        "text": {
          "type": "plain_text",
          "text": "Description.",
          "emoji": true
        }
      },
      {
        "type": "actions",
        "elements": [
          {
            "type": "button",
            "text": {
              "type": "plain_text",
              "text": "Edit",
              "emoji": true
            },
            "value": "click_me_123",
            "style": "primary",
            "action_id": "actionId-0"
          },
          {
            "type": "button",
            "text": {
              "type": "plain_text",
              "text": "Delete",
              "emoji": true
            },
            "value": "click_me_123",
            "style": "danger",
            "action_id": "actionId-1"
          }
        ]
      },
      {
        "type": "divider"
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "#ChannelName   2 members"
        }
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "#Teams-Seren-CIT594\n:bust_in_silhouette:@Ruichen Zhang @Yihong Zhang @Seren Liu\n:books: CIT594 \n:raised_hands: Recruit for *2* teammates\n :sparkles: Java, Python"
        }
      },
      {
        "type": "section",
        "text": {
          "type": "plain_text",
          "text": "Description.",
          "emoji": true
        }
      },
      {
        "type": "actions",
        "elements": [
          {
            "type": "button",
            "text": {
              "type": "plain_text",
              "text": "Edit",
              "emoji": true
            },
            "value": "click_me_123",
            "style": "primary",
            "action_id": "actionId-0"
          },
          {
            "type": "button",
            "text": {
              "type": "plain_text",
              "text": "Delete",
              "emoji": true
            },
            "value": "click_me_123",
            "style": "danger",
            "action_id": "actionId-1"
          }
        ]
      }
    ]
  };
};

module.exports = {
  renderPost: renderPost,
};
