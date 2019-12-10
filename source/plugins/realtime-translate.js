module.exports = function (bot) {
    bot.registerListener({
        name: 'realtime-translate',
        listening: ['！'],
        caseSensitive: false,
        cooldown: 0,
        response: (message) => {
            if (message.startsWith('！') && message.getUserId() === bot.adapter.userid) {
                bot.translate(message.slice(1)).then((result) => {
                    message.edit(result.text);
                });
            }
        }
    });
};