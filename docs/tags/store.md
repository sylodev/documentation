# Store

Tags used to keep values and data across invocations. `{perset}` and `{perget}` are analogs from v8.

```
{store.set;mykey;"This is a string"}
{store.get;mykey}  // "This is a string"
{store.delete;mykey}
```

## `{store.set;key;value}`

> This tag is part of the `Store` expensive group.

Adds an item to the store. `value` can be an object, array, string, number, etc. `key` will be coerced to a string.

## `{store.get;key}`

> This tag is part of the `Store` expensive group.

Gets an item from the store.

## `{store.delete;key}`

> This tag is part of the `Store` expensive group.

Deletes an item from the store.
