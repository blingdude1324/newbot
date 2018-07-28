const Discord = require('discord.js');
const client = new Discord.client();

client.on('ready', () => {
  console.log("SolBot Activated.");
});

client.on('message', message => {
  if (message.content === 'stats') {
    message.reply('Currently in development of version 0.0.1');
  }
});

client.login(process.env.token);
