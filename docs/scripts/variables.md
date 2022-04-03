# Variables

Variables let you store values for later use.

```json
{=my_variable;hello}
{$my_variable} // "hello"
```

Variables support nested keys, which can be used to store values in a more complex structure.

```json
{=user.level;0}
{=user.name;John}
{$user.level} // get the "level" property of the "user" variable, 0
{$user} // get the "user" variable, in this case an object matching { level: 0, name: "John" }
```

Variable names can also be dynamic

```json
{=id;{user.id}} // 111372124383428608, a definitely real user ID
{=users.{$id}.balance;100}
{$users} // { 111372124383428608: { balance: 100 } }
```

## Arrays

You can create and update arrays.

```json
{=target;{[one;two;three]}}
{$target} // {[one;two;three]}
// Arrays are zero-indexed
{$target.0} // get the first item in the array, "one"
{$target.1} // get the second item in the array, "two"
```

### Finding array items

When using objects with arrays, you can use special syntax to find elements of an array.

```json
{=data;{{
	"myarray": [{
		"id": 1,
		"name": "Rocinante"
	}, {
		"id": 2,
		"name": "Pella"
	}]
}}}

// The format is [key:value], where key is the name of the key to retrieve and value is the value to match against.
{$data.myarray.[id:2].name} // "Pella"
```

# Persisting Variables

By using the `{store}` tag you can store data to use at a later date.

```json
{store.set;key;value}
{store.get;key;value} // "value"
```

You can persist objects and arrays. There are limits on how many items can be stored and how much data can be stored per key.

```json
{=user.id;1}
{=user.level;0}
{=user.balance;100}
{store.set;user;{$user}} // Store the {$user} variable at the "user" key

// Some time later...
{=user;{store.get;user}}
{$user.id} // 1
{$user.level} // 0
{$user.balance} // 100
```

The `{store}` tags do not understand nested keys, so you can't retrieve partial information with them.

```json
{=user.id;1}
{store.set;user;{$user}}
{store.get;user.id} // This will return nothing because it looks up the "user.id" key, not the "user" key.

// This works the other way around
{store.set;user.id;1}
{store.get;user} // Prints nothing because it looks up the "user" key while our data is stored at the "user.id" key.
```

See [{store}](https://documentation.atlas.bot/en/scripts/tags/store) for information.
