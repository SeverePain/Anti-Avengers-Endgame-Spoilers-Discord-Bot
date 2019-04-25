const botconfig = require("./botconfig.json");
const tokenfile = process.env.ENDtoken
const Discord = require("discord.js");
const superagent = require("superagent");
const fs = require("fs");
const ms = require("ms");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});
//testing webhook
bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("Watch Avengers: Endgame in theaters now! || Made by SeverePain#0001", {type: "PLAYING"});
  bot.guilds.forEach(function(serverlist){
    console.log(serverlist.name + " with id " + serverlist.id + " | Guild owned by ID " + serverlist.ownerID);
    })
  /*
const list = bot.guilds.get("567346638193033216"); 

list.members.forEach(member => console.log(member.user.username + " with id " + member.user.id));
 */ 
});

bot.on("message", async message => {
  if(message.author.bot) return;  
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
//Lets Hope it doesn't ban everything
let blacklisted = ["Asguard queen","Asgard Queen","Thor appoints Valkyrie as the queen","Rodger gave his shield","Rodgers gives his shield","Captain America gives his shield","Iron Man Dies", "Tony Stark Dies", "Thanos Dies", "Captain America Weilds Thors Hammer","tony dies","iron man dies","stark dies","iron man funeral","tony stark/iron man dies", "iron man/tony stark dies"]

let foundInText = false;

  for (var i in blacklisted){
   if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
  }

if (foundInText){
message.delete();
 let muterole = message.guild.roles.find(`name`, "Muted")
 let mutetime = "1d"
 let tomute = message.author
 tomute.addRole(muterole.id)
message.channel.send('Endgame Spoiler Detected. Message has been removed and user has been muted for 1 day!');
  let SEmbed = new Discord.RichEmbed()
     .setDescription("~SPOILER FOR ENDGAME~")
     .setColor("#000000")
     .addField("User", ` ${message.author}with ID ${message.author.id}`)
     .addField("Said In", message.channel)
     .addField("Time", message.createdAt)
     .addField("Said in guild", message.guild.name)
     .addField("Spoiler Said", '|| ' + message.content + ' ||');
  
let logchannel = message.guild.channels.find(channel => channel.name === "logs")
logchannel.send(SEmbed)

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted!`);
  }, ms(mutetime));

}
  
}); //end of Message Function

bot.on("messageUpdate", function(oldMessage, newMessage){





})

bot.login(tokenfile);
