const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  try {
    message.author.send("https://discordapp.com/oauth2/authorize?client_id=571104579903815691&permissions=482470983&scope=bot is the invite link! Make sure you have Dyno and have already created the 'Muted' role. All events are logged in #logs! The bot role should be put above the Muted role for it to work!");.catch()
  }
   catch (e) {
message.reply("I cannot DM you!")
  } 

}
 
    module.exports.help = {
      name: "invite"
    }
