---
title: {role} tags
description: 
published: 1
date: 2022-02-16T06:20:40.655Z
tags: 
editor: markdown
dateCreated: 2022-02-16T06:20:40.655Z
---

# `{role}` tags

## `{role.id;role}`

## `{role.name;role}`

## `{role.mention;role}`

## `{role.position;role}`

## `{role.colour;role}`

## `{role.hoisted;role}`

## `{role.managed;role}`

## `{role.mentionable;role}`

## `{role.createdAt}`

## `{role.hasPermission;permission_name;role}`

Check whether the role has the specified permission.

`{role.hasPermission;administrator}`

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

