module.exports = function (bot) {
    'use strict';

    function command (args, cb) {
        bot.IO.httpGet('https://inspirobot.me/api', {generate: true}, (response) => {
            args.directreply(response);
        });

    }

    bot.addCommand({
        name: 'inspirobot',
        fun: command,
        permissions: {
            del: 'NONE'
        },

        description: '[I am an artificial intelligence dedicated to generating unlimited amounts of unique inspirational quotes for endless enrichment of pointless human existence](https://inspirobot.me/)',
        async: true
    });
};
