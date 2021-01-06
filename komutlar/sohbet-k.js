const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  
  new Discord.MessageEmbed().setColor('#70ff70').setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `).setTimestamp();
  
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bu Komutu Kullanabilmek İçin **\`Kanalları Yönet\`** Yetkisine Sahip Olmalısın.`));

  let herkez = message.guild.roles.cache.find(r => r.name === "@everyone");
  message.channel.createOverwrite(herkez, {SEND_MESSAGES: false});

  message.channel.send(new Discord.MessageEmbed().setDescription("**Sohbet Kanalı Başarıyla Kapatıldı.**"));

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sohbet-kapat',
  description: `Sohbeti Everyone'a Kapatırsınız`,
  usage: '!kapat'
};