require("dotenv").config();

const axios = require("axios");
const { Client, GatewayIntentBits, ChannelType } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  setInterval(() => updateChannelInfo(client), 60000);
});
async function updateChannelInfo(client) {
  try {
    const response = await axios.get("https://api.xeggex.com/api/v2/ticker/Symbol%2FUSDT"); // add your api url here  
    const lastPrice = parseFloat(response.data.last_price).toFixed(2);
    const changePercent = response.data.change_percent;
    const arrow = changePercent.startsWith("-") ? "↓" : "↑";


    const regexPattern = /^symbol:.*/; //add symbol here to match the channel name. 
// Example /^BTC:.*/ will match the channel "BTC: $60,000 ↓ -2.52%"
    
  
    const allowedServers = ["test1", "test2"]; // add server names here


    client.guilds.cache.forEach(async (guild) => {

    if (allowedServers.includes(guild.name)) {
        try {
            const channel = guild.channels.cache.find((ch) => ch.type === ChannelType.GuildVoice && regexPattern.test(ch.name));
            if (channel) {
                console.log(`Updating channel on server ${guild.name}`);
                await channel.setName(`HMS: $${lastPrice} ${arrow} ${changePercent}%`);
            } else {
                console.log(`No suitable channel found on server ${guild.name}.`);
            }
        } catch (guildError) {
            console.error(`Error updating channel on server ${guild.name}:`, guildError);
        }
    } else {
        console.log(`Skipping server ${guild.name} - not allowed.`);
    }
    });
  } catch (error) {
    console.error("Error updating channel info:", error);
  }
}

client.login(process.env.BOT_TOKEN);
