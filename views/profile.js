// MODAL: Render the view for creating user profile
const createProfile = () => {
  return {
    callback_id: "modal_create_profile",
    title: {
      type: "plain_text",
      text: "Create Profile",
      emoji: true,
    },
    submit: {
      type: "plain_text",
      text: "Save",
      emoji: true,
    },
    type: "modal",
    close: {
      type: "plain_text",
      text: "Cancel",
      emoji: true,
    },
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*Tell the community who you are!*",
        },
      },
      {
        type: "divider",
      },
      {
        type: "input",
        element: {
          type: "plain_text_input",
          action_id: "profile_enter_username",
          placeholder: {
            type: "plain_text",
            text: "John Smith",
            emoji: true,
          },
        },
        label: {
          type: "plain_text",
          text: "Your Full Name",
          emoji: true,
        },
      },
      {
        type: "input",
        element: {
          type: "plain_text_input",
          action_id: "profile_enter_year",
          placeholder: {
            type: "plain_text",
            text: "2023",
            emoji: true,
          },
        },
        label: {
          type: "plain_text",
          text: "Your Graduation Year",
          emoji: true,
        },
      },
      {
        type: "input",
        element: {
          type: "multi_static_select",
          placeholder: {
            type: "plain_text",
            text: "Select options",
            emoji: true,
          },
          options: [
            {
              text: {
                type: "plain_text",
                text: "Web Programming",
                emoji: true,
              },
              value: "value-0",
            },
            {
              text: {
                type: "plain_text",
                text: "Machine Learning",
                emoji: true,
              },
              value: "value-1",
            },
            {
              text: {
                type: "plain_text",
                text: "Product Management",
                emoji: true,
              },
              value: "value-2",
            },
            {
              text: {
                type: "plain_text",
                text: "UI & UX Design",
                emoji: true,
              },
              value: "value-3",
            },
            {
              text: {
                type: "plain_text",
                text: "Data Structure & Algorithms",
                emoji: true,
              },
              value: "value-4",
            },
            {
              text: {
                type: "plain_text",
                text: "Software Development",
                emoji: true,
              },
              value: "value-5",
            },
            {
              text: {
                type: "plain_text",
                text: "Data Science",
                emoji: true,
              },
              value: "value-6",
            },
            {
              text: {
                type: "plain_text",
                text: "Game Development",
                emoji: true,
              },
              value: "value-7",
            },
            {
              text: {
                type: "plain_text",
                text: "Cybersecurity",
                emoji: true,
              },
              value: "value-8",
            },
            {
              text: {
                type: "plain_text",
                text: "Mathematics",
                emoji: true,
              },
              value: "value-9",
            },
            {
              text: {
                type: "plain_text",
                text: "DevOps",
                emoji: true,
              },
              value: "value-10",
            },
          ],
          action_id: "profile_enter_expertise",
        },
        label: {
          type: "plain_text",
          text: "Your Expertise",
          emoji: true,
        },
      },
    ],
  };
};

// View existing profile component
const viewProfile = (name, year, expertise) => {
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
        text: " ",
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: ":bookmark: *Your Profile*",
      },
    },
    {
      type: "context",
      elements: [
        {
          type: "plain_text",
          text: "View and edit your profile.",
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
        text: `*Name:* @${name}\n*Graduation Year:* ${year}\n*Expertise:* ${expertise}\n`,
      },
    },
    {
      type: "actions",
      elements: [
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Edit Profile",
            emoji: true,
          },
          style: "primary",
          value: "edit_profile",
          action_id: "edit_profile",
        },
      ],
    },
  ];
};

// Default create profile prompt component
const defaultProfile = () => {
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
        text: " ",
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: ":bookmark: *Your Profile*",
      },
    },
    {
      type: "context",
      elements: [
        {
          type: "plain_text",
          text: "View and edit your profile.",
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

const editProfile = () => {
  return {
    callback_id: "modal_edit_profile",
    title: {
      type: "plain_text",
      text: "Edit Profile",
      emoji: true,
    },
    submit: {
      type: "plain_text",
      text: "Save",
      emoji: true,
    },
    type: "modal",
    close: {
      type: "plain_text",
      text: "Cancel",
      emoji: true,
    },
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*Update your profile here.*",
        },
      },
      {
        type: "divider",
      },
      {
        type: "input",
        element: {
          type: "plain_text_input",
          action_id: "profile_enter_username",
          placeholder: {
            type: "plain_text",
            text: "John Smith",
            emoji: true,
          },
        },
        label: {
          type: "plain_text",
          text: "Your Full Name",
          emoji: true,
        },
      },
      {
        type: "input",
        element: {
          type: "plain_text_input",
          action_id: "profile_enter_year",
          placeholder: {
            type: "plain_text",
            text: "2023",
            emoji: true,
          },
        },
        label: {
          type: "plain_text",
          text: "Your Graduation Year",
          emoji: true,
        },
      },
      {
        type: "input",
        element: {
          type: "multi_static_select",
          placeholder: {
            type: "plain_text",
            text: "Select options",
            emoji: true,
          },
          options: [
            {
              text: {
                type: "plain_text",
                text: "Web Programming",
                emoji: true,
              },
              value: "value-0",
            },
            {
              text: {
                type: "plain_text",
                text: "Machine Learning",
                emoji: true,
              },
              value: "value-1",
            },
            {
              text: {
                type: "plain_text",
                text: "Product Management",
                emoji: true,
              },
              value: "value-2",
            },
            {
              text: {
                type: "plain_text",
                text: "UI & UX Design",
                emoji: true,
              },
              value: "value-3",
            },
            {
              text: {
                type: "plain_text",
                text: "Data Structure & Algorithms",
                emoji: true,
              },
              value: "value-4",
            },
            {
              text: {
                type: "plain_text",
                text: "Software Development",
                emoji: true,
              },
              value: "value-5",
            },
            {
              text: {
                type: "plain_text",
                text: "Data Science",
                emoji: true,
              },
              value: "value-6",
            },
            {
              text: {
                type: "plain_text",
                text: "Game Development",
                emoji: true,
              },
              value: "value-7",
            },
            {
              text: {
                type: "plain_text",
                text: "Cybersecurity",
                emoji: true,
              },
              value: "value-8",
            },
            {
              text: {
                type: "plain_text",
                text: "Mathematics",
                emoji: true,
              },
              value: "value-9",
            },
            {
              text: {
                type: "plain_text",
                text: "DevOps",
                emoji: true,
              },
              value: "value-10",
            },
          ],
          action_id: "profile_enter_expertise",
        },
        label: {
          type: "plain_text",
          text: "Your Expertise",
          emoji: true,
        },
      },
    ],
  };
}

module.exports = {
  createProfile: createProfile,
  defaultProfile: defaultProfile,
  viewProfile: viewProfile,
  editProfile: editProfile,
};
