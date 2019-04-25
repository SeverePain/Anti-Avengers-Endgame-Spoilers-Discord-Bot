const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = bot.user.displayAvatarURL;
     let serverembed = new Discord.RichEmbed()
     .setDescription("Help")
     .setColor("#f4fc00")
     .setThumbnail(sicon)
     .addField("Bot User Commands"," tickets, botinfo , invite")
     .addField("Bot Prefix:", "^")
     message.channel.send(serverembed);
}
 
module.exports.help = {
  name: "help"
}
