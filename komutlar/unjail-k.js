const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  let prefix = ayarlar.prefix
  let yetkili = ayarlar.jailyetkili
  let jaillogkanal = ayarlar.jaillog
  let kızrol1 = ayarlar.kızrol1
  let kızrol2 = ayarlar.kızrol2
  let cezalı = ayarlar.cezalı


 
  let acebots = new Discord.MessageEmbed()
 .setDescription(`**Bu komudu kullanabilmek için** <@&${yetkili}>  **yetkisine sahip olmalısın!**`)
 if (!message.member.roles.cache.get(yetkili)) return message.channel.send(acebots) //acebots  
  
let kullanıcı = message.mentions.users.first()
if (!kullanıcı) return message.channel.send(new Discord.MessageEmbed().setColor("#ff0000").setDescription(`> **Lütfen Bir Üye Etiketle!**\n\n> Doğru Kullanım: **\`${prefix}unjail-k <@kullanıcı>\`**`));
let user = message.mentions.users.first();
let rol = message.mentions.roles.first()
let member = message.guild.member(kullanıcı)
member.roles.add(kızrol1)
member.roles.add(kızrol2)
member.roles.remove(cezalı)

   

const acebotss = new Discord.MessageEmbed()
.setAuthor('Bir Üye Cezalıya Çıkarıldı')
.addField(`Jailden Çıkarılan Kullanıcı`,` ${kullanıcı}`)
.addField(`Jailden Çıkaran Yetkili`,` <@${message.author.id}>`)
.addField(`Jailden Çıkarılınca Verilen Roller`, `<@&${kızrol1}>, <@&${kızrol2}>`)
.setThumbnail( message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
client.channels.cache.get(jaillogkanal).send(acebotss)//Log Kanal İd
  
  let acecode = new Discord.MessageEmbed()
.setDescription(`${kullanıcı} Adlı Kişisinin <@&${cezalı}> Rolü Alınarak ,<@&${kızrol1}> ve <@&${kızrol2}> Rolleri Verildi! `) 
return message.channel.send(acecode);
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["uk","unjail-k","unjailk"],
  kategori: "Yetkili Komutları",
  permLevel: 0
}

exports.help = {
  name: 'unjail-kız',
  description: "Etiketlenen kişinin tüm rollerini alıp jail'e atar.",
  usage: '!jail @etiket Sebep'
}