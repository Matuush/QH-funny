import fs from 'fs';
import path from 'path';
import Discord from 'discord.js';
import colors from 'colors';
import { Sensitive } from './types.d';
colors;
var sensitive: Sensitive = JSON.parse(fs.readFileSync(path.join(__dirname, `./sensitive.json`)).toString());
const TOKEN = sensitive.token;

const client = new Discord.Client();

client.on("ready", () => {
    console.log("I AM READY!".red);
});
client.on("message", async msg => {
    try{sensitive = JSON.parse(fs.readFileSync(path.join(__dirname, `./sensitive.json`)).toString());}
    catch(e){}
    if(msg.author.bot) return;
    if (Object.keys(sensitive.responses).find(key => msg.content.includes(key))) return await msg.channel.send(sensitive.responses[Object.keys(sensitive.responses).find(key => msg.content.includes(key)) || "pardel"]);
    if (sensitive.userIDs.includes(msg.author.id) || msg.channel.type == "dm") {
        const index = Math.round(Math.random() * (sensitive.messages.length - 1));
        await msg.channel.send(sensitive.messages[index]);
    }
});
client.login(TOKEN);