module.exports = function (bot) {
    bot.addCommand({
        name: 'cat',
        description: '[The Cat API](https://thecatapi.com/)',
        permissions: {del: 'NONE', use: 'ALL'},
        async: true,
        fun: (message) => {
            bot.IO.httpGet('https://api.thecatapi.com/v1/images/search',{size:'full'},(result)=>{
                message.directReply(JSON.parse(result)[0].url);
            });
        }
    });
    bot.addCommand({
        name: 'persian',
        description: '[The Cat API](https://thecatapi.com/)',
        permissions: {del: 'NONE', use: 'ALL'},
        async: true,
        fun: (message) => {
            bot.IO.httpGet('https://api.thecatapi.com/v1/images/search', {
                size: 'full',
                breed_ids: 'pers'
            }, (result) => {
                message.directReply(JSON.parse(result)[0].url);
            });
        }
    });
};