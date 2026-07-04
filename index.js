const { Client, GatewayIntentBits } = require("discord.js");
const { joinVoiceChannel } = require("@discordjs/voice");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates
  ]
});

client.once("ready", async () => {
  console.log(`${client.user.tag} aktif!`);

  const guild = await client.guilds.fetch("1522617951486873774");

  joinVoiceChannel({
    channelId: "1522739256580243537",
    guildId: guild.id,
    adapterCreator: guild.voiceAdapterCreator,
    selfDeaf: true
  });

  console.log("Ses kanalına bağlanıldı.");
});

client.login(process.env.TOKEN);
