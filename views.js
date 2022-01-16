// MODAL: Render the view for creating user profile
// TODO: should pass in user id
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

// MODAL: Render the view for creating a new post
// TODO: should pass in user id
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
          action_id: "post_enter_username",
          placeholder: {
            type: "plain_text",
            text: "Enter your name",
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
                text: "CIT 590",
                emoji: true,
              },
              value: "value-0",
            },
            {
              text: {
                type: "plain_text",
                text: "CIT 591",
                emoji: true,
              },
              value: "value-1",
            },
            {
              text: {
                type: "plain_text",
                text: "CIT 592",
                emoji: true,
              },
              value: "value-2",
            },
            {
              text: {
                type: "plain_text",
                text: "CIT 593",
                emoji: true,
              },
              value: "value-3",
            },
            {
              text: {
                type: "plain_text",
                text: "CIT 594",
                emoji: true,
              },
              value: "value-4",
            },
            {
              text: {
                type: "plain_text",
                text: "CIT 595",
                emoji: true,
              },
              value: "value-5",
            },
            {
              text: {
                type: "plain_text",
                text: "CIT 596",
                emoji: true,
              },
              value: "value-6",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 520",
                emoji: true,
              },
              value: "value-7",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 545",
                emoji: true,
              },
              value: "value-8",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 550",
                emoji: true,
              },
              value: "value-9",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 555",
                emoji: true,
              },
              value: "value-10",
            },
          ],
          action_id: "post_enter_course",
        },
        label: {
          type: "plain_text",
          text: "Course Name",
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
          ],
          action_id: "post_enter_expertise",
        },
        label: {
          type: "plain_text",
          text: "Your Expertise",
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
                text: "Ruichen Zhang",
                emoji: true,
              },
              value: "value-0",
            },
            {
              text: {
                type: "plain_text",
                text: "Ruifan Wang",
                emoji: true,
              },
              value: "value-1",
            },
            {
              text: {
                type: "plain_text",
                text: "Jiayun(Seren) Liu",
                emoji: true,
              },
              value: "value-2",
            },
            {
              text: {
                type: "plain_text",
                text: "Wentao Xu",
                emoji: true,
              },
              value: "value-3",
            },
            {
              text: {
                type: "plain_text",
                text: "Yihong(Joanne) Zhang",
                emoji: true,
              },
              value: "value-4",
            },
          ],
          action_id: "post_enter_member",
        },
        label: {
          type: "plain_text",
          text: "Current Member (Optional)",
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
                text: "1",
                emoji: true,
              },
              value: "value-0",
            },
            {
              text: {
                type: "plain_text",
                text: "2",
                emoji: true,
              },
              value: "value-1",
            },
            {
              text: {
                type: "plain_text",
                text: "3",
                emoji: true,
              },
              value: "value-2",
            },
            {
              text: {
                type: "plain_text",
                text: "4",
                emoji: true,
              },
              value: "value-3",
            },
            {
              text: {
                type: "plain_text",
                text: "5",
                emoji: true,
              },
              value: "value-4",
            },
          ],
          action_id: "post_enter_number",
        },
        label: {
          type: "plain_text",
          text: "Number of teammates you want to recruit",
          emoji: true,
        },
      },
      {
        type: "input",
        element: {
          type: "plain_text_input",
          multiline: true,
          action_id: "post_enter_message",
          placeholder: {
            type: "plain_text",
            text: "Specify your need ...",
            emoji: true,
          },
        },
        label: {
          type: "plain_text",
          text: "Message (Optional)",
          emoji: true,
        },
      },
    ],
  };
};

module.exports = {
  createProfile: createProfile,
  createPost: createPost,
};