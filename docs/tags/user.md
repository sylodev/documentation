# User

## `{user.mention;user}`

Returns a string with a user mention.

## `{user.id;user}`

Returns the ID of a user.

## `{user.username;user}`

Returns the username of a user.

## `{user.bot;user}`

Returns a boolean whether a user is a bot account.

## `{user.tag;user}`

Returns the tag of a user with the username and discriminator, for example `DracoClaw#0065`.

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

Returns a [timestamp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#description) for the join date of a user that can be used with [{time}](https://documentation.atlas.bot/en/scripts/tags/global#time-formattime).

## `{user.createdAt;user}`

Returns a [timestamp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#description) for the creation date of a user's Discord account that can be used with [{time}](https://documentation.atlas.bot/en/scripts/tags/global#time-formattime).

## `{user.edit nick mute deaf channel;member}`

> This tag is part of the `Mutate User` expensive group.

Edits a user.

#### Arguments

- `nick`: The user's new nickname. Leave empty to clear.
- `mute`: Whether the user will be server muted in voice channels.
- `deaf`: Whether the user will be server deafened in voice channels.
- `channel`: The new channel to move the user to if they are in voice channel.

## `{user.addrole reason;role;member}`

> This tag is part of the `Mutate User` expensive group.
> This tag is marked `Dangerous` and must be enabled in Advanced Settings.

Gives a user a role.

#### Arguments

- `reason`: The reason for the action that will be displayed in the Audit Log.
- `role`: The role to add to the user.

## `{user.removerole reason;role;member}`

> This tag is part of the `Mutate User` expensive group.

Removes a role from a user.

#### Arguments

- `reason`: The reason for the action that will be displayed in the Audit Log.
- `role`: The role to remove from the user.

## `{user.colour;member}`

Gets a user's colour based on their highest non-default (#99aab5) role.

## `{user.hasPermission;permissions;member?}`

Checks whether a user has the given permissions.

- `permissions` can be a permissions number or name, for example `create_instant_invite`. A full list of permissions can be seen [here](https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags).
- `member` the member to check the permissions of. Defaults to the context user.

## `{user.level;user?}`

Gets the level of a user.

- `user` the user to get the level of. Defaults to the context user.

## `{user.xp;user?;scoped?}`

- `user` the user to get the XP of. Defaults to the context user.
- `scoped` whether to get XP on the current level or total XP, defaults to total XP.

## `{user.setXP;xp;target?;add=false;sync=false}`

> This tag is part of the `Mutate User` expensive group.

Sets the users XP to the given amount.

- `xp` the amount of XP to set.
- `target` the user to set the XP of. Defaults to the context user.
- `add` whether to add the XP to their existing total.
- `sync` whether to sync level rewards for the user.

## `{user.setLevel;level;target?;add=false;sync=false}`

> This tag is part of the `Mutate User` expensive group.

Sets the users level to the given amount.

- `level` the amount of levels to set.
- `target` the user to set the level of. Defaults to the context user.
- `add` whether to add the levels to their existing total.
- `sync` whether to sync level rewards for the user.

## `{user.nextLevel;user?}`

Gets the next level the user will become.

## `{user.nextLevelXP;user?}`

Get the XP required for the users next level.

## `{user.remainingXP;user?}`

Gets the amount of XP a user needs to level up to the next level.

## `{user.rank;user?}`

Gets the rank of a user.

## `{user.reward filter=achieved first=true raw=false}`

Returns the reward the user achieved by levelling up. Returns nothing if there was no reward. **This tag is only available in level-up scripts** and cannot be used elsewhere.

`first` is whether to return only the first reward in the filtered list. Some levels can have multiple rewards, so this might be useful for displaying all of them. An empty array will be returned if there are no rewards and `first=false`

`raw` is whether to return a raw rewards object with more information about the reward. The object looks something like `{ level, roleId, stack }`

`filter` is the kind of reward to return. The default, `achieved`, is recommended if you just want to tell the user of new roles they got by levelling up.

- `achieved`: Filters to roles the user achieved by levelling up.
- `entitled`: Filters to all roles the user is entitled to.
- `added`: Filters to roles that were added to the user by levelling up. If the user levels up to level 10 and that level has a reward but the user already has that reward, it would not be included in this filter. `achieved` on the other hand would have included it.
- `removed`: Filters to rewards that were removed by levelling up.
- `existing`: Filters to rewards that the user had before levelling up.

As an example, you could set your level-up notification to this

```
{if;{user.reward};Congratulations {user.mention}! You levelled up to level {user.level} and got the {role.mention allow_mention=false;{user.reward}} role!}
```

Which would send a level-up message only if the user got a new role.
