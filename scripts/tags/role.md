---
title: {role} tags
description: 
published: 1
date: 2022-02-24T01:55:55.555Z
tags: 
editor: markdown
dateCreated: 2022-02-16T06:20:40.655Z
---

# `{role}` tags

## `{role.id;role}`

Returns the ID of a role.

## `{role.name;role}`

Returns the name of a role.

## `{role.mention;role}`

Returns a string with a role mention.

## `{role.position;role}`

Returns an integer corresponding to a role position. A higher number means a role higher in the hierarchy. Position 0 is the @everyone role.

## `{role.colour;role}` or `{role.color;role}`

Returns the hexadecimal value for the color of a role.

## `{role.hoisted;role}`

Checks if a role is hoisted.

## `{role.managed;role}`

Checks if a role is managed by an application.

## `{role.mentionable;role}`

Checks if a role is mentionable by everyone.

## `{role.createdAt}`

Returns the Unix timestamp in milliseconds for the creation date of a role.

## `{role.hasPermission;permission_name;role}`

Checks whether a role has the specified permission.

`{role.hasPermission;administrator}`

## `{role.edit name color reason;role}`

Edits the role.

`name` is the new role name
`color` is the new colour of the role
`reason` is the reason for editing this role

```
{role.edit name="Very cool" colour=teal}
```

## `{role.create name color reason return_id;role}`

Creates a new role.

#### Arguments
- `name`: The name of the role
- `color` or `colour`: The color of the role
- `reason`: The reason for the action that will be displayed in the Audit Log
- `return_id`: Whether to return the ID of the created role

## `{role.delete reason;role}`

> This tag can do serious damage. Make sure you are properly restricting access to any scripts using this tag. {.is-warning}

Deletes a role.

#### Arguments
- `reason`: The reason for the action that will be displayed in the Audit Log

