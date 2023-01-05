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

Edit the role.

`name` is the new role name
`color` is the new colour of the role
`reason` is the reason for editing this role

```
{role.edit name="Very cool" colour=teal}
```

## `{role.create name color reason return_id;role}`

Create a new role.

`name` is the name of the role
`color` is the colour of the role
`reason` is the reason for creating the role
`return_id` is whether to return the created roles ID.

## `{role.delete reason;role}`

> This tag can do serious damage. Make sure you are properly restricting access to any scripts using this tag. {.is-warning}

Delete a role.

`reason` is why you are deleting this role.
