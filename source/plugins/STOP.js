module.exports = function (bot) {
    'use strict';

    var oldHammers = {
        STOP: 'HAMMERTIME!',
        STAHP: 'HAMMAHTIME!',
        HALT: 'HAMMERZEIT!',
        STOY: 'ZABIVAT\' VREMYA!',
        SISTITE: 'MALLEUS TEMPUS!'
    };

    bot.registerListener({
        name: 'stop',
        listening: [
            /(STAHP[.!?]|HALT[.!?]|STOY[.!?]|SISTITE[.!?])$/i
        ],
        cooldown: 60 * 5,
        response: (message, match) => {
            if (match[0][0].toLowerCase().startsWith('stahp')) message.directSend('HAMMAHTIME!');
            if (match[0][0].toLowerCase().startsWith('halt')) message.directSend('HAMMERZEIT!');
            if (match[0][0].toLowerCase().startsWith('stoy')) message.directSend('ZABIVAT\' VREMYA!');
            if (match[0][0].toLowerCase().startsWith('sistite')) message.directSend('MALLEUS TEMPUS!');
        }
    });
};
