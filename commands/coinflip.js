  async function animate(){
    message = (arguments[0])
    const sentMessage = await message.channel.send(arguments[1]);
    for (let i=2; i < arguments.length; i++) {
            await sentMessage.edit(arguments[i]);
            }

}
function flip(){
    x = Math.floor(Math.random() * 2) == 0;
    if(x){
    	return "heads";
    }else{
        return "tails";
    }
}

const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'coinflip',
	description: 'Just a test command',
	aliases: [],
	guildOnly: false,
	args: false,
	usage: '',
	execute: async(message, args, client) => {
    const logo = "https://i.ibb.co/B3GNTZj/discord-avatar-512-QDDGT.png"
    const embed1 = new Discord.MessageEmbed()
     .setTitle(`Landed on **${flip()}**`)
     .setAuthor('Lucas')
     .setThumbnail(logo)
     .setColor('RANDOM')
     .addFields({
       name: 'Coinflip game',
       value: 'discord.link/lucasians',
     })
            message.channel.send(embed1)
	},
};