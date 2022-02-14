---
title: {kv}
description: Creates, deletes, or manipulates key-value variables.
published: 1
date: 2022-02-14T16:23:17.761Z
tags: 
editor: markdown
dateCreated: 2022-01-24T16:12:52.291Z
---

## `{store.set;key;value}`

Add an item to the store. `value` can be an object, array, etc. `key` will be coerced to a string.

## `{store.get;key}`

Get an item from the store. 

## `{store.delete;key}`

Delete an item from the store.

## `{store.has;key}` 

Check whether the store has a key. Returns true if it does, false if it doesn't.