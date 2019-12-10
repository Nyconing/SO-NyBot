# NyBot

![WTFPL](https://raw.githubusercontent.com/Nyconing/SO-NyBot/master/pics/wtfpl-badge-2.png)  `, GPL-compatible`

This is a child from Zirak's SO-ChatBot. For more info, on how to use the bot, see [here](https://github.com/Zirak/SO-ChatBot).

> Build: `run build`

## Plugin Documentation:

The plugin will runs when the bot initialize, you can use the following modes as your **plugin bootstrap**, it was a common used modes.

##### 1. Command Mode
```javascript
module.exports = function (bot) {
    bot.addCommand({
        name: 'papaya',
        description: 'Papaya API',
        permissions: {del: 'NONE', use: 'ALL'},
        async: true,
        fun: (message) => {
            message.directReply('Papaya on the action');
        }
    });
};
```
##### 2. Listening Mode
```javascript
module.exports = function (bot) {
    bot.registerListener({
            name: 'stop',
            listening: ['stahp'],
            caseSensitive: false,
            cooldown: 60 * 5,
            response: (message) => {
                message.directSend('H A M M A H T I M E !');
            }
        });
};
```

## API Documentation:

#### `bot.addCommand` : `function(command):void` 
Add a command into bot.

- string `name` : Command name.
- string `description` : Command description. Please be short and clear.
- object `permissions` : Permitted user group. example: `{del:'NONE',use:'ALL'}`
  - string `del` : Able to delete. `'NONE'`/`'ALL'`/`'OWNER'`
  - string `use` : Able to use. `'NONE'`/`'ALL'`/`'OWNER'`
- boolean `async` : Can be asynchronous.
- function `fun` : A command entry point. example: `(message)=>{ message.directReply('Hello'); }`
  - param `message` 

·

#### `bot.registerListener` : `function(listener):void` 
Add a listener into bot.

- string `name` : Listener name.
- string[] `listening` : Listening sentences.
- boolean `caseSensitive` : Is listens case-sensitive..
- number `cooldown` : Cool down time inside room, in seconds.
- function `response` : This will called when sentences matched, example: `(message)=>{ message.directReply('Hello'); }`
  - param `message` 

## Objects

#### The `event` object
An event obtained from adapter. It just was an object that holds data, no functions inside.

- string `content` : A raw text of message.
- number `event_type` : Type of event.
- number `id` : Event Id.
- number `message_id` : Id of message, useful when fetching partial message.
- number `room_id` : Room Id of event.
- string `room_name` : Room name of event.
- number `time_stamp` : Time of event.
- number `user_id` : User Id of sent message.
- string `user_name` : User name of sent message.
- *more.. (some of them are only exists on some event)*

·

#### The `message` object
An object contains parsed message from invoker, and some useful functions that can be used the most.

###### `get` : `getter` 
- A parsed message, using like string `let text = message` 
- The message is parsed, without pattern and command name.
- The message was a `full` message when `command.multilines` was true, else it might `partial`.

###### `send` : `function(text):void` 
- Sending the `text` to the room. 

###### `reply` : `function(text, userName):void` / `function(text):void`
- Sending the `text` to the room, with ping to the `userName`.
- invoker user will be used when `userName` was not provided.

###### `directSend` : `function(text):void`
- Sending the `text` to the room. (same as `send`)

###### `directReply` : `function(text):void`
- Sending the `text` to the room, with reply to the invoker message.

###### `getEvent` : `function():event`
- Get the event of invoker message.

###### `getUserId` : `function():string`
- Get the User Id of invoker.

###### `getRoomId` : `function():string`
- Get the Room Id of invoker.