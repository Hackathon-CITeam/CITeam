const util = require("../util.js");

// Render the confirm join channel modal
const joinChannel = (name, course, expertise, member, capacity) => {
  return {
    callback_id: "modal_join_channel",
    title: {
      type: "plain_text",
      text: "Join Channel",
      emoji: true,
    },
    submit: {
      type: "plain_text",
      text: "Confirm",
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
        type: "divider",
      },
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
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Are you sure you want to join the channel ${util.concatChannelName(
            name,
            course
          )}?*`,
        },
      },
    ],
  };
};

module.exports = {
  joinChannel: joinChannel,
};
