---
title: Functions
description: 
published: 1
date: 2022-02-16T06:00:45.669Z
tags: 
editor: markdown
dateCreated: 2022-02-16T06:00:45.669Z
---

# Functions

Scripts can define functions that can be invoked with arguments. The first parameter is the name of the function, and the last is the body of the function. Parameters in between are function parameters.

```
[#function;my_function;{=param1}]
	Hello {$param1}!
[/function]
{my_function;{user.mention}}
```

```
{#function;my_function;{user.id}}
{my_function} // outputs the users ID
```

Imporing scripts with functions will make those functions available to the script. 
```
{#import;actions/...}
{my_function}
```