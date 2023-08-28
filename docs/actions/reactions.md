# Message Reactions

## Message Reaction Add

> Maximum number of Message Reaction Add actions: 5 basic, 5 prime.

#### Parameters

- `{channel}`: The channel where the command was invoked.
- `{message}`: The message the reaction was for.
- `{user}`: The user who reacted to the message.
- `{$emoji}`: The emoji of the reaction.

Fires when a reaction is added to a message. You must specify a single emoji to be checked.

## Message Reaction Remove

> Maximum number of Message Reaction Remove actions: 5 basic, 5 prime.

#### Parameters

- `{channel}`: The channel where the command was invoked.
- `{message}`: The message the reaction was for.
- `{user}`: The user whose reaction was removed.
- `{$emoji}`: The emoji of the reaction.

Fires when a user remove a reaction from a message they previously reacted to. You must specify a single emoji to be checked.