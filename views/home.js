// Render the default home view for the Slack app
const renderDefaultHome = () => {
  return {
    type: "home",
    callback_id: "home_view",
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*Description*",
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: " ",
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
          text: ":heart_eyes_cat: *Your Posts*\nYou don't have any posts yet.",
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
  };
};

// Create profile prompt component
const createProfilePrompt = () => {
  return [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "*Description*",
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: " ",
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "CITeams is a convenient Slack App that helps MCIT students find course project team members and study mates :busts_in_silhouette: .\n",
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "CITeams makes the teammate matching process easier :heart_eyes: . As MCIT students often face challenges of finding group members for course projects or simply study mates, especially during Covid-19 when students have to study remotely and do not have much interaction in person.\n",
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "In terms of some core features, you can create, delete, and edit posts of recruitment for teammates or study mates. You and your current teammates will be added to a channel created by CITeams once the post is published :loudspeaker: . Users in the community can see all public recruitment posts and choose to enter the channel that fits their need :raised_hands: .\n",
      },
    },
    {
      type: "divider",
    },
    {
      type: "section",
      text: {
        type: "plain_text",
        text: " ",
        emoji: true,
      },
    },
    {
      type: "section",
      text: {
        type: "plain_text",
        text: " ",
        emoji: true,
      },
    },
    {
      type: "section",
      text: {
        type: "plain_text",
        text: " ",
        emoji: true,
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: " ",
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: " ",
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: " ",
      },
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
  ];
};

// My posts header component
const myPostHeader = () => {
  return [
    {
      type: "section",
      text: {
        type: "plain_text",
        text: " ",
        emoji: true,
      },
    },
    {
      type: "section",
      text: {
        type: "plain_text",
        text: " ",
        emoji: true,
      },
    },
    {
      type: "section",
      text: {
        type: "plain_text",
        text: " ",
        emoji: true,
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: " ",
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: " ",
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: " ",
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: ":memo: *Your Posts*",
      },
    },
    {
      type: "context",
      elements: [
        {
          type: "plain_text",
          text: "View all posts created by you.",
          emoji: true,
        },
      ],
    },
    {
      type: "actions",
      elements: [
        {
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
      ],
    },
    {
      type: "divider",
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: " ",
      },
    },
  ];
};

// All posts header component
const allPostHeader = () => {
  return [
    {
      type: "section",
      text: {
        type: "plain_text",
        text: " ",
        emoji: true,
      },
    },
    {
      type: "section",
      text: {
        type: "plain_text",
        text: " ",
        emoji: true,
      },
    },
    {
      type: "section",
      text: {
        type: "plain_text",
        text: " ",
        emoji: true,
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: " ",
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: " ",
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: " ",
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: ":clipboard: *Public Post Board*",
      },
    },
    {
      type: "context",
      elements: [
        {
          type: "plain_text",
          text: "View all public posts here on the board.",
          emoji: true,
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
        text: " ",
      },
    },
  ];
};

module.exports = {
  renderDefaultHome: renderDefaultHome,
  createProfilePrompt: createProfilePrompt,
  myPostHeader: myPostHeader,
  allPostHeader: allPostHeader,
};
