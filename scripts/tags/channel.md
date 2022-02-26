---
title: {channel} tags
description: 
published: 1
date: 2022-02-25T17:00:00.000Z
tags: 
editor: markdown
dateCreated: 2022-02-16T06:15:22.397Z
---

# `{channel}` tags

## `{channel.mention;channel}`

Returns a string with a channel mention.

## `{channel.id;channel}`

Returns the ID of a channel.

## `{channel.type;channel}`

Returns an integer for the [channel type](https://discord.com/developers/docs/resources/channel#channel-object-channel-types).

## `{channel.createdAt;channel}`

Returns the number milliseconds between the UNIX epoch and the creation date of a channel.

## `{channel.nsfw;channel}`

Checks if a channel is marked as NSFW.

## `{channel.name;channel}`

Returns the name of a channel.

## `{channel.lastMessageId;channel}`

Returns the ID of the last message sent in a channel.

## `{channel.topic;channel}`

Returns a channel topic, also known as channel description.

## `{channel.edit;channel}`

Updates a channel.

#### Arguments
- `name`: The new name of the channel.
- `topic`: The new topic of the channel.
- `nsfw`: Whether the channel is NSFW or not.

## `{channel.create name type topic nsfw parent return_id;channel}`

Creates a new channel. 

#### Arguments
- `name`: The name of the channel.
- `type`: The [type](https://discord.com/developers/docs/resources/channel#channel-object-channel-types) of the channel. `guildtext`, `guild_text`, `GUILD_TEXT`, and `GuildText` are all valid and will all resolve to a guild text channel.
- `topic`: The topic of the channel.
- `nsfw`: Whether the channel is NSFW or not.
- `parent`: The parent channel, if any.
- `return_id`: Whether to return the created channels ID or not.

## `{channel.delete;channel}`

> This tag can do serious damage if you are not extremely careful with validating inputs. {.is-warning}

Deletes a channel.
