const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '--'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

 const fs = require('fs');
const db = fs.database();
client.oN("message", message => {
        if (message.content === "setprefix") {
        if (message.author.id !== "274923685985386496" && !message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`U don't have permission to do that`);
  let args = message.content.split(" ").slice(1);
        let arg = args.join("").substring(message.length)
        if (!arg) return message.channel.send(`Please add a prefix after command like \`\`${prefix}setprefix &\`\``);
        fs.database().ref('servers/' + message.guild.id).update({
            guildname: message.guild.name,
            guildprefix: arg
        }).catch(function(err) {
            message.channel.send(err + "\n\n\n");
        });
        message.channel.send(`prefix updated ${arg} for ${message.guild.name}`);
    }
});

client.login(process.env.BOT_TOKEN);
