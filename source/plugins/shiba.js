module.exports = function (bot) {
    function entry (args, cb) {
        bot.IO.httpGet('https://shibe.online/api/shibes',{},(response)=>{
            args.directreply(JSON.parse(response)[0]);
        })
    }

    bot.addCommand({
        name: 'shiba',
        fun: entry,

        permissions: { del: 'NONE', use: 'ALL' },
        description: '[The Shibainu API](https://shibe.online/)',
        async: true
    });

};
