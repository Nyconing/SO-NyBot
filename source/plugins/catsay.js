module.exports = function (bot) {
    bot.addCommand({
        name: 'catsay',
        description: '[The Cat as a service API](https://cataas.com/#/)',
        permissions: {del: 'NONE', use: 'ALL'},
        async: true,
        fun: (message) => {
            message.directReply('https://cataas.com/cat/says/'+message.toLowerCase().trim().cleanup()+'#.png');
        }
    });
};