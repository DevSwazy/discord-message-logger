const Discord = require("discord.js");
const client = new Discord.Client();
var colors = require('colors');
const setTitle = require('node-bash-title');
const logs = require("discord-logs")
logs(client);
const readline = require('readline');
const settings = require('./settings.json')

client.on("ready", () => {
    console.clear();
    console.log("Message Logger")

});

client.on("messageUpdate", (message, oldContent, newContent) => {
    if(message.author.bot) return;
    console.log(`Message by ${message.author.tag} edited in ${message.guild.name} | "${oldContent}" -> "${newContent}"`.info);
    console.log("");

});

client.on("messageDelete", async(message) => {
if(message.author.bot) return;
console.log(`Message by ${message.author.tag} in ${message.guild.name} deleted: "${message}" `.error);
console.log("");
});

client.login(settings.token)
