const util = require("../util.js");

// Render my posts on home page
const renderMyPost = (
  postId,
  name,
  course,
  expertise,
  member,
  capacity,
  message
) => {
  return [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `${util.concatChannelName(name, course)}   ${
          member.length + 1
        } members\n:bust_in_silhouette:${util.concatMemberName(
          name,
          member
        )}\n:books: ${course}\n:raised_hands: Recruit for *${capacity}* teammates\n :sparkles: ${expertise.join(
          ", "
        )}`,
      },
    },
    {
      type: "section",
      text: {
        type: "plain_text",
        text: `${message}`,
        emoji: true,
      },
    },
    {
      type: "actions",
      elements: [
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Edit",
            emoji: true,
          },
          value: "mypost_edit",
          style: "primary",
          action_id: `mypost_edit_${postId}`,
        },
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Delete",
            emoji: true,
          },
          value: "mypost_delete",
          style: "danger",
          action_id: `mypost_delete_${postId}`,
        },
      ],
    },
    {
      type: "divider",
    },
  ];
};

// Render all posts on home page
const renderAllPost = (
  postId,
  name,
  course,
  expertise,
  member,
  capacity,
  message
) => {
  return [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `${util.concatChannelName(name, course)}   ${
          member.length + 1
        } members\n:bust_in_silhouette:${util.concatMemberName(
          name,
          member
        )}\n:books: ${course}\n:raised_hands: Recruit for *${capacity}* teammates\n :sparkles: ${expertise.join(
          ", "
        )}`,
      },
    },
    {
      type: "section",
      text: {
        type: "plain_text",
        text: `${message}`,
        emoji: true,
      },
    },
    {
      type: "actions",
      elements: [
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Join Channel",
            emoji: true,
          },
          value: "join_channel",
          style: "primary",
          action_id: `join_channel_${postId}`,
        },
      ],
    },
    {
      type: "divider",
    },
  ];
};

module.exports = {
  renderMyPost: renderMyPost,
  renderAllPost: renderAllPost,
};
