const Discord = require('discord.js');
const client = new Discord.Client();
const ms = require('ms');

module.exports = {
	name: 'slowmode',
	description: 'Just a test command',
	aliases: [],
	guildOnly: false,
	args: false,
	usage: '',
	execute: async(message, args, client) => {
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send("You can't use this command because you don't have _**'MANAGE_CHANNELS'**_ permission.").then(m => m.delete({ timeout: 5000 }));

        if (!args[0]) return message.channel.send('You did not specify a time!').then(m => m.delete({ timeout: 5000}));

        const currentCooldown = message.channel.rateLimitPerUser;

        const reason = args[1] ? args.slice(1).join(' ') : 'no reason';

        const embed = new Discord.MessageEmbed()
            .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));

        if (args[0] === 'off') {

            if (currentCooldown === 0) return message.channel.send('Channel cooldown is already off').then(m => m.delete({ timeout: 5000 }));

             const logo = "https://i.ibb.co/B3GNTZj/discord-avatar-512-QDDGT.png"
             const embed2 = new Discord.MessageEmbed()
              .setTitle('Slowmode')
              .setAuthor('Lucas')
              .setThumbnail(logo)
              .setFooter('discord.link/lucasians')
              .setColor('RANDOM')
              .addFields({
               name: 'Slowmode has been disabled.',
               value: '\u200B',
             })
            message.channel.send(embed2)
            return message.channel.setRateLimitPerUser(0, reason)

        }

        const time = ms(args[0]) / 1000;

        if (isNaN(time)) return message.channel.send('not a valid time, please try again!').then(m => m.delete({ timeout: 5000 }));

        if (time >= 21600) return message.channel.send('That slowmode limit is too high, please enter anything lower than 6 hours.').then(m => m.delete({ timeout: 5000 }));

        if (currentCooldown === time) return message.channel.send(`Slowmode is already set to ${args[0]}`);

        embed.setTitle('Slowmode Enabled')
            .addField('Slowmode: ', args[0])
            .addField('Reason: ', reason)
            .setColor('#ff0000');

        message.channel.setRateLimitPerUser(time, reason).then(m => m.send(embed));
	},
};