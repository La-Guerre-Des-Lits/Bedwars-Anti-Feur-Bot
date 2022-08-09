const { EmbedBuilder, PermissionsBitField, ActivityType } = require("discord.js");
const client = require("../../index");
const config = require("../../config/config.json");
const axios = require ("axios")
require('dotenv').config();

module.exports = {
    name: "guildMemberUpdate",
};

client.on("guildMemberUpdate", async (oldMember, newMember) => {
    console.log("uehfizhe")
    console.log(newMember.user.username);
})