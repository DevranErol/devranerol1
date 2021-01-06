const Discord = require('discord.js');
const prefix = process.env.PREFIX;
const ayarlar = require("../ayarlar.json");

module.exports = client => {
  let durum = ayarlar.durum
client.user.setActivity(durum, {type: 'WATCHING'}); 

}