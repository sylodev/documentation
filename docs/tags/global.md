# Global

## `{option;name}`

Get the value of a defined option.

<img src="https://i.imgur.com/X6gT2Xc.png" alt="Example of how to define options" />

For this example, we'll assume the user ran the command as `/inspect input:example text user:@Sylver#1058`

```
{option;input} // "example text"
{option;user} // "111372124383428608"
{user.username;{option;user}} // "Sylver"
```

And for this example, we'll assume the user ran the command as `/inspect input:example text`

```
{option;input} // "example text"
{option;user} // "", because the user didn't provide a user option
```

## `{time format;time}`

Formats time as a string. Is compatible with any of the `.createdAt` tags.

#### Arguments

- `time`: Can be any time that the bot can parse. This includes millisecond timestamps `1644856250309`, unix timestamps `1644856250`, relative times `5 hours`, ISO timestamps `2022-02-14T16:31:26.725Z` and many others. Defaults to the current time.
- `format`: Can be a [timestamp style](https://discord.com/developers/docs/reference#message-formatting-timestamp-styles) - names or descriptions both work. If no style is provided, unix timestamp is returned. This should only be used when outputting time to users as it returns the time formatted with Discord's timestamp markdown.

```json
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

```json
{length;pog}  // 3
{length;{[one;two;three]}}  // 3
```

## `{isSnowflake lax return_id;target}`

Determines whether the target string is a snowflake.

#### Arguments

- `lax`: Whether to accept snowflakes surrounded by characters or not.
- `return_id`: Whether to return a boolean or an ID. If the target is not a snowflake and `return_id` is set to true, the tag outputs nothing.

```json
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

```json
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

```json
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

```json
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

## `{split;input;separator}`

Splits `input` into an array at `separator`. `separator` can be an arbitrary string or regex pattern.

```json
{split;one,two,three;,}          // {[one;two;three]}
{split;woah party tricks;/ +/g}  // {[woah;party;tricks]}
{split;one,two,three;/(,)/g}     // {[one;,;two;,;three]}, you can use groups to keep the separator in the output array.
```

## `{push return?;array;value}`

Adds an item to the end of an array.

This will mutate the original array, which is why nothing is returned by default.

```json
{=array;{[one]}}
{push;{$array};two}  // no output
{$array}             // {[one;two]}
{push return;{$array};three}  // {[one;two;three]}
```

## `{unshift return?;array;value}`

Adds an item to the front of an array. Essentially the same as `{push}` but the item is added to the beginning of the array.

```json
{=array;{[three]}}
{unshift;{$array};two}  // no output
{$array}                // {[two;three]}
{unshift return;{$array};one}  // {[one;two;three]}
```

## `{shift}`

Returns and deletes the first item of an array.

```json
{=array;{[one;two;three]}}
{shift;{$array}}  // one
{$array}          // {[two;three]}
```

## `{pop}`

Returns and deletes the last item of an array.

```json
{=array;{[one;two;three]}}
{pop;{$array}}  // three
{$array}        // {[onw;two]}
```

## `{or boolean?;...}`

Gets the first parameter that is not empty or falsy. The `boolean` option can be used to return a boolean instead of the first valid value.

```json
{or;;two}       // "two"
{or;;}          // no output
{or;false;two}  // "two"
{or;one;two}    // "one", "two" is never evaluated
{or boolean;one;two}  // true
{or boolean;;}  // false
```

## `{and boolean?;...}`

Ensures all parameters are present, returning the last parameter if all are valid. The `boolean` option can be used to return a boolean instead of the last parameter if all are valid.

```json
{and;;two}     // no output, "two" is never evaluated
{and;one;two}  // "one", "two" is evaluated
{and;;}        // no output
{and boolean;one;two}  // true
{and boolean;one;}     // false
```

## `{formatNumber;number}`

Formats a number. [Formats using the context locale if possible](https://en.wikipedia.org/wiki/Decimal_separator) (for example, the guild language).

```json
{formatNumber;1000.5} // 1,000.5
{formatNumber;1000.5} // 1 000,5 for some other languages
```

## `{if}`

Compares different values and executes instructions based on the result. Syntax is `{if;condition;run_if_true;run_if_false}`. `condition` is either a boolean or a comparison with two elements and an operator. The available operators are `==`, `===`, `!=`, `!==`, `>`, `>=`, `<`, `<=`, and `matches`.

```json
// "==" is used for case-insensitive comparison
{if;word;==;WORD;yay;nay} // yay

// "===" is for case-sensitive comparison
{if;word;===;WORD;yay;nay} // nay

// "matches" can be used for matching regex
{if;word;matches;/[a-z]+/gu;yay;nay} // yay

// Boolean-like values are coerced to booleans before comparison
{if;true;===;yes;yay;nay} // yay

// Numbers are compared as numbers
{if;5;<;10;yay;nay} // yay

// Conditional parsing is used, so in this example only "yay" is ever sent.
// This is an exception instead of a rule as most other tags will parse all parameters regardless.
{if;true;{channel.send;yay};{channel.send;nay}} // yay
```

## `{for;init;iterable;body}`

Iterates over array items until `{break}` is encountered or it reaches the end of the array.

```json
{=array;{[one;two;three]}}

// regular format
{for;{=item};{$array};{$item}}  // one two three

// block format
[#for;{=item};{$array}]
  {$item}
[/for]
```

## `{break}`

Breaks for-loops early. In this example, only the first item would ever be output.

```json
{=array;{[one;two;three]}}
[#for;{=item};{$array}]
	{$item}
	{break}
[/for]
```

## `{throw;message}`

Throws an engine error. Depending on your action setup, these will be shown to the user and logged just as regular engine errors would be.

## `{catch;body;message}`

Catches a thrown error.

```json
{catch;{throw;Test error};Oh no! Something went wrong}  // Oh no! Something went wrong
{catch;{throw;Oopsy poopsy!}}
{catch;{user.id}}  // 111372124383428608
```

## `{repeat;str;times}`

Repeats a string a given number of times.

```json
{repeat;Hello;3} // HelloHelloHello
```

## `{return}`

Used to return early or to return rich data that may be butchered otherwise. Can be used in functions and the top-level scope. See more in the [returning](../scripts/returning.md) or [functions](../scripts/functions.md) sections.

## `{void;...}`

Used to void the output of its children.

```json
Hello {void;World} // "Hello "
```

## `{keys;object}`

Get the keys of an object. Useful when you want to iterate over the keys or values of an object. Only top-level keys are returned

```json
{=object.key;value}
{=object.nested.key;value}
{keys;{$object}} // {[key;nested]}
```

## `{join;array;separator}`

Join the items of an array together with the given separator.

```json
{=array;{[one;two;three]}}
{join;{$array};,} // one,two,three
```

## `{randomInt;min;max}`

Get a random number between `min` and `max`. If `max` is not specified, `min` is used as the maximum and `0` is used as the minimum.

## `{isUrl;input}`

Determine if `input` is a valid URL. This will not query the domain to see if it is registered, but it will check for a valid protocol and top-level domain.

## `{slice;target;start;end}`

Get a slice of an array or string. If `end` is not specified, it is assumed to be the length of the target.

```json
{=array;{[one;two;three]}}
{slice;{$array};1} // {[two;three]}
{slice;{$array};1;2} // {[two]}
```

## `{randomString;length;alphabet?}`

Generate a random string.

- `length` is the length of the string to generate
- `alphabet` is the alphabet to use. If not specified, it is `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`

## `{includes;array;item}`

Check whether an array includes an item.

```json
{=array;{[one;two;three]}}
{includes;{$array};two} // true
```

## `{import;scriptId}`

Import a `script` action. View more information on the [imports](../scripts/imports.md) guide.

```json
// In the script
[#function;my_function]
	Hello World!
[/function]
```

```json
// In another action
{import;action/6c306503-adaf-48ae-b724-40b78d0edd28}
{my_function} // "Hello World!"
```

## `{sort;array;key?}`

Sort an array. Returns a new array and does not mutate the original.

- `array` the array to sort
- `key` the key to sort by if the array is an array of objects.
