const Discord = require('discord.js');
const client = new Discord.Client();

client.on('error', err => {console.log(err)});
client.on('reconnecting', rcnct => {console.log('Reconnecting like a boss, or something.')});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    console.log("message sent")
});

client.login(process.env.BOT_TOKEN);