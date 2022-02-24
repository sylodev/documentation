---
title: {server} tags
description: 
published: 1
date: 2022-02-24T02:15:15.151Z
tags: 
editor: markdown
dateCreated: 2022-02-16T06:29:18.052Z
---

# `{server}`

This was previously named `{guild}`. All `{server}` tags have a `{guild}` alias for backwards compatibility. `{server.id}` is the same as `{guild.id}`.

## `{server.id}`

Returns the ID of the server.

## `{server.name}`

Returns the name of the server.

## `{server.icon;size;hash}`

Gets the servers icon.

#### Arguments
- `size`: The size of the image to get. Must be a valid [CDN size](https://discord.com/developers/docs/reference#image-formatting).
- `hash`: Whether to return the hash directly instead of a URL.

## `{server.splash;size;hash}`

Gets the server splash.

#### Arguments
- `size`: The size of the splash to get. Must be a valid [CDN size](https://discord.com/developers/docs/reference#image-formatting).
- `hash`: Whether to return the hash directly instead of a URL.

## `{server.banner;size;splash}`

Gets the server banner.

#### Arguments
- `size`: The size of the banner to get. Must be a valid [CDN size](https://discord.com/developers/docs/reference#image-formatting).
- `hash`: Whether to return the hash directly instead of a URL.

## `{server.channels}`

Returns an array of IDs for all channels in the server.

## `{server.roles}`

Returns an array of IDs for all roles in the server.

## `{server.shardId}`

Returns the ID of the shard the server is running on.

## `{server.ownerId}`

Returns the ID of the server owner.

## `{server.memberCount}`

Get the total count of members in the server. This should be almost exactly accurate and is not subject to caching issues.

## `{server.createdAt}`

Returns the Unix timestamp in milliseconds for the creation date of the server.
