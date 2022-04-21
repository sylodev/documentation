# User

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

Returns a [timestamp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#description) for the join date of a user that can be used with [{time}](https://documentation.atlas.bot/en/scripts/tags/global#time-formattime).

## `{user.createdAt;user}`

Returns a [timestamp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#description) for the creation date of a user's Discord account that can be used with [{time}](https://documentation.atlas.bot/en/scripts/tags/global#time-formattime).

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
{if;{user.reward};Congratulations {user.mention}! You levelled up to level {user.level} and got the {role.mention;{user.reward}} role!}
```

Which would send a level-up message only if the user got a new role.
