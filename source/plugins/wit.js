module.exports = function (bot) {
    bot.registerListener({
        name: 'witai',
        listening: ['nybot'],
        caseSensitive: false,
        cooldown: 1,
        response: (message) => {
            console.log('wited');
            const {Wit, log} = require('node-wit');

            if (message.trim().startsWith('nybot')){
                const client = new Wit({accessToken: bot.config.witToken});
                client.message(message.slice(message.toLowerCase().indexOf('n')+5), {})
                    .then((data) => {
                        console.log('Yay, got Wit.ai response: ' + JSON.stringify(data));
                        message.directReply(JSON.stringify(data).entities.intent[0].value);
                    })
                    .catch(console.error);
            }
        }
    });
};