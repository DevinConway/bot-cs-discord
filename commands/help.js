const Discord = require('discord.js');


module.exports.run = async (client, message, args) => {

    message.delete(1);

	const author0 = message.member.displayName;
	const author1 = message.author.toString();

	if (!message.member.hasPermission("ADMINISTRATOR")) {
		const commEmbed0 = new Discord.RichEmbed()
			.setAuthor(`Here are the commands available to you ${author0}!`)
			.setColor('RANDOM')
			.addField('__?help__', '_This command will send you a message of all commands_\n**Use:** m!help')
			.setThumbnail(message.author.displayAvatarURL)
			.setFooter('Made by: "RaiLs_#1000"')
			.setTimestamp([new Date().toUTCString()])
        message.channel.send(`You've got mail ${message.author.toString()}! 📬`)
            .then(msg => {
                msg.delete(5000);
            });
		message.author.sendMessage(commEmbed0);
	}
	if (message.member.hasPermission('ADMINISTRATOR')) {
		const commEmbed0 = new Discord.RichEmbed()
			.setAuthor(`Here are the commands available to you ${author0}!`)
			.setColor('RANDOM')
			.addField('__?help__', '_This command will send you a message of all commands_\n**Use:** m!help')
			.setThumbnail(message.author.displayAvatarURL)
			.setFooter('Made by: "RaiLs_#1000')
			.setTimestamp([new Date().toUTCString()])
        message.channel.send(`You've got mail ${message.author.toString()}! 📬`)
            .then(msg => {
                msg.delete(5000);
            });
		message.author.sendMessage(commEmbed0);

		const commEmbed1 = new Discord.RichEmbed()
			.setAuthor(`And since you are an admin, ${author0}, you can use these commands!`)
			.setColor('RANDOM')
			.addField('__?solo__', '_This command will start a solo custom game_\n**Use:** ?solo [host] [matchmaking key]')
			.addField('__?asolo__', '_This command will start an arena solo custom game_\n**Use:** ?solo [host] [matchmaking key]')
			.addField('__?duos__', '_This command will start a duos custom game_\n**Use:** ?duos [host] [matchmaking key]')
			.addField('__?aduos__', '_This command will start an arena duos custom game_\n**Use:** ?aduos [host] [matchmaking key]')
            .addField('__?squads__', '_This command will start a squads custom game_\n**Use:** ?squads [host] [matchmaking key]')
            .addField('__?asquads__', '_This command will start an areana squads custom game_\n**Use:** ?asquads [host] [matchmaking key]')
			.setFooter('Made by: "RaiLs_#1000"')
			.setTimestamp([new Date().toUTCString()])
		message.author.sendMessage(commEmbed1);
	}
	

}



module.exports.help = {
	name: 'help'
}