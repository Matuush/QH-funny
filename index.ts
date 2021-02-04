import fs from 'fs';
import path from 'path';
import Discord from 'discord.js';
import colors from 'colors';
import { Sensitive } from './types.d';
colors;
const sensitive: Sensitive = JSON.parse(fs.readFileSync(path.join(__dirname, `./sensitive.json`)).toString());
const TOKEN = sensitive.token;

const client = new Discord.Client();

client.on("ready", () => {
    console.log("I AM READY!".red);
});
client.on("message", msg => {
    if (sensitive.userIDs.includes(msg.author.id)) {
        const index = Math.round(Math.random() * (sensitive.messages.length - 1));
        msg.channel.send(sensitive.messages[index]);
    }
});
client.login(TOKEN);