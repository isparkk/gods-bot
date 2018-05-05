const Discord = require('discord.js');

exports.run = (bot, message, args) => {

  // Define user, if nobody is mentioned it will store author
  let user = message.mentions.users.first() || message.author;

  // Form Embed
  let embed = new Discord.RichEmbed()
    .setColor('#42d9f4') 
    .setTitle(user.tag + '\' avatar')
    .setImage(user.avatarURL);

  // Send Message
  message.channel.send(embed)

};

module.exports.help = {
  name:"avatar"
}