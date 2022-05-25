const Discord = require('discord.js');
const client = Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on('ready', () => {
    console.log(`${client.user.username} is ready!`);
})
client.on('message', message => {
    if(message.content === 'Hello'){
       message.reply('Hi bro');
        }
})
client.login(process.env.TOKEN)
