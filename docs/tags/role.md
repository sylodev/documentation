# Role

## `{role.id;role}`

Gets the ID of a role.

## `{role.name;role}`

Gets the name of a role.

## `{role.mention allow_mention;role}`

Returns the role @mention.

`allow_mention` is whether to ping the role.

## `{role.position;role}`

Gets the position of a role.

## `{role.color;role}`

Gets the hex code of a role.

## `{role.managed;role}`

Returns `true` for managed roles. ex: Server Boost and Bot roles.

## `{role.mentionable;role}`

Returns a boolean indicating whether the role can be mentioned.

## `{role.createdAt}`

Returns the date the role was created.

## `{role.hasPermission;permission_name;role}`

Check whether the role has the specified permission.

`{role.hasPermission;administrator}`

## `{role.hoisted}`

Returns a boolean indicating whether the role is hoisted above other roles in the member list.

## `{role.edit name color reason;role}`

> This tag is part of the `Mutate Role` expensive group.

Edit the role.

`name` is the new role name
`color` is the new colour of the role
`reason` is the reason for editing this role

```
{role.edit name="Very cool" colour=teal}
```

<details>
  <summary>Color Defaults</summary>
  <p><code>Black: #000000
Dark Mode: #36393f
White: #FFFFFF
Red: #ED4245
Pink: #EB459E
Fuchsia: #EB459E
Purple: #9C27B0
Blurple: #5865F2
Blurple Classic: #7289DA
Deep Purple: #673AB7
Indigo: #3F51B5
Blue: #2196F3
Light Blue: #03A9F4
Cyan: #00BCD4
Teal: #009688
Green: #57F287
Light Green: #8BC34A
Lime: #CDDC39
Yellow: #FEE75C
Amber: #FFC107
Orange: #FF9800
Deep Orange: #FF5722
Brown: #795548
Grey: #9E9E9E
Blue Grey: #607D8B
Role Default: #4f545c
Magenta: #E91E63</code></p>
</details>

## `{role.create name color reason return_id;role}`

> This tag is part of the `Mutate Role` expensive group.

Create a new role.

`name` is the name of the role
`color` is the colour of the role
`reason` is the reason for creating the role
`return_id` is whether to return the created roles ID.

<details>
  <summary>Color Defaults</summary>
  <p><code>Black: #000000
Dark Mode: #36393f
White: #FFFFFF
Red: #ED4245
Pink: #EB459E
Fuchsia: #EB459E
Purple: #9C27B0
Blurple: #5865F2
Blurple Classic: #7289DA
Deep Purple: #673AB7
Indigo: #3F51B5
Blue: #2196F3
Light Blue: #03A9F4
Cyan: #00BCD4
Teal: #009688
Green: #57F287
Light Green: #8BC34A
Lime: #CDDC39
Yellow: #FEE75C
Amber: #FFC107
Orange: #FF9800
Deep Orange: #FF5722
Brown: #795548
Grey: #9E9E9E
Blue Grey: #607D8B
Role Default: #4f545c
Magenta: #E91E63</code></p>
</details>

## `{role.delete reason;role}`

> This tag is part of the `Mutate Role` expensive group.
> This tag is marked `Dangerous` and must be enabled in Advanced Settings.

Delete a role.

`reason` is why you are deleting this role.

## `{role.icon;size;hash}`

Gets the icon of the role.