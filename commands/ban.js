const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'ban',
	description: 'Just a test command',
	aliases: [],
	guildOnly: false,
	args: false,
	usage: '',
	execute: async(message, args, client) => {
    const logo = "https://i.ibb.co/B3GNTZj/discord-avatar-512-QDDGT.png"
    const embed = new Discord.MessageEmbed()
     .setTitle('Ban process')
     .setAuthor('Lucas')
     .setThumbnail(logo)
     .setFooter('discord.link/lucasians')
     .setColor('RANDOM')
     .addFields({
       name: 'Target was banned succesfully.',
       value: 'Lucas, created by ele`#0001`',
     })
    const member = message.mentions.users.first();
    if (!message.member.hasPermission('BAN_MEMBERS')) {
    return message.channel.send("You can't use this command because you don't have _**'BAN_MEMBERS'**_ permission.")
   }
    if(member){
      const MemberTarget = message.guild.members.cache.get(member.id);
       MemberTarget.ban();
      message.channel.send(embed);
    } else {
      message.channel.send("You didn't provide a user or I can't ban this user due to not having enough permissions.")
    }
	},
};