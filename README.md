This is a child from Zirak's SO-ChatBot mother. For more info, on how to use the bot, see [here](https://github.com/Zirak/SO-ChatBot).

**Plugin Documentation**:

The plugin will runs when the bot initialize, you can use the following modes as your **plugin bootstrap**, it was a common used modes.

1. Command Mode
2. Listening Mode

**API Documentation**:

object `event` : An event obtained from adapter. It just was an object that holds data, no functions inside.

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

object `message` : An object contains parsed message from invoker, and some useful functions that can be used the most.

- `get` : `getter` 
  - A parsed message, using like string `let text = message` 
  - The message is parsed, without pattern and command name.
  - The message was a `full` message when `command.multilines` was true, else it was `partial`.
- `send` : `function(text):void` 
  - Sending the `text` to the room. 
- `reply` : `function(text, userName):void` / `function(text):void`
  - Sending the `text` to the room, with ping to the `userName`.
  - invoker user will be used when `userName` was not provided.
- `directSend` : `function(text):void`
  - Sending the `text` to the room.
- `directReply` : `function(text):void`
  - Sending the `text` to the room, with reply to the invoker message.
- `getEvent` : `function():event`
  - Get the event of invoker message.
- `getUserId` : `function():string`
  - Get the User Id of invoker.
- `getRoomId` : `function():string`
  - Get the Room Id of invoker.