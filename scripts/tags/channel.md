---
title: {channel} tags
description: 
published: 1
date: 2022-02-23T19:30:00.000Z
tags: 
editor: markdown
dateCreated: 2022-02-16T06:15:22.397Z
---

# `{channel}` tags

## `{channel.mention;channel}`

Returns a string with the channel mention

## `{channel.id;channel}`

Returns the ID of a channel

## `{channel.type;channel}`

Returns an integer for the [channel type](https://discordpy.readthedocs.io/en/stable/api.html#discord.ChannelType)

| Number | Type        | Description                                           |
|--------|-------------|-------------------------------------------------------|
| 0      | text        | A text channel.                                       |
| 1      | voice       | A voice channel.                                      |
| 2      | private     | A private text channel. Also called a direct message. |
| 3      | group       | A private group text channel.                         |
| 4      | category    | A category channel.                                   |
| 5      | news        | A guild news channel.                                 |
| 6      | store       | A guild store channel.                                |
| 7      | stage_voice | A guild stage voice channel.                          |

## `{channel.createdAt;channel}`

Returns the Unix timestamp in milliseconds for the creation date of the channel

## `{channel.nsfw;channel}`

Returns true the text channel is marked NSFW and false if it's not

## `{channel.name;channel}`

Returns the name of the channel

## `{channel.lastMessageId;channel}`

Returns the ID of the last message sent in the channel

## `{channel.topic;channel}`

Returns the channel topic, AKA the channel description

## `{channel.edit;channel}`

Update a channel.

#### Arguments
- `name`: The new name of the channel
- `topic`: The new topic of the channel
- `nsfw`: Whether the channel is NSFW

## `{channel.create name type topic nsfw parent return_id;channel}`

Create a new channel. 

#### Arguments
- `name`: The name of the channel
- `type`: The type of the channel, eg `guild_text` to create a guild text channel.
- `topic`: The topic of the channel.
- `nsfw`: Whether the channel is NSFW or not
- `parent`: The parent channel, if any
- `return_id`: Whether to return the created channels ID

## `{channel.delete;channel}`

> This tag can do serious damage if you are not extremely careful with validating inputs. {.is-warning}

Delete a channel.
