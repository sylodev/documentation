---
title: {user} tags
description: 
published: 1
date: 2022-02-24T20:30:30.222Z
tags: 
editor: markdown
dateCreated: 2022-02-16T06:24:57.222Z
---

# `{user}` tags

## `{user.mention;user}`

Returns a string with an user mention.

## `{user.id;user}`

Returns the ID of an user.

## `{user.username;user}`

Returns the username of an user.

## `{user.bot;user}`

Checks whether an user is a bot account.

## `{user.tag;user}`

Returns the tag of an user with the username and discriminator, for example `Grainus#0432`.

## `{user.discriminator;user}`

Returns the discriminator of an user, which is the four digits at the end of the username.

## `{user.avatar;user}`

Returns the URL of the avatar of an user, or of their server avatar if they have one.

## `{user.roles;member}`

Returns an array of IDs for all roles an user has.

```
{choose;{user.roles}} // a random role the user has
```

## `{user.nickname;member}`

Returns the display name of an user. This will be their nickname if they have one set and their username otherwise.

## `{user.joinedAt;member}`

Returns the Unix timestamp in milliseconds for the join date of an user.

## `{user.createdAt;user}`

Returns the Unix timestamp in milliseconds for the creation date of an user's Discord account.

## `{user.edit nick mute deaf channel;member}`

Edits an user.

#### Arguments
- `nick`: The user's new nickname. Leave empty to clear.
- `mute`: Whether the user will be server muted in voice channels.
- `deaf`: Whether the user will be server deafened in voice channels.
- `channel`: The new channel to move the user to if they are in voice channel.

## `{user.addrole reason;role;member}`

Gives an user a role.

#### Arguments
- `reason`: The reason for the action that will be displayed in the Audit Log
- `role`: The role to add to the user.

## `{user.removerole reason;role;member}`

Removes a role from an user.

#### Arguments
- `reason`: The reason for the action that will be displayed in the Audit Log
- `role`: The role to remove to the user.

## `{user.colour;member}`

Gets an user's color based on their highest role.
