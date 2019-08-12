const Discord = require('discord.js');
const client = new Discord.Client();

module.exports.run = async (client, message, args) => {

    message.delete(1);

    const host = message.guild.member(message.mentions.users.first());
    const key = args.join(" ").slice(22);

    if(message.member.hasPermission('ADMINISTRATOR')) {
        const embed = new Discord.RichEmbed()
            .setAuthor('Now hosting NAE Custom Game!')
            .setDescription(`**${host} is now hosting a custom game**`)
            .addField('Starting in:', '**10 Minutes**', true)
            .addField('Matchmaking Key:', `**${key}**`, true)
            .addField('Server:', '**North America East _(NAE)_**', true)
            .addField('Gamemode:', '**Squads**')
            .addField('Need to report someone?', `DM <@599719155545014290>`, true)
            .addField('***Rules:***', '**`1.)`** Don\'t fight until the 3rd circle and the 4th one appears\n**`2.)`** No fighting off spawn\n**`3.)`** DON\'T USE MECHS')
            .addField('***Reminders:***', 'No warnings are given; If you break any rules, it will result in a ban\nAnd be sure to react below when queued')
            .setColor('PURPLE')
            .setFooter('Made by "RaiLs_#1000"')
            .setTimestamp([new Date().toUTCString()])


        message.channel.send(embed)
            .then(msg => {
                msg.react('✅');
            });
    }

}


module.exports.help = {
    name: "squads"
}