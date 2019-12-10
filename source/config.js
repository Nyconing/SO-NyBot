module.exports = function (bot) {
    var config = Object.merge(
        {
            pattern: '!|',
            welcomeMessage: 'Hi, welcome. New bot have born.',

            // these must be set for the weather
            // command and backup command respectivly.
            // I've removed the sample keys so I can easily
            // change them with the bot loader script.

            weatherKey: '',
            //githubToken: ''
            googleApiKey: '',
            googleSearchEngineId: '',
            helpText: 'This bot\'s master is lazy. He didn\'t even config me properly ',
            botName: 'NyBot',
            witToken: ''
        },
        bot.memory.get('config', {})
    );

    bot.memory.set('config', config);
    bot.memory.save('config');

    return config;
};
