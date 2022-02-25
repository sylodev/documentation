---
title: {user} tags
description: 
published: 1
date: 2022-02-25T17:00:00.000Z
tags: 
editor: markdown
dateCreated: 2022-02-16T06:24:57.222Z
---

# `{user}` tags

## `{user.mention;user}`

Returns a string with a user mention.

## `{user.id;user}`

Returns the ID of a user.

## `{user.username;user}`

Returns the username of a user.

## `{user.bot;user}`

Checks whether a user is a bot account.

## `{user.tag;user}`

Returns the tag of a user with the username and discriminator, for example `Grainus#0432`.

## `{user.discriminator;user}`

Returns the discriminator of a user, which is the four digits at the end of the username.

## `{user.avatar;user}`

Returns the avatar URL of a user. Their server avatar will take priority if they have one.

## `{user.roles;member}`

Returns an array of IDs for all the roles of a user.

```
{choose;{user.roles}}  // A random role the user has
```

## `{user.nickname;member}`

Returns the display name of a user. This will be their nickname if they have one set and their username otherwise.

## `{user.joinedAt;member}`

Returns the number milliseconds between the UNIX epoch and the join date of a user.

## `{user.createdAt;user}`

Returns the number milliseconds between the UNIX epoch and the creation date of a user's Discord account.

## `{user.edit nick mute deaf channel;member}`

Edits a user.

#### Arguments
- `nick`: The user's new nickname. Leave empty to clear.
- `mute`: Whether the user will be server muted in voice channels.
- `deaf`: Whether the user will be server deafened in voice channels.
- `channel`: The new channel to move the user to if they are in voice channel.

## `{user.addrole reason;role;member}`

Gives a user a role.

#### Arguments
- `reason`: The reason for the action that will be displayed in the Audit Log.
- `role`: The role to add to the user.

## `{user.removerole reason;role;member}`

Removes a role from a user.

#### Arguments
- `reason`: The reason for the action that will be displayed in the Audit Log.
- `role`: The role to remove from the user.

## `{user.colour;member}`

Gets a user's color based on their highest role.
