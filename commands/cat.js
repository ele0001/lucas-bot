const fetch = require('node-fetch');
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'cat',
	description: 'Just a test command',
	aliases: [],
	guildOnly: false,
	args: false,
	usage: '',
	execute: async(message, args, client) => {
    const logo = "https://i.ibb.co/B3GNTZj/discord-avatar-512-QDDGT.png"
    const embed1 = new Discord.MessageEmbed()
     .setTitle('Cat command')
     .setAuthor('Lucas')
     .setThumbnail(logo)
     .setFooter('discord.link/lucasians')
     .setColor('RANDOM')
     .addFields({
       name: 'Generating your adorable cat picture...',
       value: 'Lucas, created by ele`#0001`',
     })
     let msg = message.channel.send(embed1).then(msg=>msg.delete({timeout:"2000"/*Time until delete in milliseconds*/}));
            let res = await fetch("https://www.thatcopy.pw/catapi/rest/")
        let json = await res.json()
        let embed = new Discord.MessageEmbed()
            .setImage(json.webpurl)
        message.channel.send(embed)
	},
};