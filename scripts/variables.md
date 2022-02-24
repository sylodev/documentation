---
title: Variables
description: 
published: 1
date: 2022-02-24T20:35:09.357Z
tags: 
editor: markdown
dateCreated: 2022-02-16T12:05:33.754Z
---

# Variables

Variables let you store data to use later in the same script.

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
{$target} // {[one;two;three]}
{$target.0} // one
```

# Persistent Variables
By using the `{store}` tag you can store data to use at a later date.

```
{store.set;key;value}
{store.get;key;value} // "value"
```


See [{store}](https://documentation.atlas.bot/en/scripts/tags/store) for information.