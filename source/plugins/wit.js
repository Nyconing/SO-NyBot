module.exports = function (bot) {
    bot.registerListener({
        name: 'witai',
        listening: [/^nybot/i],
        cooldown: 0,
        response: (message) => {
            const {Wit, log} = require('node-wit');

            if (message.trim().startsWith('nybot')){
                const client = new Wit({accessToken: bot.config.witToken});
                client.message(message.slice(message.toLowerCase().indexOf('n')+5), {})
                    .then((data) => {
                        console.log('Yay, got Wit.ai response: ' + JSON.stringify(data));
                        message.directReply(data.entities.intent[0].value);
                    })
                    .catch(console.error);
            }
        }
    });
};