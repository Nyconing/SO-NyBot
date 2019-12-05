module.exports = function (bot) {

    function mdn (args, cb) {
        bot.IO.googleCSE(args, finishedLogic, (p)=>{
            p.key = bot.config.googleApiKey;
            p.cx = bot.config.googleSearchEngineId;
            p.siteSearch = 'developer.mozilla.org';
            return p;
        });

        function finishedLogic(obj) {
            var res = JSON.parse(obj);
            if (res.items) {
                if (res.items.length == 0) {
                    args.directreply('Google Fu was unable to woooo-OOO-wahhh!');
                    return;
                }
                args.directreply(
                    '[' + res.items[0].title + ']\n' +
                    res.items[0].link + '\n' +
                    res.items[0].snippet
                );
            } else if (res.error)
                args.directreply('Google Fu is rest, try again later');
            else args.directreply('Google Fu was unable to woooo-OOO-wahhh!');
        }
    }

    bot.addCommand({
        name: 'mdn',
        fun: mdn,

        permissions: { del: 'NONE', use: 'ALL' },
        description: 'Fetches mdn documentation. `/mdn what`',
        async: true
    });

};
