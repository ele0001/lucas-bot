const Discord = require('discord.js');

module.exports = {
	name: 'ping',
	description: 'Just a test command',
	aliases: [],
	guildOnly: false,
	args: false,
	usage: '',
	execute:(message, args, client) => {
    const logo = "https://i.ibb.co/B3GNTZj/discord-avatar-512-QDDGT.png"
    const embed = new Discord.MessageEmbed()
     .setTitle('Ping process')
     .setAuthor('Lucas')
     .setThumbnail(logo)
     .setFooter('discord.link/lucasians')
     .setColor('RANDOM')
     .addFields({
       name: `🏓 Pong!`,
       value: `Your latency is ${Date.now() - message.createdTimestamp}ms - API latency is ${Math.round(client.ws.ping)}ms.`,
     })
    message.channel.send(embed);  
	},
};