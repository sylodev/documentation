# Functions

Scripts can define functions that can be invoked with arguments. The first parameter is the name of the function, and the last is the body of the function. Parameters in between are function parameters.

```
[#function;my_function;{=param1}]
	Hello {$param1}!
[/function]
{my_function;{user.mention}}
```

```json
{function;my_function;{user.id}}
{my_function} // outputs the users ID
```

Imporing scripts with functions will make those functions available to the script.

```
{import;actions/...}
{my_function}
```

## Returning values

`{return}` can be used in functions to return values. This is important for some functions that have to return rich data, as there can be issues with the data returned unless you explicitly use `{return}`.

```json
[#function;my_function]
	This will be discarded as return is used.
	{return;{{
		"title": "My Title"
	}}}
[/function]

{=data;{my_function}}
{$data.title} // "My Title"
```

In this example, without `{return}`, the function would include the string "This will be discarded as return is used" with the object appended.

Even without the string, the object would be destroyed because during parsing the spaces in the body of the function are included. This may be changed in the future.
