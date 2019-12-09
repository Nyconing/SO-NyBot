module.exports = function (bot) {
    'use strict';

    var oldHammers = {
        STOP: 'HAMMERTIME!',
        STAHP: 'HAMMAHTIME!',
        HALT: 'HAMMERZEIT!',
        STOY: 'ZABIVAT\' VREMYA!',
        SISTITE: 'MALLEUS TEMPUS!'
    };

    bot.IO.registerListener(
        {
            name: 'stop2',
            listening: ['stahp'],
            caseSensitive: false,
            cooldown: 60 * 5,
            response: (message) => {
                message.directSend('HAMMAHTIME!');
            }
        }
    );
    bot.IO.registerListener(
        {
            name: 'stop3',
            listening: ['halt'],
            caseSensitive: false,
            cooldown: 60 * 5,
            response: (message) => {
                message.directSend('HAMMERZEIT!');
            }
        }
    );
    bot.IO.registerListener(
        {
            name: 'stop4',
            listening: ['stoy'],
            caseSensitive: false,
            cooldown: 60 * 5,
            response: (message) => {
                message.directSend('ZABIVAT\' VREMYA!');
            }
        }
    );
    bot.IO.registerListener(
        {
            name: 'stop5',
            listening: ['SISTITE'],
            caseSensitive: false,
            cooldown: 60 * 5,
            response: (message) => {
                message.directSend('MALLEUS TEMPUS!');
            }
        }
    );

};
