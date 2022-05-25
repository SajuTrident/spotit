const Discord = require('discord.js');
const client = Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});
const keepAlive = require(./server.js);
client.on('ready', () => {
    console.log(`${client.user.username} is ready!`);
})
client.on('message', message => {
    if(message.content === 'Hello'){
       message.reply('Hi bro');
        }
})
keepAlive();
client.login(process.env.TOKEN)
