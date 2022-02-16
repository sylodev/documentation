---
title: Importing Scripts
description: 
published: 1
date: 2022-02-16T12:10:29.254Z
tags: 
editor: markdown
dateCreated: 2022-02-16T12:10:29.254Z
---

# Importing Scripts

Using `{#import}` you can import any action in the server. The `Script` action trigger type is specifically made for use with `{#import}`, as the trigger will never fire. `{#import}` will inline the imported script and expose any functions it has in the current script.

You can use imports to share common functionality between scripts, and to be able to update functions without updating a dozen occurences across multiple scripts.

Let's say we have this saved as an action script:

```
[#function;my_function]
	Hello world!
[/function]
```

If we import it with `{#import}`

```
{#import;actions/...}
{my_function}
```

What will actually be run is effectively this

```
[#function;my_function]
	Hello world!
[/function]
{my_function}
```

With the imported script being inlined into the final script.

