const Discord = require('discord.js');
const client = Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on('ready', () => {
    console.log(`${client.user.username} is ready!`);
})
