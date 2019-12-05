module.exports = function (bot) {
    function ev(msg, cb) {
        console.log(msg);
        var timed = msg.startsWith('+');
        var directReturn = msg.startsWith('=');
        var code = timed ? msg.replace(/^[+]/, '') : (directReturn ? msg.replace(/^[=]/, '') : msg.replace(/^>/, ''));
        console.log('try pretty eval:' + code);
        var timeout = null;
        start();
        var waitTime = new Date().getTime();

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:11902', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                finish(null, this.responseText, directReturn);
            }
        };
        waitTime = new Date().getTime();
        xhr.send((directReturn ? '=' : '>') + code);

        function start() {
            if (timeout) {
                return;
            }

            timeout = setTimeout(function () {
                xhr.abort();
                finish('Adapter: Maximum execution time exceeded. CodeWorker may not running!', null, true);
            }, 20000);
        }

        function finish(err, result, isString) {
            clearTimeout(timeout);
            var ms = new Date().getTime() - waitTime;

            if (err) {
                bot.adapter.out.add('<!>' + err);
            } else {
                if (timed) {
                    setTimeout(function () {
                        bot.adapter.out.add('!>>CodeWorker complete in ' + ms + 'ms');
                    }, 500);
                }
                console.log(result);
                if (result && result.startsWith('!@#$%^&*()<eerror>:')) {
                    bot.adapter.out.add(dressUpAnswer('-!!>', result.slice(19)));
                } else if (result && result.startsWith('!@#$%^&*()<cerror>:')) {
                    bot.adapter.out.add(dressUpAnswer('<!>', result.slice(19)));
                } else {
                    bot.adapter.out.add(dressUpAnswer(isString ? '!==' : '!=>', result));
                }
            }
        }

        function dressUpAnswer(prefix, codeanswer) {
            var answer = codeanswer;
            if (answer === undefined) {
                return '{null or empty}';
            }
            var code = snipAndCodify(answer);
            console.log(JSON.stringify(code));
            return code.startsWith('    ') ? '    ' + prefix + ' ' + code.slice(4) : prefix + code;
        }

        function snipAndCodify(str) {
            var ret;
            if (str.length > 3800) {
                ret = str.slice(0, 3800) + (str.includes('\n') ? ' ' : '\n') + '... (too long, max 3800)';
            } else if (str.length > 400) {
                ret = str.includes('\n') ? str : str + '\n·';
            } else {
                ret = str;
            }
            ret = ret.replace(/!~/g, '#!~');
            if (!ret.includes('\n')) {
                ret = '`' + ret + '`';
            } else {
                ret = '    ' + ret.replace(/\n/g, '\n    ');
            }
            return ret;
        }
    }

    bot.addCommand({
        name: 'evalcs',
        fun: ev,

        permissions: {
            del: 'NONE',
            use: 'ALL'
        },
        description: 'C# Eval.',
        async: true
    });

};
