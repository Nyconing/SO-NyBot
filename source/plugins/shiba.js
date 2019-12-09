module.exports = function (bot) {
    bot.addCommand({
        name: 'shiba',
        permissions: {del: 'NONE', use: 'ALL'},
        description: '[The Shibainu API](https://shibe.online/)',
        async: true,
        fun: (message) => {
            bot.IO.httpGet('https://shibe.online/api/shibes', {}, (response) => {
                message.directreply(JSON.parse(response)[0]);
            })
        }
    });
};
