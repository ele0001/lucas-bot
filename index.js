const fs = require("fs");
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../config.json')
const keepAlive = require('./server.js')


client.on("ready", () => {
  console.log('Bot is on')
  client.user.setActivity(`${client.users.cache.size} users.`, { type: 'WATCHING' });
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir('./events/', (err, files) => {
	const eventHandler = require('./handler/eventHandler.js');
	eventHandler(err, files, client);
});
fs.readdir('./commands/', (err, files) => {
	const commandHandler = require('./handler/commandHandler.js');
	commandHandler(err, files, client);
});

client.on('guildMemberAdd', member => { //when someone new joins a guild
    client.user.setActivity(`${client.users.cache.size} users | ?help`, { type: 'WATCHING' }); //Update the activity every time someone joins a guild
});

keepAlive()
client.login("TOKENHERE")