
const Discord = require('discord.js'), 
    arraySort = require('array-sort'),
    table = require('table'); 
send = require('quick.hook'); 

module.exports.run = async (bot, message, args) => {

    let invites = await message.guild.fetchInvites().catch(error => { 
     
        return message.channel.send('Sorry, I don\'t have the proper permissions to view invites!');
    }) 

 
    invites = invites.array();

    arraySort(invites, 'uses', { reverse: true }); 

  
    let possibleInvites = [['User', 'Uses']]; 
    invites.forEach(function (invite) {
        possibleInvites.push([invite.inviter.username, invite.uses]);
    })

    const embed = new Discord.RichEmbed()
        .setColor('#42d9f4')
        .addField('Leaderboard', `\`\`\`${table.table(possibleInvites)}\`\`\``); 

  
    send(message.channel, embed, {
        name: 'Server Invites',
        icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/trophy-128.png'
    })

};

module.exports.help = {
    name: "top"
}
