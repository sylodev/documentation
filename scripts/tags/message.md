---
title: {message} tags
description: 
published: 1
date: 2022-02-25T17:00:00.000Z
tags: 
editor: markdown
dateCreated: 2022-02-16T06:33:41.532Z
---

# `{message}`

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

## `{message.addReaction;emoji;message}`

Adds a reaction to a message.

#### Arguments
- `{emoji}`: The emoji to add as the reaction.

## `{message.removeReaction;emoji;message}`

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

## `{message.createdAt;message}`

Returns the number milliseconds between the UNIX epoch and the creation date of a message.
