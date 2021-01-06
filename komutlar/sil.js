const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
  
  let acebot = new Discord.MessageEmbed().setColor('#70ff70').setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `).setTimestamp();
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **\`Mesajları Yönet\`** iznine sahip olmalısın!`);
  
if(isNaN(args[0])) { var acebots = acebot.setDescription(`Lütfen 1-100 arasında sayı belirtiniz!`)
return message.channel.send(acebots);
}
  
if (args[0] < 1) return message.reply("**1** adetten az mesaj silemem!")
if (args[0] > 100) return message.reply("**100** adetten fazla mesaj silemem!")
  
message.channel.bulkDelete(args[0]).then(deletedMessages => {
if (deletedMessages.size < 1) return message.reply("Hiç mesaj silemedim! _(**14** günden önceki mesajları silemem!)_");
})

  message.channel.send(acebot.setDescription(`**${args[0]}** adet mesaj başarıyla silindi!`))
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["sil"],
  permLevel: 0
};

exports.help = {
  name: 'sil',
  description: 'Belirtilen miktarda mesaj siler.',
  usage: '!sil <miktar>'
};