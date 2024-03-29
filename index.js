const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();


const fs = require('fs');
//const token = process.env.token;
const botconfig = require('./botconfig.json');
let cooldown = new Set();
let cdseconds = 5;
const token = process.env.token;

fs.readdir('./commands/', (err, files) => {
    if (err) return console.log(err);
    const jsfile = files.filter(f => f.split(".").pop() === 'js');
    if (jsfile.length <= 0) {
        return console.log("No commands have been found");
    }

    jsfile.forEach((f) => {
        delete require.cache[require.resolve(`./commands/${f}`)];
        const props = require(`./commands/${f}`);
        console.log(`${f} loaded`);
        client.commands.set(props.help.name, props);
    });
});

client.on('ready', () => {
    console.log(`${client.user.username} is online`);
    client.user.setActivity(`?help | v1.0.0`, {type: 'LISTENING'});
});

client.on('destroy', () =>{
    client.login(token);
});

client.on('message', message => {

    function emoji (id) {
        return client.emojis.get(id).toString();
    }

    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;
    if (message.content === 'what is the date') {
        message.delete(1);
        const date = new Date().toUTCString();
        message.reply(`${date} ${emoji('602343210374922281')}`)
            .then(msg => {
                msg.delete(6000);
            });
    }
    if (message.content === 'ping') {
        message.delete(3000);
        message.channel.send(`Pong!  ${message.author.toString()}`)
            .then(msg => {
                msg.react('🏓');
                msg.delete(3000);
            });
    }
    if(message.content === 'test') {
        message.delete(1);
        client.channels.find('name','welcome').send('test');
    }
    if(message.content === 'Ping') {
        message.delete(3000);
        message.channel.send(`Pong! ${message.author.toString()}`)
            .then(msg => {
                msg.react('🏓'); 
                msg.delete(3000);
            });

    }


    const prefix = botconfig.prefix;
    if (message.content.indexOf(prefix) !== 0) return;
    const messageArray = message.content.split(" ");
    const cmd = messageArray[0];
    const args = messageArray.slice(1);

    const commandFile = client.commands.get(cmd.slice(prefix.length));
    if (commandFile) commandFile.run(client, message, args);

});

client.on("guildMemberAdd", function(member) {
    member.send(`Hello ${member.toString()}! And welcome to Chill Scrims!\nThank you for joining us and we hope you have a great time! 😀`);
    client.channels.find('name', '👋-welcome').send(`Welcome to Chill Scrims ${member.toString()}! Be sure to read <#609977425794826266>!!`);
    const chillerRole = member.guild.roles.find('name', '- Chiller -');
    member.addRole(chillerRole);

});
client.on('guildMemberRemove', function(member) {
    client.channels.find('name', '👋-welcome').send(`Goodbye ${member.toString()}... We will miss you 👋`);
});


client.login(token);