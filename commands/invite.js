const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.author.send("https://discordapp.com/oauth2/authorize?client_id=571104579903815691&permissions=482470983&scope=bot is the invite link! Make sure you have Dyno and have already created the 'Muted' role. All events are logged in #logs! The bot role should be put above the Muted role for it to work!").catch(err => {
      message.channel.send("I cannot DM you!")
      console.log(err)
      return;
    })


}
 
    module.exports.help = {
      name: "invite"
    }
