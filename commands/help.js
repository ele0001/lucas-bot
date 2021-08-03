const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'help',
	description: 'Just a test command',
	aliases: [],
	guildOnly: false,
	args: false,
	usage: '',
	execute: async(message, args, client) => {
        let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    //Custom Help command by using the second argument.
    if(helpArgs[0] === 'gaming') {
        return message.reply("This is a Gaming information Command.")
    }

    //Normal usage of (prefix)help without any args. (Shows all of the commands and you should set the commands yourself)
    if(!helpArgs[0]) {
        var embed = new Discord.MessageEmbed()
            .setAuthor(`All commands are listed here:`)
            .addFields({
              name: '``` Moderation ```',
              value: '```ban @target | lock | unlock | kick | unban | slowmode ```',
            })
            .setAuthor(`All commands are listed here:`)
            .addFields({
              name: '``` Fun ```',
              value: '```cat | dog | dice | coinflip | meme ```',
            })
            .addFields({
              name: '``` Miscellaneous ```',
              value: '```corona [country] or corona [shows worldwide] | invite | ping | serverinfo | userinfo ```',
            })             
            .addFields({ name: 'Prefix', value: '```?```', inline: true})
            .setColor('#00FFF3')
            
        message.channel.send(`${message.author}, I have sent a DM.`)
        message.author.send(embed);
    }

    //Reads the moudle.exports.config (This line of code is on commands folder, each command will read automaticly) by the second argument (the command name) and shows the information of it.
    if(helpArgs[0]) {
        let command = helpArgs[0];

        if(bot.commands.has(command)) {
            
            command = bot.commands.get(command);
            var embed = new Discord.MessageEmbed()
            .setAuthor(`${command.config.name} Command`)
            .setDescription(`
            - **Command's Description** __${command.config.description || "There is no Description for this command."}__
            - **Command's Usage:** __${command.config.usage || "No Usage"}__
            - **Command's Permissions:** __${command.config.accessableby || "Members"}__
            - **Command's Aliases:** __${command.config.aliases || "No Aliases"}__
            `)
            .setColor('#2EFF00')
    }}
	},
};