const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./botconfig.json");

const prefix = botconfig.prefix;

client.login(process.env.token);

client.on('ready', () => {
  console.log("SolBot Activated.");
  client.user.setStatus("away", "In Development")
});

client.on('message', message => {
  if (message.content === 'stats') {
    message.reply('I am currently in development for the version 1 release in September');
  }
});
