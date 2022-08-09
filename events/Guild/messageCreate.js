const { EmbedBuilder, PermissionsBitField, ActivityType } = require("discord.js");
const client = require("../../index");
const config = require("../../config/config.json");
const axios = require ("axios")
require('dotenv').config();

module.exports = {
  name: "messageCreate",
};

client.on("messageCreate", async (message) => {
  if (message.channel.type !== 0) return;
  if (message.author.bot) return;

  let feur_list = [
    "feur",
    "f€ur",
    "ffeuur",
    "feurr",
    "feure",
    "feuur",
    "f€uur",
    "|=3(_)|2",
    "|#3|_||2",
    "ƒeur",
    "ƒ£µr",
    "f£µr",
    "f€ùr",
    "۞eur",
    "f۞ur",
    "fe۞r",
    "feu۞",
  ];

  let msgs = [
    "Mec, ne crois pas que tu es drôle -_-",
    "La blague du feur n'a jamais été drôle, ne l'est toujours pas, et ne le sera jamais.",
    "Arrête.",
    "Tu n'as jamais été drôle",
    "You fucked up.",
    "Rouge--Gorge--Profonde",
    "Ahahahahahhahaha je rigole beaucoup\nPutain qu'est-ce-que tu es drôle mec.",
    "https://tenor.com/view/pas-rire-du-tout-%C3%A7a-ne-me-fait-lorenzo-becker-not-funny-does-not-make-me-laugh-at-all-gif-15314269",
    "https://tenor.com/view/the-office-michael-scott-steve-carrell-unamused-meh-gif-16391448",
    "Tu es vachement drôle dis-moi\n https://tenor.com/view/not-funny-dwayne-johnson-seven-bucks-the-rock-fake-laugh-gif-20130201"
  ]

  let authorized = [
    "gaffeur",
    "gafeur",
    "golfeur",
    "surfeur",
    "teufeur",
    "bluffeur",
    "blufeur",
    "bouffeur",
    "boufeur",
    "coiffeur",
    "coifeur",
    "gaffeurs",
    "gafeurs",
    "golfeurs",
    "graffeur",
    "grafeur",
    "greffeur",
    "grefeur",
    "griffeur",
    "grifeur",
    "piaffeur",
    "piafeur",
    "staffeur",
    "stafeur",
    "surfeurs",
    "touffeur",
    "toufeur",
    "bluffeurs",
    "blufeurs",
    "bouffeurs",
    "boufeurs",
    "chauffeur",
    "chaufeur",
    "coiffeurs",
    "coifeurs",
    "étouffeur",
    "étoufeur",
    "greffeurs",
    "grefeurs",
    "griffeurs",
    "grifeurs",
    "piaffeurs",
    "piafeurs",
    "staffeurs",
    "stafeurs",
    "touffeurs",
    "toufeurs",
    "chauffeurs",
    "chaufeurs",
    "dégriffeur",
    "dégrifeur",
    "esbroufeur",
    "étouffeurs",
    "étoufeurs",
    "esbroufeurs",
    "réchauffeur",
    "réchaufeur",
    "réchauffeurs",
    "réchaufeurs",
    "surchauffeur",
    "surchaufeur",
    "surchauffeurs",
    "surchaufeurs",
    "désurchauffeur",
    "désurchaufeur",
    "désurchauffeurs",
    "désurchaufeurs",
    "resurchauffeur",
    "resurchaufeur",
    "resurchauffeurs",
    "resurchaufeurs"
  ]

  let clearMsg = message.content.toLowerCase().replaceAll("\n", "")

// Remplacer les charactères similaires aux lettres du mot "feur"
var Similarize={};Similarize.similarMap={
  "€": "e",
  "£": "e",
  "3": "e",
  "ƒ": "f",
  "µ": "u",
  "ù": "u",
}

var Latinise={};Latinise.latin_map={
"Æ":"E",
"Ǽ":"E",
"Ǣ":"E",
"É":"E",
"Ĕ":"E",
"Ě":"E",
"Ȩ":"E",
"Ḝ":"E",
"Ê":"E",
"Ế":"E",
"Ệ":"E",
"Ề":"E",
"Ể":"E",
"Ễ":"E",
"Ḙ":"E",
"Ë":"E",
"Ė":"E",
"Ẹ":"E",
"Ȅ":"E",
"È":"E",
"Ẻ":"E",
"Ȇ":"E",
"Ē":"E",
"Ḗ":"E",
"Ḕ":"E",
"Ę":"E",
"Ɇ":"E",
"Ẽ":"E",
"Ḛ":"E",
"Ꝫ":"E",
"Ḟ":"F",
"Ƒ":"F",
"Ꝼ":"F",
"Ꞃ":"R",
"Ɛ":"E",
"Ŕ":"R",
"Ř":"R",
"Ŗ":"R",
"Ṙ":"R",
"Ṛ":"R",
"Ṝ":"R",
"Ȑ":"R",
"Ȓ":"R",
"Ṟ":"R",
"Ɍ":"R",
"Ɽ":"R",
"Ǝ":"E",
"Ú":"U",
"Ŭ":"U",
"Ǔ":"U",
"Û":"U",
"Ṷ":"U",
"Ü":"U",
"Ǘ":"U",
"Ǚ":"U",
"Ǜ":"U",
"Ǖ":"U",
"Ṳ":"U",
"Ụ":"U",
"Ű":"U",
"Ȕ":"U",
"Ù":"U",
"Ủ":"U",
"Ư":"U",
"Ứ":"U",
"Ự":"U",
"Ừ":"U",
"Ử":"U",
"Ữ":"U",
"Ȗ":"U",
"Ū":"U",
"Ṻ":"U",
"Ų":"U",
"Ů":"U",
"Ũ":"U",
"Ṹ":"U",
"Ṵ":"U",
"ᴇ":"E",
"ꜰ":"F",
"ʁ":"R",
"ʀ":"R",
"ᴙ":"R",
"ⱻ":"E",
"ᴚ":"R",
"ᴜ":"U",
"æ":"e",
"ǽ":"e",
"ǣ":"e",
"é":"e",
"ĕ":"e",
"ě":"e",
"ȩ":"e",
"ḝ":"e",
"ê":"e",
"ế":"e",
"ệ":"e",
"ề":"e",
"ể":"e",
"ễ":"e",
"ḙ":"e",
"ë":"e",
"ė":"e",
"ẹ":"e",
"ȅ":"e",
"è":"e",
"ẻ":"e",
"ȇ":"e",
"ē":"e",
"ḗ":"e",
"ḕ":"e",
"ⱸ":"e",
"ę":"e",
"ᶒ":"e",
"ɇ":"e",
"ẽ":"e",
"ḛ":"e",
"ꝫ":"e",
"ḟ":"f",
"ƒ":"f",
"ᵮ":"f",
"ᶂ":"f",
"ꝼ":"f",
"ꞃ":"r",
"ꝭ":"f",
"ŕ":"r",
"ř":"r",
"ŗ":"r",
"ṙ":"r",
"ṛ":"r",
"ṝ":"r",
"ȑ":"r",
"ɾ":"r",
"ᵳ":"r",
"ȓ":"r",
"ṟ":"r",
"ɼ":"r",
"ᵲ":"r",
"ᶉ":"r",
"ɍ":"r",
"ɽ":"r",
"ɘ":"e",
"ɿ":"r",
"ɐ":"e",
"ᴂ":"e",
"ǝ":"e",
"ᴔ":"e",
"ɹ":"r",
"ɻ":"r",
"ɺ":"r",
"ⱹ":"r",
"ú":"u",
"ŭ":"u",
"ǔ":"u",
"û":"u",
"ṷ":"u",
"ü":"u",
"ǘ":"u",
"ǚ":"u",
"ǜ":"u",
"ǖ":"u",
"ṳ":"u",
"ụ":"u",
"ű":"u",
"ȕ":"u",
"ù":"u",
"ủ":"u",
"ư":"u",
"ứ":"u",
"ự":"u",
"ừ":"u",
"ử":"u",
"ữ":"u",
"ȗ":"u",
"ū":"u",
"ṻ":"u",
"ų":"u",
"ᶙ":"u",
"ů":"u",
"ũ":"u",
"ṹ":"u",
"ṵ":"u",
// "ᵫ":"ue",
"ﬀ":"f",
"ﬃ":"f",
"ﬄ":"f",
"ﬁ":"f",
"ﬂ":"f",
"œ":"e",
"ₑ":"e",
"ᵣ":"r",
"ᵤ":"u",
"🇫": "f",
"🇪": "e",
"🇺": "u",
"🇷": "r",
};

  if(
    message.content.includes("Screenshot_2022-08-06-14-50-34-676_com.discord.png") ||
    message.content.includes("Screenshot_2022-08-06-14-57-08-083_com.discord.png") ||
    message.content.includes("Screenshot_2022-08-06-14-48-52-792_com.discord.png")
  ) {
    try {
      process.env.LAST_VICTIM = message.author.username;
      message.author.send(msgs[Math.floor(Math.random()*msgs.length)] + `\n > Message incriminé : "${message.content}"`)
      message.delete();
    } catch (err) {
      console.log(err);
    }
  }

  axios
  .get(`https://tenor.googleapis.com/v2/search?q=feur&key=${process.env.TENOR_KEY}&limit=30`)
  .then(res => {
    res.data.results.forEach(result => {
      if(message.content.includes(result.itemurl)) {
        try {
          process.env.LAST_VICTIM = message.author.username;
          message.author.send(msgs[Math.floor(Math.random()*msgs.length)] + `\n > Message incriminé : "${message.content}"`)
          return message.delete();
        } catch (err) {
          console.log(err);
        }
      }
    })  
  })

  String.prototype.similarize=function(){return this.replace(/[^A-Za-z0-9\[\] ]/g,function(a){return Similarize.similarMap[a]||a})};
  String.prototype.latinise=function(){return this.replace(/[^A-Za-z0-9\[\] ]/g,function(a){return Latinise.latin_map[a]||a})};

  let clearedMsgA = clearMsg.latinise().similarize();
  let clearedMsg = clearedMsgA.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '')

  let member = (await message.guild.members.fetch(message.author))
 
  function removeDuplicate(string)
  {
     return string.split('')
      .filter(function(item, pos, self)
      {
        return self.indexOf(item) == pos;
      }
     ).join('');
  }

  if(member.nickname) {
    let clearAuthor = member.nickname.latinise().similarize()
    let clearedAuthor = clearAuthor.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '').toLowerCase();
    if(feur_list.some((substring) => removeDuplicate(clearedAuthor).includes(substring)
  ) &&
    !authorized.some((substring) => removeDuplicate(clearedAuthor).includes(substring)
  )){
    try {
      if(!message.guild.members.cache.get(client.user.id).permissions.has("ChangeNickname")|| !message.guild.members.cache.get(client.user.id).permissions.has("MANAGE_NICKNAMES")) {
        return;
      }
      process.env.LAST_VICTIM = message.author.username;
      if(message.guild.members.cache.get(client.user.id).permissions.has("ChangeNickname") && message.guild.members.cache.get(client.user.id).permissions.has("MANAGE_NICKNAMES")) {
        await member.setNickname(message.author.username).then(() => {
          message.author.send(`${msgs[Math.floor(Math.random()*msgs.length)]}\n > Pseudo : ${member.nickname}`)
        });

        if(!member.nickname) {
        }else{
          return;
        }
      }else {
        message.author.send("Ptn de merde j'ai pas les perms pour changer ton pseudo")
      }
    } catch (err) {
      console.log(err);
    }
  }
  }

  if (
    feur_list.some((substring) =>
      removeDuplicate(clearedMsg).includes(substring)
    ) &&
    !authorized.some((substring) => removeDuplicate(clearedMsg).includes(substring))
  ) {
    try {
      process.env.LAST_VICTIM = message.author.username;
      message.author.send(msgs[Math.floor(Math.random()*msgs.length)] + `\n > Message incriminé : "${message.content}"`)
      message.delete();
    } catch (err) {
      console.log(err);
    }
  }
});
