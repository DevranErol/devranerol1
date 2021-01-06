const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json");
//acebots  
exports.run = async (client, message, args) => {
 let prefix = ayarlar.prefix 
 let yetkili = ayarlar.jailyetkili
 let jaillogkanal = ayarlar.jaillog
 let erkekrol1 = ayarlar.erkekrol1
 let erkekrol2 = ayarlar.erkekrol2
 let cezalı = ayarlar.cezalı

  let acebots = new Discord.MessageEmbed()

 .setDescription(`**Bu komudu kullanabilmek için** <@&${yetkili}>  **yetkisine sahip olmalısın!**`)
if (!message.member.roles.cache.get(yetkili)) return message.channel.send(acebots) //acebots  
  
let kullanıcı = message.mentions.users.first()
if (!kullanıcı) return message.channel.send(new Discord.MessageEmbed().setColor("#0200ff").setDescription(`> **Lütfen Bir Üye Etiketle!**\n\n> Doğru Kullanım: **\`${prefix}unjail-e <@kullanıcı>\`**`));

let user = message.mentions.users.first();
let rol = message.mentions.roles.first()//acebots  
let member = message.guild.member(kullanıcı)

member.roles.add(erkekrol1)
member.roles.add(erkekrol2)
member.roles.remove(cezalı)
//acebots  
   

const ikrudka = new Discord.MessageEmbed()
.setAuthor('Bir Üye Cezalıdan Çıkarıldı')
.addField(`Jailden Çıkarılan Kullanıcı`,` ${kullanıcı}`)
.addField(`Jailden Çıkaran Yetkili`,` <@${message.author.id}>`)
.addField(`Jailden Çıkarılınca Verilen Roller`, `<@&${erkekrol1}>, <@&${erkekrol2}>`)
.setThumbnail( message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
client.channels.cache.get(jaillogkanal).send(ikrudka)
  
  let acecode = new Discord.MessageEmbed()//acebots  
.setDescription(`${kullanıcı} Adlı Kişisinin <@&${cezalı}> Rolü Alınarak ,<@&${erkekrol1}> ve <@&${erkekrol2}> Rolleri Verildi! `) 
return message.channel.send(acecode);
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ue","unjail-e","unjaile"],
  permLevel: 0
}
//acebots  
exports.help = {
  name: 'Unjail-erkek',
  description: "Etiketlenen kişinin tüm rollerini alıp jail'e atar.",
  usage: '!jail @etiket Sebep'
}