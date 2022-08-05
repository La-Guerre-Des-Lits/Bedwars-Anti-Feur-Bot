const client = require("../../index");
const colors = require("colors");
const { ActivityType } = require("discord.js")

module.exports = {
  name: "ready.js"
};

client.once('ready', async () => {
  console.log("\n" + `[READY] ${client.user.tag} is up and ready to go.`.brightGreen);
  setInterval(() => {
      client.user.setPresence({ activities: [{ name: `${process.env.LAST_VICTIM ? process.env.LAST_VICTIM : "personne :)"}`, type: ActivityType.Watching}] });
  }, 1000)
})