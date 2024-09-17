# Keyword

> Maximum number of Keyword actions: 2 basic, 10 prime.  
> Minimum cooldown: 30 seconds (basic), 10 seconds (prime).  
> Default cooldown is per user.

#### Parameters

- `{channel}`: The channel where the command was invoked.
- `{message}`: The message that invoked the command.
- `{user}`: The user who invoked the command.

Fires when a message received by the bot contains a given phrase or matches a RegEx pattern. Unlike slash commands, this trigger will only work in channels where the bot has `View Channel` permissions. Wildcards are supported. `hello*world` will be expanded to match `*hello*world*`, to avoid this you can use regex with `^` and `$`, such as `/^hello.*world$/` which will match messages matching "hello\*world" exactly, and not something like `hello world :)`.

Some examples of valid patterns are:

- `world` will match messages containing "world", such as "something here world", "bigworld", "the world is big", etc.
- `hello*world` will match messages containing "hello" and "world", even if there are other words between the two, such as "Hello World!", "Hello There World", "Something Hello World".
- `/hello.world/i` is a regex pattern that will match messages such as "Hello World!", "Hello There World" but or even "unrelaetd helloxworld".
- `/^Hello World$/` is a regex pattern that will match messages exactly matching "Hello World" and nothing else. `^` and `$` are [regular expression assertions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions) that match the beginning and ending or the input, respectively, which means the message must start and end with "Hello World".
