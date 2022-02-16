---
title: {user} tags
description: 
published: 1
date: 2022-02-16T06:24:57.222Z
tags: 
editor: markdown
dateCreated: 2022-02-16T06:24:57.222Z
---

# `{user}` tags

## `{user.mention;user}`

## `{user.id;user}`

## `{user.username;user}`

## `{user.bot;user}`

## `{user.tag;user}`

## `{user.discriminator;user}`

## `{user.avatar;user}`

Returns the users avatar, or their server avatar if they have one configured.

## `{user.roles;member}`

Returns an array containing all roles the user has.

```
{choose;{user.roles}} // a random role the user has
```

## `{user.nickname;member}`

## `{user.joinedAt;member}`

## `{user.createdAt;user}`

## `{user.edit nick mute deaf channel;member}`

Edit a user.

`nick` is the users new nickname. Leave empty to clear.
`mute` is whether the user is mute in voice channels.
`deaf` is whether the user is deafened in voice channels.
`channel` is the new channel to move the user to if they are in voice.

## `{user.addrole reason;role;member}`

Give a user a role.

## `{user.removerole reason;role;member}`

Remove a role from the user.

## `{user.colour;member}`

Get the users colour based on their highest role.