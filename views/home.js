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
  };
};

const createProfilePrompt = () => {
  return [
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
  ];
};

module.exports = {
  renderDefaultHome: renderDefaultHome,
  createProfilePrompt: createProfilePrompt,
};
