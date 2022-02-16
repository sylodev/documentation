---
title: {channel} tags
description: 
published: 1
date: 2022-02-16T06:15:22.397Z
tags: 
editor: markdown
dateCreated: 2022-02-16T06:15:22.397Z
---

# `{channel}` tags

## `{channel.mention;channel}`

## `{channel.id;channel}`

## `{channel.type;channel}`

## `{channel.createdAt;channel}`

## `{channel.nsfw;channel}`

## `{channel.name;channel}`

## `{channel.lastMessageId;channel}`

## `{channel.topic;channel}`

## `{channel.edit;channel}`

Update a channel.

`name` is the new name of the channel
`topic` is the new topic of the channel
`nsfw` is whether the channel is NSFW

## `{channel.create name type topic nsfw parent return_id;channel}`

Create a new channel. 

`name` is the name of the channel
`type` is the type of the channel, eg `guild_text` to create a guild text channel.
`topic` is the topic of the channel.
`nsfw` is whether the channel is NSFW or not
`parent` is the parent channel, if any
`return_id` is whether to return the created channels ID

## `{channel.delete;channel}`

> This tag can do serious damage if you are not extremely careful with validating inputs. {.is-warning}

Delete a channel.
