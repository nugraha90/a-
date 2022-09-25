---
  layout: post
  title: Setup discord welcoming bot
  tags: [discord, automation]
  categories: 
---

> This tutorial requires basic knowledge on how to use discord, what is guild, channel and discord.js

[Discord.js](https://discord.js.org/) is a powerful Node.js module that allows you to interact with the Discord API very easily. It takes a much more object-oriented approach than most other JS Discord libraries, making your bot's code significantly tidier and easier to comprehend.

Usability, consistency, and performance are key focuses of discord.js, and it also has nearly 100% coverage of the Discord API. It receives new Discord features shortly after they arrive in the API.

Having that to said by discord.js, discord.js is the most battle-tested for discord bot related stuff, it's include many features like Intents, Guild and Member related events, and much more.

Now, I will introduce you how to setup welcome message discord bot for your guild or we commonly call it discord server.

## Install Node.js

Node.js v16 or later is recommended, you can download it [here for v16.13.2 LTS](https://nodejs.org/dist/v16.13.2/node-v16.13.2-x64.msi) because it is supported directly by the tests workflow based on [Discord test workflow](https://github.com/discordjs/discord.js/blob/main/.github/workflows/test.yml), so it's much safer to use Node.js v16 or later.

## Init Project With NPM

Before installing dependencies needed for discord bot, you must init project for your bot with npm first.

```sh
cd project-directory
npm init -y
# -y is recommended for tutorial purpose 😄 DO NOT COPY THIS LINE.
```

## Install Dependencies

Before start coding, you can start by installing [discord.js](https://discord.js.org/#/), and [dotenv](https://github.com/motdotla/dotenv) for local development, you can use [dotenv](https://github.com/motdotla/dotenv) for production but I'm not recommend it, since the term of environment variable itself must be stored in operating system and not a file, also, it may cause unexpected persistence of variable values.

- Install discord.js

```bash
npm install discord.js
```

- Install dotenv

```bash
npm install dotenv
```

## Usage

After installing discord.js and dotenv, we can create a script with event that will receive guild member arrival named [guildMemberAdd](https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-guildMemberAdd).

- Add type: "module" in your package.json for modern ES modules, reason [why](https://flaviocopes.com/how-to-enable-es-modules-nodejs/).

```json
"type": "module"
```

> Get to know about ESM with the gist made by sindresorhus [here](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)

- Create index.js file to put the event and client login code

```js
// index.js - DO NOT COPY THIS LINE.
import Discord from "discord.js";
const client = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MEMBERS],
});
import dotenv from "dotenv";
dotenv.config();

client.on("ready", () => {
  console.log("Bot is ready.");
});

client.on("guildMemberAdd", (member) => {
  let channel = member.guild.channels.cache;

  let embed = new Discord.MessageEmbed()
    .setThumbnail(
      "https://your-image-url" // make sure to change this to your image
    )
    .addField(
      `:point_right: Welcome!`,
      `Hello, welcome to ${member.guild.name} <@${member.user.id}>!`,
      true
    )
    .addField(
      `:zap: Guild Statistics`,
      `Server member count: ${member.guild.memberCount}`,
      true
    )
    .setColor("YELLOW")
    .setImage(
      "https://your-image-url" // make sure to change this to your image
    );

  channel
    .find((channel) => channel.id === process.env.CHANNEL_ID)
    .send({ embeds: [embed] });
});

client.login(process.env.DISCORD_TOKEN);
```

> :warning: Do not forget to enable your GUILD_MEMBERS intent flags, [see here why](https://discordjs.guide/popular-topics/intents.html#privileged-intents)

- Create .env file

:warning: this is include your bot credentials, DO NOT share it to anyone you don't work with.

```.env
DISCORD_TOKEN=
CHANNEL_ID=
```

## How to get DISCORD_TOKEN?

> This is little bit challenging for most developers who didn't know nothing about discord bot ecosystem before, also, this is important and the rules change sometimes, so you must have to get used to it. :smile:

Since in this tutorial I'm not introduce on how you create a bot from scratch and the detail of it, you can look how to setup bot using discord developer dashboard by looking for this [tutorial](https://www.writebots.com/discord-bot-token/) and get the bot token to put inside `DISCORD_TOKEN=` of your .env file.

## How to get CHANNEL_ID?

To get a Channel ID you can right click to the channel and click on "Copy ID" then paste it inside the `CHANNEL_ID=` of your .env file.

---

Discord.js has many useful utilities, but since v13 there's lot of changes you must follow, but despite that, it's awesome library you can use to create bots and manage it.

Thanks for reading!
