const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let approvedusers = ["258757935377809409","216587031944364032","271910520980897792"]
//test
    
    if (args.length  < 1) return message.reply("You must supply a Guild ID");
    if (!approvedusers.includes(message.author.id)) return message.reply("No permission to use this command");
    console.log(args.join(" "))
    let currentguild = bot.guilds.get(args.join(" "))
    bot.guilds.get(args.join(" ")).leave()
   


    }
 
    module.exports.help = {
      name: "leave"
    }
