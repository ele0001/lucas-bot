const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'invite',
	description: 'Just a test command',
	aliases: [],
	guildOnly: false,
	args: false,
	usage: '',
	execute: async(message, args, client) => {
    const logo = "https://i.ibb.co/B3GNTZj/discord-avatar-512-QDDGT.png"
    const embed = new Discord.MessageEmbed()
     .setTitle('Invite link')
     .setAuthor('Lucas')
     .setThumbnail(logo)
     .setFooter('discord.link/lucasians')
     .setColor('RANDOM')
     .addFields({
       name: `🧬 My invite link!`,
       value: `https://dsc.gg/lucasian`,
     })
     .addFields({
       name: `⚠ DEVELOPER NOTE`,
       value: `Unfortunately, bot requires Administrator permission, bot was failing to execute commands without that. So, please don't worry about if you think bot requiring Administrator for illegal reason.`,
     })
    message.channel.send("I have sent DM for my invite link.")
    message.author.send(embed)
	},
};