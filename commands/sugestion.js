const superagent = require('superagent');
module.exports.run = async (bot, message, args) => {

    try {
        function clean(text) {
            if (typeof (text) === 'string')
                return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
            else
                return text;
        }
        const bug = args.join(" ")
        if (!bug) return message.channel.send('Please specify a suggestion!')
        const content = clean(`**${message.author.username}**#${message.author.discriminator} (${message.author.id}) has a suggestion:\n${bug}\nServer: **${message.guild.name}**\nID: **${message.guild.id}**`);
        const id = '411992834242117636';
        new Promise((resolve, reject) => {
            superagent.post(`https://discordapp.com/api/channels/${id}/messages`)
                .set('Authorization', `Bot ${bot.token}`).send({ content })
                .end((err, res) => {
                    if (err) {
                        reject(err);
                        message.reply('There was an error while sending your suggestion to our staff. Please try again later.');
                    } else {
                        resolve(res);
                        message.channel.send(`:white_check_mark: **${message.author.username}**, your suggestion has successfully been submitted to our Staff for review. Thank you!.`);
                    }
                });
        });
    } catch (err) {
        console.log(err)
    }
};

module.exports.help = {
    name: "suggestion",
    description: 'You can suggest something to make our server better.',
    usage: '?suggest <suggestion>'
}