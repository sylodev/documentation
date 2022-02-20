---
title: Global tags
description:
published: 1
date: 2022-02-14T17:23:02.173Z
tags:
editor: markdown
dateCreated: 2022-02-14T17:16:04.568Z
---

# Global tags

## `{time format;time}`

Gets the current time and formats it as a string.

`time` can be any time that the bot can parse - this includes millisecond timestamps `1644856250309`, unix timestamps `1644856250`, relative time `5 hours`, ISO timestamps `2022-02-14T16:31:26.725Z` and many others.

`format` can be a [timestamp style](https://discord.com/developers/docs/reference#message-formatting-timestamp-styles), names or descriptions both work. If no style is provided, unix timestamps are returned. This should only be used when outputting time to users as it returns the time formatted with Discords timestamp markdown stuff.

```
{time} // 1636084903
{time format=relative_time;5 hours ago} // 5 hours ago
{time;2021-11-05T04:01:43.661Z} // 1636084903
{time format=relative_time;2022-08-21} // in 10 months
```

## `{casing mode;input}`

Converts casing of a string.

`lower` for lowercase
`upper` for uppercase
`first` to capitalise the first letter
`title` to use "Title Case"
`camel` for camelCase
`constant` for CONSTANT_CASE

## `{length;string_or_array}`

`{length;pog}` 3
`{length;{[one;two;three]}}` 3

## `{isSnowflake lax return_id;target}`

Determine whether the target string is a snowflake.

`{isSnowflake;111372124383428608}` true
`{isSnowflake;hello}` false
`{isSnowflake;123098123}` false
`{isSnowflake lax=true;<@111372124383428608>}` true
`{isSnowflake return_id=true;111372124383428608}` 111372124383428608
`{isSnowflake lax=true return_id=true;<@111372124383428608>}` 111372124383428608

## `{find case_insensitive=true return_all=false;target;pattern}`

Find `pattern` in `target`. `/regex/i` is supported. `case_insensitive` is incompatible with regex patterns. `return_all` can be used with regex patterns to return all matches.

`{find;hello;hello}` hello
`{find;hello world;hello}` hello
`{find;hello world;nothing}`
`{find case_insensitive=false;hello world;HELLO}` HELLO
`{find;hello world;/hello/i}`
`{find return_all=true;hello hello hello world;/hello/ig}` {[hello;hello;hello]}

## `{replace replace_all=true case_insensitive=true;target;pattern;replacement}`

Replace in `target` values matched by `pattern` with `replacement`. `/regex/i` is supported. `case_insensitive` is incompatible with regex patterns. `replace_all` can be used to replace all matches instead of the first, and is incompatible with regex patterns - use the `g` flag.

`{replace;hello world;hello;goodbye}` goodbye world
`{replace;Hello World;/world/i;=)}` Hello =)

## `{sleep;duration}`

Hold up processing. This does not schedule execution for later, it pauses execution until the sleep duration is up. You should only use this for very specific use cases and avoid it entirely if you can.

## `{math precision_fix=true;expr}`

Evaluates math. `precision_fix` will enable a hack that fixes floating point precision errors, but may cause issues in very specific circumstances. Realistically nothing you do with actions should require disabling `precision_fix`.

## `{random length=1 return_array=false;haystack}`

Get a random item from a list.

`{random;123}` 2
`{random;{[1;2;3]}}` 1
`{random length=2;123}` 21
`{random length=2 return_array=true;123}` outputs `{[2;1]}`

## `{fetch;link}`

Perform a HTTP request to a URL.

`application/json` will be parsed as JSON
`application/xml`, `text/xml`, `application/rss+xml` and `application/atom+xml` will be parsed as XML.

`{=data;{#fetch;https://atlas.bot/api/status}}\n{$data.body.ok}` true

## `{#if}`

Compare different values and do things based on the result.

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
    note: 'Because this is a keyword tag, only "yay" will be sent. Regular tags would run send both "yay" and "nay".',
  },
];
```

## `{#for;init;iterable;body}`

Iterate over array items or loop however many times is necessary.

```
{=array;{[one;two;three]}}
{#for;{=item};{$array};{$item}}
```

## `{#break}`

Break for-loops early. In the example, only the first item would ever be output.

```
{=array;{[one;two;three]}}
[#for;{=item};{$array}]
	{$item}
	{#break}
[/for]
```

## `{#throw;message}`

Throw an engine error. Depending on your action setup, these will be shown to the user and logged just as regular engine errors would be.

## `{#catch;body;message}`

Catch a thrown error.

`{#catch;{#throw;Test error};Oh no! Something went wrong}` Oh no! Something went wrong
`{#catch;{throw;Oopsy poopsy!}}`
`{#catch;{user.id}}` 111372124383428608
