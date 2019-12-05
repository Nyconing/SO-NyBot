module.exports = function (bot) {

    var nulls = [
        'The Google contains no such knowledge',
        'There are no search results. Run.',
        'My Google Fu has failed.'];

    var command = {
        name: 'google',

        fun: function (msg, cb) {
            bot.IO.googleCSE(msg, finishedLogic, (p)=>{
                p.key = bot.config.googleApiKey;
                p.cx = bot.config.googleSearchEngineId;
                return p;
            });

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
                    if (res.items.length >= 2) {
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
        },

        permissions: {
            del: 'NONE'
        },
        description: 'Search Google. `/google query`',
        async: true
    };

    bot.addCommand(command);
};
