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


/*
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let approvedusers = ["258757935377809409","216587031944364032","271910520980897792"]

    
    if (args.length  < 1) return message.reply("You must supply a Guild ID");
    if (!approvedusers.includes(message.author.id)) return message.reply("No permission to use this command");
    bot.guilds.get(args.join(" "))
    let defaultchannel = message.guild.channels.find(`name`, "general");
    let currentguild = bot.guilds.get(args.join(" "))



defaultchannel.send("Bot is being withdrawn from this server. Contact a bot Admin for more info")
    let leaveEmbed = new Discord.RichEmbed()
    .setDescription("~Left Guild~")
    .setColor("#a500ff")
    .addField("Guild", bot.guilds.get(args.join(" ")).name)
    .addField("Time", message.createdAt)
    .addField("Admin", message.author.id)
    bot.guilds.get("544276344792678410").channels.get("556918928635330624").send(leaveEmbed)

    bot.guilds.get(args.join(" ")).leave()
   .then(g => console.log(`Left the guild ${g}`)) .catch(console.error);
   


    }
 
    module.exports.help = {
      name: "leave"
    }



    */
