const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require("../ayarlar.json");


exports.run = async(client, message, args) => {
  
  let acebot = new Discord.MessageEmbed().setColor('#70ff70').setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `).setTimestamp();
  let yetkili = ayarlar.jailyetkili
  let banlogkanal = ayarlar.banlog
 let acebots = acebot.setDescription(`**Bu komudu kullanabilmek için** <@&${yetkili}>  **yetkisine sahip olmalısın!**`)
 if (!message.member.roles.cache.get(yetkili)) return message.channel.send(acebots) //acebots  
  let user = message.mentions.users.first()
    let prefix = ayarlar.prefix
    let sebep = args.slice(1).join(' ') || "Belirtilmemiş."
    if(!user) return message.channel.send(acebot.setDescription(`**> Hatalı Kullanım...**\n> **Bir kişi etiketlemelisin!**\n > Örnek Kullanım: **\`${prefix}ban @kullanıcı <sebep>\`**`))
    if(user.id === message.author.id) return message.channel.send(acebot.setDescription('Kendini banlayamazsın.'))
    if(user.id === client.user.id) return message.channel.send(acebot.setDescription('Botu banlayamazsın.'))
    if(user.id === message.guild.ownerID) return message.channel.send(acebot.setDescription ('Sunucu sahibini banlayamazsın.'))
    if (!message.guild.member(user).bannable) return message.channel.send(acebot.setDescription(' Bu kişinin rolü senden üstte veya `Üyeleri yasakla` yetkisine sahip.'));

  

   message.guild.members.cache.get(user.id).ban({reason: `${sebep}`})
      let embed = acebot.setDescription(`${user} adlı kullanıcı ${message.author.tag} tarafından \`${sebep}\` sebebi ile banlandı. `)
    message.channel.send(embed)
     let sa = acebot
    .setTitle('Kişi banlandı')
    .addField('Banlanan kişi', `${user.tag}`)
    .addField('Yetkili', `${message.author.tag}`)
    .addField('Sebep', sebep)
client.channels.cache.get(banlogkanal).send(sa)//Log Kanalı
};
 

 
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:[],
	permlevel: 0
};

exports.help = {
	name: "ban"
}