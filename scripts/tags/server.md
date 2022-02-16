---
title: {server} tags
description: 
published: 1
date: 2022-02-16T06:29:18.052Z
tags: 
editor: markdown
dateCreated: 2022-02-16T06:29:18.052Z
---

# `{server}`

This was previously named `{guild}`. All `{server}` tags have a `{guild}` alias for backwards compatibility. `{server.id}` is the same as `{guild.id}`.

## `{server.id}`

## `{server.name}`

## `{server.icon;size;hash}`

Get the servers icon.

`size` is the size of the image to get. Must be a valid [CDN size](https://discord.com/developers/docs/reference#image-formatting).
`hash` is whether to return the hash directly instead of a URL.

## `{server.splash;size;hash}`

## `{server.banner;size;splash}`

## `{server.channels}`

Returns an array of ids for all channels in the server.

## `{server.roles}`

Returns an array of ids for all roles in the server.

## `{server.shardId}`

## `{server.ownerId}`

## `{server.memberCount}`

Get the total count of members in the server. This should be almost exactly accurate and is not subject to caching issues.

## `{server.createdAt}`