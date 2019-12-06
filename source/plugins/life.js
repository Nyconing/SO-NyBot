module.exports = function (bot) {
    bot.addCommand({
        name: 'live',
        fun: function (args) {
            if (!bot.isStopped(args.getRoomId())) {
                return 'I\'m not dead! Honest!';
            }
            bot.continue(args.getRoomId());
            return 'And on this day, you shall paint eggs for a giant bunny.';
        },
        permissions: { del: 'NONE', use: 'OWNER' },
        description: 'Resurrects me (:D) if I\'m down (D:)'
    });

    bot.addCommand({
        name: 'die',
        fun: function (args) {
            if (bot.isStopped(args.getRoomId())) {
                return '!@#$qwe123ZXCKill me once, shame on you, kill me twice...';
            }
            bot.stop(args.getRoomId());
            return '!@#$qwe123ZXCYou killed me! I\'ll be back and revenge!!';
        },
        permissions: { del: 'NONE', use: 'OWNER' },
        description: 'Kills me :('
    });
};
