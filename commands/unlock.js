const Discord = require('discord.js');

module.exports = {
	name: 'unlock',
	description: 'Just a test command',
	aliases: [],
	guildOnly: false,
	args: false,
	usage: '',
	execute: async(message, args, client) => {
    const member = message.mentions.users.first();
    if (!message.member.hasPermission('MANAGE_CHANNELS')) {
    return message.channel.send("You can't use this command because you don't have _**'MANAGE_CHANNELS'**_ permission.")
    }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        null : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setTitle("Channel Updates")
   .setDescription(`🔓 ${message.channel}  has been unlocked by ${message.author}`)
   .setColor("RANDOM");
   await message.channel.send(embed);
   message.delete();
	},
};