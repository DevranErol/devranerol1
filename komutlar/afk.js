const db = require("quick.db")
const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message, args) {
  
  let acebot = new Discord.MessageEmbed().setColor('#70ff70').setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `).setTimestamp();
  let prefix  = ayarlar.prefix

 

    var user = message.author;
  var sebep = args.slice(0).join("  ");
  
 
  const ace = acebot 
  .setDescription(`**AFK moduna geçmek için bir sebep belirtmelisin.**\n\n >Örnek Kullanım: **\`${prefix}afk <sebep>\`**`)
  if(!sebep) return message.channel.send(ace);
  
   db.set(`name.${message.author.id}.${message.guild.id}`, message.member.displayName);
message.member.setNickname('[AFK] '+message.member.displayName);
  
  db.set(`afk_${user.id}`, sebep);
  db.set(`afk_süre_${user.id}`, Date.now());
  
  const acebotss = acebot
  .setDescription(` ${user.tag} **Başarıyla \`${sebep}\`Sebebiyle AFK moduna girdin.**`)
  message.channel.send(acebotss)


};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'afk',
};