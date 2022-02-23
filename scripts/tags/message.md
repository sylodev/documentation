---
title: {message} tags
description: 
published: 1
date: 2022-02-23T21:15:55.555Z
tags: 
editor: markdown
dateCreated: 2022-02-16T06:33:41.532Z
---

# `{message}`

## `{message.id;message}`

Returns the ID of a message

## `{message.content;message}`

Returns a string with the content (or text) of a message

## `{message.delete;message}`

Deletes a message

## `{message.pinned;message}`

Returns true if the message is pinned and false if it's not

## `{message.pin reason;message}`

Pins a message

#### Arguments
- `{reason}`: The reason for the action that will be displayed in the Audit Log

## `{message.unpin reason;message}`

Unins a message

#### Arguments
- `{reason}`: The reason for the action that will be displayed in the Audit Log

## `{message.publish;message}`

Publish a message. News channels only.

## `{message.addReaction;emoji;message}`

Add a reaction to a message.

#### Arguments
- `{emoji}`: The emoji to add as the reaction

## `{message.removeReaction;emoji;message}`

Remove a reaction from a message.

#### Arguments
- `{emoji}`: The emoji to remove as the reaction

## `{message.removeReactions;emoji;message}`

Remove all reactions, optionally for a specific emoji.

`{message.removeReactions}` will remove all reactions
`{message.removeReaction;emoji}` will remove all reactions for a specific emoji

## `{message.link;message}`

Returns a string with the jump url of a message

## `{message.authorId;message}`

Returns the ID of the author of a message

## `{message.channelId;message}`

Returns the ID of the channel a message is in

## `{message.tts;message}`

Returns true if the message was sent as text to speech and false if it was not

## `{message.createdAt;message}`

Returns the Unix timestamp in milliseconds for the creation date of a message
