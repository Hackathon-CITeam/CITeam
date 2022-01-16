// MODAL: Render the view for creating a new post
const createPost = () => {
  return {
    callback_id: "modal_create_post",
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
          type: "static_select",
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
                text: "CIS 500",
                emoji: true,
              },
              value: "value-7",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 501",
                emoji: true,
              },
              value: "value-8",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 502",
                emoji: true,
              },
              value: "value-9",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 505",
                emoji: true,
              },
              value: "value-10",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 511",
                emoji: true,
              },
              value: "value-11",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 515",
                emoji: true,
              },
              value: "value-12",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 518",
                emoji: true,
              },
              value: "value-13",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 519",
                emoji: true,
              },
              value: "value-14",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 520",
                emoji: true,
              },
              value: "value-15",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 521",
                emoji: true,
              },
              value: "value-16",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 522",
                emoji: true,
              },
              value: "value-17",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 523",
                emoji: true,
              },
              value: "value-18",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 526",
                emoji: true,
              },
              value: "value-19",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 530",
                emoji: true,
              },
              value: "value-20",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 535",
                emoji: true,
              },
              value: "value-21",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 536",
                emoji: true,
              },
              value: "value-22",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 537",
                emoji: true,
              },
              value: "value-23",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 540",
                emoji: true,
              },
              value: "value-24",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 541",
                emoji: true,
              },
              value: "value-25",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 542",
                emoji: true,
              },
              value: "value-26",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 545",
                emoji: true,
              },
              value: "value-27",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 547",
                emoji: true,
              },
              value: "value-28",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 548",
                emoji: true,
              },
              value: "value-29",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 549",
                emoji: true,
              },
              value: "value-30",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 550",
                emoji: true,
              },
              value: "value-31",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 551",
                emoji: true,
              },
              value: "value-32",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 552",
                emoji: true,
              },
              value: "value-33",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 553",
                emoji: true,
              },
              value: "value-34",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 554",
                emoji: true,
              },
              value: "value-35",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 555",
                emoji: true,
              },
              value: "value-36",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 556",
                emoji: true,
              },
              value: "value-37",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 557",
                emoji: true,
              },
              value: "value-38",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 559",
                emoji: true,
              },
              value: "value-39",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 560",
                emoji: true,
              },
              value: "value-40",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 561",
                emoji: true,
              },
              value: "value-41",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 562",
                emoji: true,
              },
              value: "value-42",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 563",
                emoji: true,
              },
              value: "value-43",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 564",
                emoji: true,
              },
              value: "value-44",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 565",
                emoji: true,
              },
              value: "value-45",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 566",
                emoji: true,
              },
              value: "value-46",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 567",
                emoji: true,
              },
              value: "value-47",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 568",
                emoji: true,
              },
              value: "value-48",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 571",
                emoji: true,
              },
              value: "value-49",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 573",
                emoji: true,
              },
              value: "value-50",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 580",
                emoji: true,
              },
              value: "value-51",
            },
            {
              text: {
                type: "plain_text",
                text: "CIS 581",
                emoji: true,
              },
              value: "value-52",
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
          type: "multi_users_select",
          placeholder: {
            type: "plain_text",
            text: "Select users",
            emoji: true,
          },
          action_id: "post_enter_member",
        },
        label: {
          type: "plain_text",
          text: "Current Member(s)",
          emoji: true,
        },
      },
      // {
      //   type: "input",
      //   element: {
      //     type: "multi_static_select",
      //     placeholder: {
      //       type: "plain_text",
      //       text: "Select options",
      //       emoji: true,
      //     },
      //     options: [
      //       {
      //         text: {
      //           type: "plain_text",
      //           text: "Ruichen Zhang",
      //           emoji: true,
      //         },
      //         value: "value-0",
      //       },
      //       {
      //         text: {
      //           type: "plain_text",
      //           text: "Ruifan Wang",
      //           emoji: true,
      //         },
      //         value: "value-1",
      //       },
      //       {
      //         text: {
      //           type: "plain_text",
      //           text: "Jiayun(Seren) Liu",
      //           emoji: true,
      //         },
      //         value: "value-2",
      //       },
      //       {
      //         text: {
      //           type: "plain_text",
      //           text: "Wentao Xu",
      //           emoji: true,
      //         },
      //         value: "value-3",
      //       },
      //       {
      //         text: {
      //           type: "plain_text",
      //           text: "Yihong(Joanne) Zhang",
      //           emoji: true,
      //         },
      //         value: "value-4",
      //       },
      //     ],
      //     action_id: "post_enter_member",
      //   },
      //   label: {
      //     type: "plain_text",
      //     text: "Current Member (Optional)",
      //     emoji: true,
      //   },
      // },
      {
        type: "input",
        element: {
          type: "static_select",
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
          text: "Message",
          emoji: true,
        },
      },
    ],
  };
};

// TODO: editPost

// TODO: deletePost

module.exports = {
  createPost: createPost,
};
