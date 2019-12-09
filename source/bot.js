/*global require*/
'use strict';

var SuggestionDictionary = require('./suggestionDict').SuggestionDictionary;
var IO = require('./IO');

var bot = window.bot = {
    botVersion: 1.00,
    IO: IO,

    Command: require('./Command').Command,
    CommunityCommand: require('./Command').CommunityCommand,
    Message: require('./Message').Message,

    // will be filled as needed
    commands: {},
    commandDictionary: new SuggestionDictionary(3),
    listeners: [],
    info: {
        invoked: 0,
        learned: 0,
        forgotten: 0,
        start: new Date()
    },

    // defined in users.js
    users: {},
    // defined in rooms.js
    rooms: {},
    // defined in config.js
    config: {},

    parseMessage: function (msgObj) {

        if (!this.validateMessage(msgObj)) {
            bot.log(msgObj, 'parseMessage invalid');
            return;
        }

        var msg = this.prepareMessage(msgObj),
            id = msg.get('user_id');
        bot.log(msg, 'parseMessage valid');

        if (this.banlist.contains(id)) {
            bot.log(msgObj, 'parseMessage banned');

            // tell the user he's banned only if he hasn't already been told
            if (!this.banlist[id].told) {
                msg.reply('You iz in mindjail');
                this.banlist[id].told = true;
            }
            return;
        }

        try {
            this.invokeAction(msg, msgObj);
        }
        catch (e) {
            var err = 'Could not process input. Error: ' + e.message;

            if (e.lineNumber) {
                err += ' on line ' + e.lineNumber;
            }
            // column isn't part of ordinary errors, it's set in custom ones
            if (e.column) {
                err += ' on column ' + e.column;
            }

            msg.directreply(err);
            // make sure we have it somewhere
            console.error(e.stack);
        }
        finally {
            this.info.invoked += 1;
        }
    },

    // this conditionally calls execCommand or callListeners, depending on what
    // the input. if the input begins with a command name, it's assumed to be a
    // command. otherwise, it tries matching against the listener.
    invokeAction: function (msg, msgObj) {
        if (this.isPartial(msg.content)){
            console.log('parse partial');
            this.invokePartialMessage(msg, msgObj);
            return;
        }
        var possibleName = this.removePattern(this.isMultiLines(msg.content) ? this.breakMultilineMessage(msg.content)[0] : msg.content).trim().replace(/^\/\s*/, '').split(' ')[0];
        var cmd = (possibleName.startsWith('>') || possibleName.startsWith('+') || possibleName.startsWith('=')) ? this.getCommand('evalcs') : this.getCommand(possibleName);

        // this is the best name I could come up with
        // messages beginning with / want to specifically invoke a command
        var coolnessFlag = msg.startsWith('/') ? !cmd.error : true;
        if (!cmd.error) {
            if (this.isMultiLines(msg.content)) {
                if (cmd.multilines) {
                    this.execCommand(cmd, this.Message(this.removePattern(this.breakMultilineMessage(msg.content).join('\n')), msgObj));
                } else {
                    this.execCommand(cmd, this.Message(this.removePattern(this.breakMultilineMessage(msg.content).join(' ')), msgObj));
                }
            } else {
                this.execCommand(cmd, this.Message(this.removePattern(msg.content), msgObj));
            }
        }
        else if (coolnessFlag) {
            coolnessFlag = this.callListeners(msg);
        }

        // nothing to see here, move along
        if (coolnessFlag) {
            return;
        }

        msg.directreply(this.giveUpMessage(cmd.guesses));
    },
    isPartial: function(content){
        return content.startsWith('<pre class=\'partial\'>');
    },
    invokePartialMessage:function(msg, msgObj) {
        IO.fetchFullTranscript(msgObj).then((result => {
            this.invokeAction(this.Message(result.trim(), msgObj), msgObj);
        }));
    },
    isMultiLines: function (content) {
        return content.startsWith('<div class=\'full\'>') || content.startsWith('<pre class=\'full\'>') || content.startsWith('<pre class=\'partial\'>') || content.startsWith('<code>')
    },
    breakMultilineMessage: function (content) {
        if (content.startsWith('<div class=\'full\'>')) {
            return content
            // slice upto the beginning of the ending tag
                .slice(0, content.lastIndexOf('</div>'))
                // and strip away the beginning tag
                .replace('<div class=\'full\'>', '')
                //split newline
                .split('<br>');
        } else if (content.startsWith('<pre class=\'full\'>')) {
            return content
            // slice upto the beginning of the ending tag
                .slice(0, content.lastIndexOf('</pre>'))
                // and strip away the beginning tag
                .replace('<pre class=\'full\'>', '')
                //split newline
                .split('<br>');
        }else if (content.startsWith('<pre class=\'partial\'>')) {
            return content
            // slice upto the beginning of the ending tag
                .slice(0, content.lastIndexOf('</pre>'))
                // and strip away the beginning tag
                .replace('<pre class=\'partial\'>', '')
                //split newline
                .split('<br>');
        } else if (content.startsWith('<code>')) {
            return content
            // slice upto the beginning of the ending tag
                .slice(0, content.lastIndexOf('</code>'))
                // and strip away the beginning tag
                .replace('<code>', '')
                //split newline
                .split('<br>');
        } else {
            //are you kidding me?
            return content;
        }
    },
    removePattern: function (content) {
        // decode markdown and html entities.
        // #150
        var msg = IO.htmlToMarkdown(content);
        msg = IO.decodehtmlEntities(msg);
        msg = (msg.startsWith('`') && msg.endsWith('`')) ? msg.slice(1, msg.length - 1) : msg;
        msg = msg.startsWith(this.config.pattern) ? msg.slice(this.config.pattern.length) : msg;
        return msg;
    },
    giveUpMessage: function (guesses) {
        // man, I can't believe it worked...room full of nachos for me
        var errMsg = '';
        if (guesses && guesses.length) {
            errMsg += ' Maybe you meant: ' + guesses.join(', ');
        }
        // mmmm....nachos
        else {
            errMsg += 'https://cdn.discordapp.com/attachments/496322396928868376/644853790733762570/unknown.png';
        }
        // wait a minute, these aren't nachos. these are bear cubs.
        return errMsg;
        // good mama bear...nice mama bear...tasty mama be---
    },

    execCommand: function (cmd, msg) {
        bot.log(cmd, 'execCommand calling');

        if (!cmd.canUse(msg.get('user_id'))) {
            msg.reply([
                'You do not have permission to use the command ' + cmd.name,
                'I\'m afraid I can\'t let you do that, ' + msg.get('user_name')
            ].random());
            return;
        }

        var args = this.Message(
            msg.replace(/^\/\s*/, '').slice(cmd.name === 'evalcs' ? 0 : cmd.name.length).trim(),
            msg.get()
            ),
            // it always amazed me how, in dynamic systems, the trigger of the
            // actions is always a small, nearly unidentifiable line
            // this line right here activates a command
            res = cmd.exec(args);

        if (res) {
            msg.reply(res);
        }
    },

    prepareMessage: function (msgObj) {
        msgObj = this.adapter.transform(msgObj);

        var msg = msgObj.content;
        // fixes issues #87 and #90 globally
        msg = msg.replace(/\u200b|\u200c/g, '');

        return this.Message(msg.trim(), msgObj);
    },

    validateMessage: function (msgObj) {
        var msg = this.isMultiLines(msgObj.content) ? this.breakMultilineMessage(msgObj.content)[0].trim() : msgObj.content.trim();

        // make sure we don't process our own messages,
        return msgObj.user_id !== 1 &&
            // make sure we don't process Feeds
            msgObj.user_id > 0 &&
            // and the message begins with the invocation pattern
            msg.startsWith(this.config.pattern);
    },

    addCommand: function (cmd) {
        if (!cmd.exec || !cmd.del) {
            cmd = this.Command(cmd);
        }

        this.commands[cmd.name] = cmd;
        this.commandDictionary.trie.add(cmd.name);
    },

    registerListener: function(listener) {
        // /(STOP|STAHP|...)[\.!\?]?$/
        var reg = new RegExp(
            '(' +
            listener.listening.map((x) => {
                return listener.caseSensitive ? x : x.toLowerCase()
            }).map(RegExp.escape).join('|') +
            ')[\\.!?]?$'
        );
        IO.register('input', function Meow(event) {
            if (reg.exec(listener.caseSensitive ? event.content : event.content.toLowerCase())) {
                if (!listener.cds) listener.cds = {};
                if (!listener.cds[event.room_id]) listener.cds[event.room_id] = new Date().getTime() - 50;
                if (listener.cds[event.room_id] < new Date().getTime()) {
                    listener.response(bot.Message(event.content, event));
                }
                listener.cds[event.room_id] = new Date().getTime() + (listener.cooldown * 1000);
            }
        });
    },
    // gee, I wonder what this will return?
    commandExists: function (cmdName) {
        return this.commands.hasOwnProperty(cmdName);
    },

    // if a command named cmdName exists, it returns that command object
    // otherwise, it returns an object with an error message property
    getCommand: function (cmdName) {
        var lowerName = cmdName.toLowerCase();
        if (this.commandExists(lowerName)) {
            return this.commands[lowerName];
        }

        // not found, onto error reporting
        // set the error margin according to the length
        this.commandDictionary.maxCost = Math.floor(cmdName.length / 5 + 1);

        var msg = 'Command ' + cmdName + ' does not exist.',
            // find commands resembling the one the user entered
            guesses = this.commandDictionary.search(cmdName);

        // resembling command(s) found, add them to the error message
        if (guesses.length) {
            msg += ' Did you mean: ' + guesses.join(', ');
        }

        return {error: msg, guesses: guesses};
    },

    // the function women think is lacking in men
    listen: function (regex, fun, thisArg) {
        if (Array.isArray(regex)) {
            regex.forEach(function (reg) {
                this.listen(reg, fun, thisArg);
            }, this);
        }
        else {
            this.listeners.push({
                pattern: regex,
                fun: fun,
                thisArg: thisArg
            });
        }
    },

    callListeners: function (msg) {
        function callListener(listener) {
            var match = msg.exec(listener.pattern), resp;

            if (match) {
                resp = listener.fun.call(listener.thisArg, msg);

                bot.log(match, resp);
                if (resp) {
                    msg.reply(resp);
                }
                return resp !== false;
            }
            return false;
        }

        return this.listeners.some(callListener);
    },

    isOwner: function (usrid) {
        var user = this.users[usrid];
        return user && (user.is_owner || user.is_moderator);
    },

    log: console.log.bind(console),

    stop: function (room) {
        this.stopped.push(room);
        this.adapter.out.stopped.push(room);
    },
    continue: function (room) {
        this.stopped = this.stopped.slice(this.stopped.indexOf(room), 1);
        this.adapter.out.stopped = this.adapter.out.stopped.slice(this.adapter.out.stopped.indexOf(room), 1);
    },
    isStopped: function(room){
        if (!this.stopped) this.stopped = [0];
        if (!this.adapter.out.stopped) this.adapter.out.stopped = [0];
        return this.stopped.includes(room);
    },

    devMode: false,

    activateDevMode: function (pattern) {
        this.devMode = true;
        this.config.pattern = pattern || 'beer!';
        if (IO.events.userjoin) {
            IO.events.userjoin.length = 0;
        }
        this.validateMessage = function (msgObj) {
            return msgObj.content.trim().startsWith(this.config.pattern);
        };
    }
};

bot.adapter = require('./adapter');
bot.adapter.init();
IO.register('output', bot.adapter.out.send, bot.adapter.out);

bot.users = require('./users')(bot);
bot.users.loadUsers();

bot.memory = require('./memory');
bot.memory.loadAll();
window.addEventListener('beforeunload', function () {
    bot.memory.save();
});

bot.config = require('./config')(bot);

bot.banlist = require('./banlist')(bot);

var argParser = require('./parseCommandArgs')();
bot.parseCommandArgs = argParser.parse.bind(argParser);

bot.parseMacro = require('./parseMacro').parseMacro;
bot.personality = require('./personality')(bot);

// noinspection JSAnnotator
bot.eval = require('./eval').eval;
bot.prettyEval = require('./eval').prettyEval;

require('./commands')(bot);
require('./listeners')(bot);

require('./_plugin-loader')(bot);

IO.register('input', bot.parseMessage, bot);
