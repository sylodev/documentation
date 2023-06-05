# Message

## `{message.id;message}`

Returns the ID of a message.

## `{message.content;message}`

Returns a string with the content of a message.

## `{message.delete;message}`

Deletes a message.

## `{message.pinned;message}`

Checks if a message is pinned.

## `{message.pin reason;message}`

Pins a message.

#### Arguments

- `{reason}`: The reason for the action that will be displayed in the Audit Log.

## `{message.unpin reason;message}`

Unpins a message.

#### Arguments

- `{reason}`: The reason for the action that will be displayed in the Audit Log.

## `{message.publish;message}`

Publishes a message. Only works in news channels.

## `{message.embed index=0;message}`

Get an embed from the message. The index is optional and will default to the first embed if its not provided.

```
{=embed;{message.embed}}
{$embed.title}
```

## `{message.referenceId;message}`

The ID of the message this message is replying to.

## `{message.addReaction;emoji;message}`

Adds a reaction to a message.

#### Arguments

- `{emoji}`: The emoji to add as the reaction.

## `{message.removeReaction;emoji;user;message}`

Removes a reaction from a message.

#### Arguments

- `{emoji}`: The emoji to remove as the reaction.

## `{message.removeReactions;emoji;message}`

Removes all reactions, optionally for a specific emoji.

```
{message.removeReactions}       // Will remove all reactions
{message.removeReaction;emoji}  // Will remove all reactions for a specific emoji
```

## `{message.link;message}`

Returns a string with the jump URL of a message.

## `{message.authorId;message}`

Returns the ID of the author of a message.

## `{message.channelId;message}`

Returns the ID of the channel a message is in.

## `{message.tts;message}`

Checks if a message was sent as text to speech.

## `{message.mentions;message}`

Get a list of mentions from a message. Returns an array of IDs that includes roles, channels and users.

## `{message.reactions}`

Get a list of reactions from a message. Returns an array of objects. For example, this message

<img src="https://i.imgur.com/wZiESQ2.png" alt="A screenshot of a message with an :eggplant: and :fortnitedefaultdance: reaction." />

Would result in this

```json
[
  {
    "count": 1,
    "me": false,
    "emoji": {
      "id": null,
      "animated": false,
      "name": "🍆"
    }
  },
  {
    "count": 1,
    "me": false,
    "emoji": {
      "id": "538224338269372438",
      "animated": true,
      "name": null
    }
  }
]
```

```
{=reactions;{message.reactions}}
{$reactions.0.count} // 1
{$reactions.0.me} // false (whether the bot has reacted with this message)
{$reactions.0.emoji.id} // null
{$reactions.0.emoji.animated} // false
{$reactions.0.emoji.name} // 🍆
```

See [objects](../scripts/objects.md) for information on working with objects.

## `{message.attachments single=true objects=false;message}`

Get the attachments from a message. Returns the first attachments url by default.

`single` is whether to return the first attachment or an array of attachments.
`objects` is whether to return the [attachment objects](https://discord.com/developers/docs/resources/channel#attachment-object-attachment-structure) or just their urls.

## `{message.createdAt;message}`

Returns a [timestamp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#description) for the creation date of a message that can be used with [{time}](https://documentation.atlas.bot/en/scripts/tags/global#time-formattime).
