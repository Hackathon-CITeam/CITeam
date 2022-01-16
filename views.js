// MODAL: Render the view for creating user profile
// TODO: should pass in user id
const createProfile = () => {
  return {
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
          action_id: "enter_username",
        },
        label: {
          type: "plain_text",
          text: "Your Full Name",
          emoji: true,
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "\n",
        },
      },
      {
        type: "input",
        element: {
          type: "plain_text_input",
          action_id: "enter_year",
        },
        label: {
          type: "plain_text",
          text: "Your Graduation Year",
          emoji: true,
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "\n",
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
          ],
          action_id: "enter_expertise",
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

// MODAL: Render the view for creating a new post
const createPost = () => {
  return {
    title: {
      type: "plain_text",
      text: "Create Post",
      emoji: true,
    },
    submit: {
      type: "plain_text",
      text: "Create",
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
          text: "*Create a post to recruit members for your course project.*",
        },
      },
      {
        type: "divider",
      },
      {
        type: "input",
        element: {
          type: "plain_text_input",
          action_id: "display_username",
          placeholder: {
            type: "plain_text",
            text: "Ruichen Zhang",
            emoji: true,
          },
        },
        label: {
          type: "plain_text",
          text: "Your Name",
          emoji: true,
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "\n",
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
                text: "CIT 594",
                emoji: true,
              },
              value: "value-0",
            },
            {
              text: {
                type: "plain_text",
                text: "CIT 595",
                emoji: true,
              },
              value: "value-1",
            },
            {
              text: {
                type: "plain_text",
                text: "CIT 596",
                emoji: true,
              },
              value: "value-2",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 550",
                emoji: true,
              },
              value: "value-3",
            },
          ],
          action_id: "enter_course",
        },
        label: {
          type: "plain_text",
          text: "Course Name",
          emoji: true,
        },
      },
    ],
  };
}

module.exports = {
  createProfile: createProfile,
  createPost: createPost,
};