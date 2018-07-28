const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("OOF. You do not appear to have access to this command, you need to be able to manage messages to do this!");
  if (!args[0]) return message.reply("You did not specify the amount to delete");
  let x = args[0]+1;
  message.channel.bulkDelete(x).then(() => {
    message.channel.send(`Cleared ${args[0]} messaged from this chat.`).then(msg => msg.delete(5000));
  });
};

module.exports.help ={
  name: "clear"
}
