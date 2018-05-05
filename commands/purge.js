module.exports.run = async (bot, message, args) => {


    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**Nu ai acces la aceasta comanda.**");
 
    if (isNaN(args[0])) return message.channel.send('**Introduceti o cantitate valabilă de mesaje pentru a fi sterse.**');
    // This checks if args[0] is NOT a number, if not it runs the return statement which sends a message in chat.
    // We also need to check if the number is LESS THAN 100, since 100 is the max you can delete at once.
    if (args[0] > 100) return message.channel.send('**Introduceti o cantitate mai mica decat 100.**');
    // This checks if args[0] is MORE THAN 100, if it is, it returns and sends a message.

    // Now, we can delete the messages
    message.channel.bulkDelete(args[0])
        .then(messages => message.channel.send(`**Am sters cu succes \`${messages.size}/${args[0]}\` de mesaje**`).then(msg => msg.delete({
            timeout: 10000
        }))) // This sends how many messages they deleted to chat, we also want to delete this message. This deletes the message after 10000 milliseconds.

};

module.exports.help = {
    name: "purge",
    description: 'Sterge o anumita cantitate de mesaje.',
    usage: '?purge [0-100]'
}
