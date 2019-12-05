module.exports = function (bot) {
    // Gets or sets a XKCD comic-type thing
    // just kidding! we can't set one. I'm just used to crappy javadoc style.
    // *sniffle*
    function getXKCD(msg, cb) {
        var prop = (msg.parse()[0] || '').toLowerCase(),
            linkBase = 'https://xkcd.com/';

        // they want a specifix xkcd
        if (/^\d+$/.test(prop)) {
            bot.log('/xkcd specific', prop);
            msg.directreply(linkBase + prop);
            return;
        }
        // they want to search for a certain comic
        else if (prop && prop !== 'new') {
            bot.log('/xkcd search', msg.toString());
            bot.IO.googleCSE(msg, finishedLogic, (p) => {
                p.siteSearch = 'xkcd.com';
                return p;
            });
            return;
        }

        bot.log('/xkcd random/latest', prop);
        // they want a random XKCD, or the latest
        bot.IO.httpGet('https://dynamic.xkcd.com/api-0/jsonp/comic?', { source: 'bot' }, xkcdApiFinishedLogic);

        function finishedLogic(obj) {
            var res = JSON.parse(obj);
            if (res.items) {
                if (res.items.length == 0) {
                    msg.directreply('Google Fu was unable to woooo-OOO-wahhh!');
                    return;
                }
                msg.directreply(
                    '[' + res.items[0].title + ']\n' +
                    res.items[0].link + '\n' +
                    res.items[0].snippet
                );
                if (res.items.length == 2) {
                    msg.directreply(
                        '[' + res.items[1].title + ']\n' +
                        res.items[1].link + '\n' +
                        res.items[1].snippet
                    );
                }
            } else if (res.error)
                msg.directreply('Google Fu is rest, try again later');
            else msg.directreply('Google Fu was unable to woooo-OOO-wahhh!');
        }

        function xkcdApiFinishedLogic(json) {
            var obj = JSON.parse(json);
            if (obj && obj.img) {
                msg.directreply(obj.img);
            } else {
                msg.directreply(':( something went on fire');
            }
        }
    }

    bot.addCommand({
        name: 'xkcd',
        fun: getXKCD,
        permissions: {
            del: 'NONE'
        },
        description: 'Returns an XKCD. Call with no args for random, ' +
            '`new` for latest, or a number for a specific one.',
        async: true
    });

};
