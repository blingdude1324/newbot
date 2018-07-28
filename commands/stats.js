const Discord = require("discord.js");
const info = require("./package.json");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let statsembed = new Discord.RichEmbed()
    .setTitle("Bot Statistics")
    .setDescription("The general information of the bot")
    .setColor("#33fede")
    .setThumbnail(bicon)
    .addField("Name", bot.user.username)
    .addField("Created on", bot.user.createdAt)
    .addField("Current version", info.version);
  message.channel.send(statsembed);
}

module.exports.help = {
  name: "stats"
}
