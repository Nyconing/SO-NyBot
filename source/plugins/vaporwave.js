module.exports = function (bot) {
    function entry (args, cb) {
        const vaporwavefied = args.split('').map(char => {
            const code = char.charCodeAt(0);
            return code >= 33 && code <= 126 ? String.fromCharCode((code - 33) + 65281) : char
        }).join('');
        args.directreply(vaporwavefied);
    }

    bot.addCommand({
        name: 'vaporwave',
        fun: entry,

        permissions: { del: 'NONE', use: 'ALL' },
        description: 'God still haven\'t find out what did this command do, ask again few years later.',
        async: true
    });

};
