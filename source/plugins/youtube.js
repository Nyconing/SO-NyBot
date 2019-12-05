module.exports = function (bot) {
    var nulls = [
        'Video not found (rule 35?)',
        'I could not find such a video',
        'The Lords of YouTube did not find your query favorable'];
    function youtube (args, cb) {
        bot.IO.googleCSE(args, finishedLogic, (p)=>{
            p.key = bot.config.googleApiKey;
            p.cx = bot.config.googleSearchEngineId;
            p.siteSearch = 'youtube.com/watch';
            return p;
        });

        function finishedLogic(obj) {
            var res = JSON.parse(obj);
            if (res.items) {
                if (res.items.length == 0) {
                    args.directreply('Google Fu was unable to woooo-OOO-wahhh!');
                    return;
                }
                args.directreply( res.items[0].link );
            } else if (res.error)
                args.directreply('Google Fu is rest, try again later');
            else args.directreply('Google Fu was unable to woooo-OOO-wahhh!');
        }
    }

    bot.addCommand({
        name: 'youtube',
        fun: youtube,
        permissions: {
            del: 'NONE'
        },
        description: 'Search Youtube. `/youtube query`',
        async: true
    });
};
