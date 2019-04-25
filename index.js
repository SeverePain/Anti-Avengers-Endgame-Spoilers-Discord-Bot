const botconfig = require("./botconfig.json");
const tokenfile = process.env.ENDtoken
const Discord = require("discord.js");
const superagent = require("superagent");
const fs = require("fs");
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
  bot.user.setActivity("Made by SeverePain#0001", {type: "PLAYING"});
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
let blacklisted = ["Iron Man Dies", "Tony Stark Dies", "Thanos Dies", "Captain America Weilds Thors Hammer","tony dies","iron man dies","stark dies","iron man funeral","tony stark/iron man dies", "iron man/tony stark dies"]

let foundInText = false;

  for (var i in blacklisted){
   if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
  }

if (foundInText){
message.delete();

message.channel.send('Spoiling Endgame is NOT ALLOWED!');

}
  
}); //end of Message Function

bot.on("messageUpdate", function(oldMessage, newMessage){





})

bot.login(tokenfile);
