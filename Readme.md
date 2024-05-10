# Discord Price Update Bot

This Discord bot updates voice channel names based on the latest price information from an API. It's designed to work on specific servers and update channels that match a certain naming pattern.

![image](https://github.com/gemdegem/discord-price-bot/assets/94614019/4269c5e9-f2c1-458a-82a3-759011a1921c)

## Installation

### Prerequisites
- **Node.js** (v16 or higher recommended)
- **A Discord Bot Token** https://discord.com/developers/applications 

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone [https://github.com/gemdegem/discord-price-bot.git]
   cd [discord-price-bot]
2. **Install dependencies**
   ```bash
   git clone [https://github.com/gemdegem/discord-price-bot.git]
   cd [discord-price-bot]
3. **Set up the .env file**
Create a .env file in the root of your project and add the following line:

    ```bash
    BOT_TOKEN=your_discord_bot_token_here

5.  **Configuration**
**API URL**
The default API URL is set to https://api.xeggex.com/api/v2/ticker/Symbol%2FUSDT. You need to replace Symbol%2FUSDT with the actual symbol of the cryptocurrency or asset you want to track.

**Channel Name Regex**
Update the regexPattern in the script to match the channel name format you have set up in your Discord. For example, if you are tracking Bitcoin prices, and your channel name starts with BTC:, set the regex pattern to /^BTC:.*/.

**Allowed Servers**
Modify the allowedServers array to include the names of the servers where the bot is permitted to update channel names. Only servers listed here will be processed by the bot.


# **Invite the Bot to Your Server**
To get started with the Discord bot on your server, follow these steps:

**Step 1**: Invite the Bot
Create link in discord developer platform.

**Step 2**: Create and Configure the Voice Channel
Create a Voice Channel named according to the asset you are tracking. For example, if you are tracking Bitcoin, name the channel BTC:. This name needs to match the REGEX set in index.js.

Configure Channel Permissions:

Go to the settings of the newly created voice channel by right-clicking on it and selecting "Edit Channel".
![image](https://github.com/gemdegem/discord-price-bot/assets/94614019/fe71448e-a751-40f0-a6ab-4948a98285b5)

Navigate to the Permissions tab.
![image](https://github.com/gemdegem/discord-price-bot/assets/94614019/053793a9-1c48-4d72-8b9e-66f5c5b4cb99)

For the @everyone role, find the Connect permission and set it to "❌" (deny).
![image](https://github.com/gemdegem/discord-price-bot/assets/94614019/11c36af3-5a7b-4858-83b9-60dee05fd18d)

Add your bot's role,  Price tracker (or whatever you named) , and set the Connect permission for this role to "✅" (allow).
![image](https://github.com/gemdegem/discord-price-bot/assets/94614019/279ce321-4052-406d-93ed-fffd38ff619c)

**Step 3**: Activation
Allow up to 1 minute for the bot to start synchronizing and updating the channel name based on the configured intervals.


# Contact Information 
If you encounter any issues or have questions, feel free to reach out through the following channels:

**Discord**: joethebiggie0xchad

**Twitter**: [Twitter: Joe_0xChad](https://twitter.com/Joe_0xChad)


  
