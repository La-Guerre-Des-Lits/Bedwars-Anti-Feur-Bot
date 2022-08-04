const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const client = require("../../index");
const config = require("../../config/config.json");
const { QuickDB } = require("quick.db");
const db = new QuickDB();

module.exports = {
  name: "messageCreate"
};

client.on('messageCreate', async message => {
  
  const prefix = await db.get(`guild_prefix_${message.guild.id}`) || config.Prefix || "?";

  if (message.channel.type !== 0) return;
  if (message.author.bot) return;

  if(message.content.toLowerCase().slice(0, 4).includes("feur") && !message.content.toLowerCase().includes("coiffeur")) {
    console.log("Mauvaise blague détectée, j'épargne les autres")
    try {
      message.delete()
    }catch(err) {
      console.log(err)
    }
  }
})
