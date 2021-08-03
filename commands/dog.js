const Discord = require('discord.js');
const client = new Discord.Client();
const superagent = require("superagent");

module.exports = {
	name: 'dog',
	description: 'Just a test command',
	aliases: [],
	guildOnly: false,
	args: false,
	usage: '',
	execute: async(message, args, client) => {
    const logo = "https://i.ibb.co/B3GNTZj/discord-avatar-512-QDDGT.png"
    const embed = new Discord.MessageEmbed()
     .setTitle('Dog command')
     .setAuthor('Lucas')
     .setThumbnail(logo)
     .setFooter('discord.link/lucasians')
     .setColor('RANDOM')
     .addFields({
       name: 'Generating your dog picture...',
       value: 'Lucas, created by ele`#0001`',
     })
          let msg = await message.channel.send(embed);

        let {body} = await superagent
        .get(`https://dog.ceo/api/breeds/image/random`);
        if(!{body}) return message.channel.send("Unfortunately, an error occurred - try running the command again.");

        await message.channel.send({ //await sending message
            files: [{
                attachment: body.message,
                name: "dog.png"
            }]
        }).then(() => msg.delete()); //after message sent delete ...generating... message
	},
};