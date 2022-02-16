---
title: Variables
description: 
published: 1
date: 2022-02-16T12:05:33.754Z
tags: 
editor: markdown
dateCreated: 2022-02-16T12:05:33.754Z
---

# Variables

Variables let you store data to use at a later date.

```
{=key;value}
{$key} // "value"
```

Variables can set and get objects

```
{=key.nested;value}
{$key.nested} // "value"
{$key} // { nested: 'value' }
```

Key names can be dynamic

```
{=users.{user.id}.balance;100}
```

Arrays and other data is supported

```
{=target;{[one;two;three]}}
{$target} // [one, two, three]
{$target.0} // one
```