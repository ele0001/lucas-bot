const Discord = require('discord.js');

module.exports = {
	name: 'clear',
	description: 'Just a test command',
	aliases: [],
	guildOnly: false,
	args: false,
	usage: '',
	execute:(message, args, client) => {
    const logo = "https://i.ibb.co/B3GNTZj/discord-avatar-512-QDDGT.png"
    const embed = new Discord.MessageEmbed()
     .setTitle('Clean process')
     .setAuthor('Lucas')
     .setThumbnail(logo)
     .setFooter('discord.link/lucasians')
     .setColor('RANDOM')
     .addFields({
       name: 'Clean process completed succesfully!',
       value: 'Lucas, created by ele`#0001`',
     })
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("You can't use this command because you don't have _**'MANAGE_MESSAGES'**_ permission.").then(m => m.delete({ timeout: 5000 }));

    if(!args[0]) return message.reply("Please enter the amount of messages that you want to clear!");
    if(isNaN(args[0])) return message.reply("Please enter a **real** number! :D");

    if(args[0] > 100) return message.reply("You cannot delete more than 100 messages.");
    if(args[0] < 1) return message.reply("You must delete at least one message!");

    message.channel.messages.fetch({limit: args[0]}).then(messages =>{
      message.channel.bulkDelete(messages);
    message.channel.send(embed).then(msg=>msg.delete({timeout:"5000"}))
  });
	},
};