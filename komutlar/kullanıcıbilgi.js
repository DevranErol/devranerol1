const Discord = require('discord.js');
const moment = require('moment');
moment.locale('tr');


exports.run = async (client, message, args) => {
  
  let acebot = new Discord.MessageEmbed().setColor('#70ff70').setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `).setTimestamp();

  if(!message.guild.members.cache.get(client.user.id).hasPermission('MANAGE_MESSAGES')) return message.channel.send(`Komudu kullanabilmek için **\`Mesajları Yönet\`** yetkisine sahip olmalısınız`)

message.guild.members.ban(args[0]).then(async (member) => {
let user;
if(member instanceof Discord.GuildMember) { user = member.user; }
else if(member instanceof Discord.User) { user = member; }
else { user = await client.users.fetch(member) };
message.guild.members.unban(args[0]);

message.channel.send(acebot.setTitle(user.tag).setThumbnail(user.avatarURL({dynamic: true}))
.addField(`Bilgileri:`, `**• Hesap Açılma Tarihi:** ${moment(user.createdAt).format('DD/MM/YYYY')}
**• Nicki:** ${user.username}
**• Etiketi:** ${user.discriminator}`));
});

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'Kullanıcı-bilgi',
  description: "Idsini Girdiğiniz Kişinin Bilgilerini Gösterir.",
  usage: "!kullanıcı-bilgi <id>"
};