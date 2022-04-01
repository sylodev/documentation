# Global tags

## `{time format;time}`

Formats time as a string. Is compatible with any of the `.createdAt` tags.

#### Arguments

- `time`: Can be any time that the bot can parse. This includes millisecond timestamps `1644856250309`, unix timestamps `1644856250`, relative times `5 hours`, ISO timestamps `2022-02-14T16:31:26.725Z` and many others. Defaults to the current time.
- `format`: Can be a [timestamp style](https://discord.com/developers/docs/reference#message-formatting-timestamp-styles) - names or descriptions both work. If no style is provided, unix timestamp is returned. This should only be used when outputting time to users as it returns the time formatted with Discord's timestamp markdown.

```
{time}  // 1636084903
{time format=relative_time;5 hours ago}  // 5 hours ago
{time;2021-11-05T04:01:43.661Z}          // 1636084903
{time format=relative_time;2022-08-21}   // in 10 months
```

## `{casing mode;input}`

Changes the casing of a string.

Accepted modes:
`lower` for lowercase
`upper` for uppercase
`first` to capitalise the first letter
`title` for "Title Case"
`camel` for camelCase
`constant` for CONSTANT_CASE

## `{length;string_or_array}`

Returns the number of characters in a string and the number of elements in an array.

```
{length;pog}  // 3
{length;{[one;two;three]}}  // 3
```

## `{isSnowflake lax return_id;target}`

Determines whether the target string is a snowflake.

#### Arguments

- `lax`: Whether to accept snowflakes surrounded by characters or not.
- `return_id`: Whether to return a boolean or an ID. If the target is not a snowflake and `return_id` is set to true, the tag outputs nothing.

```
{isSnowflake;111372124383428608}  // true
{isSnowflake;hello}               // false
{isSnowflake;123098123}           // false
{isSnowflake lax=true; hello 355876124779347968}             // true
{isSnowflake lax=true return_id=true;<@111372124383428608>}  // 111372124383428608
```

## `{snippet maxLength=100 suffix=… extra;target}`

Create a snippet of a string, truncating it if it is over the max length.

#### Arguments

- `maxLength`: The maximum length of the snippet.
- `suffix`: The suffix to add to the end of the snippet if it is truncated.
- `extra`: The extra text to add to the end of the snippet, regardless of whether its truncated.
- `target`: The string to create a snippet from.

## `{settings;pluginCode;settingsKey}`

Get a settings value from a plugin. This tag is intended mostly for internal use and as such there is no official list of all the settings keys available.

#### Arguments

- `pluginCode`: The code of the plugin to get settings of, for example `suggestions`.
- `settingsKey`: The settings key to get, for example `anonymousSuggestions` would check if the bot should make suggestions anonymous for the suggestions plugin.

## `{find case_insensitive=true return_all=false;target;pattern}`

Finds `pattern` in `target` and returns the first match or all matches if specified. [Regular expressions](https://regexr.com/) are supported.

#### Arguments

- `case_insensitive`: Whether the search should ignore case or not. Is incompatible with regex; use the flag `i` instead.
- `return_all`: Whether to return an array of all matches or only the first one. Cannot be used without `/regex/g`.
- `target`: The string to search.
- `pattern`: The string or regex pattern to find.

```
{find;hello world;hello}     // hello
{find;hello world;nothing}
{find case_insensitive=false;hello world;HELLO}          // HELLO
{find;hello world;/hello/i}  // hello
{find return_all=true;hello hello hello world;/hello/ig} // {[hello;hello;hello]}
```

## `{replace replace_all=true case_insensitive=true;target;pattern;replacement}`

Replaces matches of `pattern` in `target` by `replacement`. [Regular expressions](https://regexr.com/) are supported.

#### Arguments

- `case_insensitive`: Whether the search should ignore case or not. Is incompatible with regex; use the flag `i` instead.
- `replace_all`: Whether to replace all matches or only the first one. Is incompatible with regex; use the flag `g` instead.
- `target`: The string to search.
- `pattern`: The string or regex pattern to find.
- `replacement`: The string to put in place of the pattern.

```
{replace replace_all=false;hello hello;hell;hey}  // heyo hello
{replace;hello hello;hell;hey}     // heyo heyo
{replace;hello hello;/hell/;hey}   // heyo hello
{replace;hello hello;/hell/g;hey}  // heyo heyo
```

## `{sleep;duration}`

Holds up processing. This does not schedule execution for later, it pauses execution until the sleep duration is up. You should only use this in very specific cases and avoid it entirely if possible.

## `{math precision_fix=true;expr}`

Evaluates math. `precision_fix` enables a hack that fixes floating point precision errors, but may cause issues in very specific circumstances. Realistically nothing you do with actions should require disabling `precision_fix`.

## `{random length=1 return_array=false;haystack}`

Gets a random item from a list. `length` is the number of items to return. When `length` is true, you can choose to return the random items in an array with `return_array`.

```
{random;123}           // 2
{random;{[1;2;3]}}     // 1
{random length=2;123}  // 21
{random length=2 return_array=true;123}  // {[2;1]}
```

## `{fetch;link}`

Performs a HTTP request to a URL.

`application/json` will be parsed as JSON.
`application/xml`, `text/xml`, `application/rss+xml` and `application/atom+xml` will be parsed as XML.

```
{=data;{fetch;https://atlas.bot/api/status}}\n{$data.body.ok}  // true
```

## `{split;separator}`

Splits a string into multiple parts. `separator` can be an arbitrary string or regex pattern.

```
{split;one,two,three;,}          // {[one;two;three]}
{split;woah party tricks;/ +/g}  // {[woah;party;tricks]}
{split;one,two,three;/(,)/g}     // {[one;,;two;,;three]}, you can use groups to keep the separator in the output array.
```

## `{push return?;array;value}`

Adds an item to the end of an array.

This will mutate the original array, which is why nothing is returned by default.

```
{=array;{[one]}}
{push;{$array};two}  // no output
{$array}             // {[one;two]}
{push return;{$array};three}  // {[one;two;three]}
```

## `{unshift return?;array;value}`

Adds an item to the front of an array. Essentially the same as `{push}` but the item is added to the beginning of the array.

```
{=array;{[three]}}
{unshift;{$array};two}  // no output
{$array}                // {[two;three]}
{unshift return;{$array};one}  // {[one;two;three]}
```

## `{shift}`

Returns and deletes the first item of an array.

```
{=array;{[one;two;three]}}
{shift;{$array}}  // one
{$array}          // {[two;three]}
```

## `{pop}`

Returns and deletes the last item of an array.

```
{=array;{[one;two;three]}}
{pop;{$array}}  // three
{$array}        // {[onw;two]}
```

## `{or boolean?;...}`

Gets the first parameter that is not empty or falsy. The `boolean` option can be used to return a boolean instead of the first valid value.

```
{or;;two}       // "two"
{or;;}          // no output
{or;false;two}  // "two"
{or;one;two}    // "one", "two" is never evaluated
{or boolean;one;two}  // true
{or boolean;;}  // false
```

## `{and boolean?;...}`

Ensures all parameters are present, returning the last parameter if all are valid. The `boolean` option can be used to return a boolean instead of the last parameter if all are valid.

```
{and;;two}     // no output, "two" is never evaluated
{and;one;two}  // "one", "two" is evaluated
{and;;}        // no output
{and boolean;one;two}  // true
{and boolean;one;}     // false
```

## `{formatNumber;number}`

Formats a number. [Formats using the context locale if possible](https://en.wikipedia.org/wiki/Decimal_separator) (for example, the guild language).

```
{formatNumber;1000.5} // 1,000.5
{formatNumber;1000.5} // 1 000,5 for some other languages
```

## `{#if}`

Compares different values and executes instructions based on the result. Syntax is `{#if;condition;run_if_true;run_if_false}`. `condition` is either a boolean or a comparison with two elements and an operator such as `{#if;10;>;5;10 is greater than 5;10 is not greater than 5;`. The available operators are `===`, `==`, `!=`, `>=`, `>`, `<=`, `<`, `!==`, and `matching`.

```ts
[
	{
		input: "{#if;word;==;WORD;yay;nay}",
		output: "yay",
		note: '"==" is for case-insensitive comparison',
	},
	{
		input: "{#if;word;===;WORD;yay;nay}",
		output: "nay",
		note: '"===" is for case-sensitive comparison',
	},
	{
		input: "{#if;word;matches;/[a-z]+/gu;yay;nay}",
		output: "yay",
		note: '"matches" can be used for matching regex',
	},
	{
		input: "{#if;true;===;yes;yay;nay}",
		output: "yay",
		note: "Boolean-like values are coerced to booleans",
	},
	{
		input: "{#if;5;<;10;yay;nay}",
		output: "yay",
		note: "Numbers are compared as numbers.",
	},
	{
		input: "{#if;true;{channel.send;yay};{channel.send;nay}}",
		output: "yay",
		note: 'Because this is a keyword tag, only "yay" will be sent. Regular tags would run and send both "yay" and "nay".',
	},
];
```

## `{#for;init;iterable;body}`

Iterates over array items until `{#break}` is encountered or it reaches the end of the array.

```
{=array;{[one;two;three]}}
{#for;{=item};{$array};{$item}}  // one two three
```

## `{#break}`

Breaks for-loops early. In this example, only the first item would ever be output.

```
{=array;{[one;two;three]}}
[#for;{=item};{$array}]
	{$item}
	{#break}
[/for]
```

## Blocks

Both `{#if}` and `{#for}` also support a block syntax with regular brackets. For the `[#if]` block, it is not possible to have a body that will run when the condition is false.

### `[#if]`

Syntax: `[#if;condition] body [/if]`

```
[#if;{ticket.reason}]
    // Add the ticket reason only if it is not empty
    {responder.embedField name="Reason" value={ticket.reason}}
[/if]
```

### `[#for]`

Syntax: `[#for;init;iterable] body [/for]`

```
{=array;{[one;two;three]}}
[#for;{=item};{$array}]
	{responder.embedField name="Item Value" value={$item}
[/for]
```

## `{#throw;message}`

Throws an engine error. Depending on your action setup, these will be shown to the user and logged just as regular engine errors would be.

## `{#catch;body;message}`

Catches a thrown error.

```
{#catch;{#throw;Test error};Oh no! Something went wrong}  // Oh no! Something went wrong
{#catch;{throw;Oopsy poopsy!}}
{#catch;{user.id}}  // 111372124383428608
```
