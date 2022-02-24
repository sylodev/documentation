---
title: Action Triggers
description: Information on action triggers and how they work
published: 1
date: 2022-02-23T17:55:55.555Z
tags: actions
editor: markdown
dateCreated: 2022-01-21T06:07:28.374Z
---

# Action Triggers

## Slash Command


> It may take a couple minutes for changes to this trigger to show in Discord. Changing the trigger involves syncing those changes with Discord, which can take time. {.is-info}

#### Parameters
- `{user}`: The user who invoked the command
- `{channel}`: The channel where the command was invoked
- `{option}`: The arguments that were passed to the command by the user

Fires when someonew runs the slash command `/<trigger value>`. It can be used to make your own custom commands, for example the default trigger will register a `/my_command` command that you can run to invoke your action.

You can also configure options that the slash command can have, which will be passed to your action through the `{option}` tag. If you have an option named `target_user` that is a "User" option type, you can do `{option;target_user}` to get the target user's ID, which can then be used in other tags, for example `{user.username;{option;target_user}}` to get the target user's username.

## Keyword

#### Parameters
- `{channel}`: The channel where the command was invoked
- `{message}`: The message that invoked the command
- `{user}`: The user who invoked the command

Fires when a message received by the bot contains a given phrase or matches a RegEx pattern. Unlike slash commands, this trigger will only work in channels where the bot has `View Channel` permissions. Wildcards are supported. `hello*world` will be expanded to match `*hello*world*`, to avoid this you can use regex with `^` and `$`, such as `/^hello.*world$/` which will match messages matching "hello\*world" exactly, and not something like `hello world :)`.

Some examples of valid patterns are

- `world` will match messages containing "world", such as "something here word", "bigworld", "the world is big", etc.
- `hello*world` will match messages containing "hello" and "word", even if there are other words between the two, such as "Hello World!", "Hello There World", "Something Hello World"
- `/hello.world/i` is a regex pattern that will match messages such as "Hello World!", "Hello There World" but or even "unrelaetd helloxworld"
- `/^Hello World$/` is a regex pattern that will match messages exactly matching "Hello World" and nothing else. `^` and `$` are [regular expression assertions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions) that match the beginning and ending or the input, respectively, which means the message must start and end with "Hello World".

## Script

Actions using this trigger can imported by other actions without having to first be exported. This allows you to create dynamic modules that can be shared across multiple actions. This trigger will never fire, which also means the settings for the action are ignored if any are defined.

## Context Menu

> It may take a couple minutes for changes to this trigger to show in Discord. Changing the trigger involves syncing those changes with Discord, which can take time. {.is-info}

#### Parameters
- `{channel}`: The channel where the command was invoked
- `{user}`: The user who invoked the command
- `{$targetType}`: The [type of target](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-types)

#### Parameters for Message Context Menus
- `{message}`: The message the action was used on
- `{$targetId}`: The ID of the message.

#### Parameters for User Context Menus
- `{$targetId}`: The ID of the user the action was used on

Fires when someone right clicks a message or user and selects the trigger name under `Apps` in the context menu.

 <img src="https://i.imgur.com/2atG7Qb.png" alt="Example showing a Context Menu action in Discord" loading="lazy" />

To get, for example, the name of the target user with the User Context Menu, do `{user.username;{$targetId}}`.

## Interval

Fires an action on a schedule. The schedule can follow multiple formats, including [cron](https://en.wikipedia.org/wiki/Cron)-like expressions and regular text input, such as `every minute` or `every hour on monday between 6am and 6pm`. If the input is invalid and cannot be parsed, you will not be able to save the action. All schedules are calculated in UTC.

Runs must be at minimum a minute apart. If an action is scheduled to run every second, it will only be invoked every minute at most. Additionally, if an action is set to run every minute of 2022, once the year is over the action will be disabled and you will have to configure a new schedule.

An action set to run every hour will be scheduled to run on the hour every hour. There is no guarantee the action will run at the exact time it is scheduled, as priority may be given to actions that run less frequently, or there may be a lot of actions to run at that specific moment which will delay others. Actions set to run at midnight every day will be competing with thousands of others to run, so they may be delayed by a couple of seconds or minutes. You can configure this by setting a grace period. If the action does not run within the grace period of the target time, that run will be scrapped and the action will be rescheduled to run at the next scheduled date. For example, an action set to run every day at 5pm with a grace period of 30 minutes will not run if the bot is down from 5pm to 5:30pm.

Actions with this trigger will run with the user who last updated the action in context, which also means the action will inherit that user's permissions in the server.

The format for cron expressions is as follows:

```bash
# ┌───────────── minute (0 - 59)
# │ ┌───────────── hour (0 - 23)
# │ │ ┌───────────── day of the month (1 - 31)
# │ │ │ ┌───────────── month (1 - 12)
# │ │ │ │ ┌───────────── day of the week (0 - 6) (Sunday to Saturday;
# │ │ │ │ │                                   7 is also Sunday on some systems)
# │ │ │ │ │
# │ │ │ │ │
# * * * * *
```

Some examples of valid schedules:

- `0/5 14 * * *` is a cron expression that fires every 5 minutes starting at 2pm and ending at 2:55pm, every day.
- `at 10:15am`
- `every 5 minutes`
- `at 10:15 am also at 5:15pm except on Tuesday`
- `every 20 mins starting on the 7th min` fires on the 7th, 27th, and 47th minute every hour
- `after 12th hour` fires every hour after noon every day
- `at 5:00 pm on Weds,Thurs and Fri` fires at 5:00pm on Wednesday, Thursday, and Friday
- `at 5:00 pm every 1 day of March in 2014` fires at 5:00pm every day of March in 2014

## Message Reaction Add

#### Parameters
- `{channel}`: The channel where the command was invoked
- `{message}`: The message the reaction was for
- `{user}`: The user who reacted to the message
- `{$emoji}`: The emoji of the reaction

Fires when a reaction is added to a message. You must specify a single emoji to be checked.

## Message Reaction Remove

#### Parameters
- `{channel}`: The channel where the command was invoked
- `{message}`: The message the reaction was for
- `{user}`: The user whose reaction was removed
- `{$emoji}`: The emoji of the reaction

Fires when a user remove a reaction from a message they previously reacted to. You must specify a single emoji to be checked.

## Message Create

> Because this trigger is easy to abuse, there are extreme limits in place. {.is-danger}

#### Parameters
- `{channel}`: The channel of the message
- `{message}`: The message sent
- `{user}`: The user who sent the message

Fires when someone sends any message to a server. You can optionally filter by messages in a specific channel.

## Guild Member Add

#### Parameters
- `{user}`: The user who joined the server

Fires when a member joins the server.

## Guild Member Remove

#### Parameters
- `{user}`: The user who left the server

Fires when a member leaves the server.

## Guild Member Role Add

> This trigger relies on caching which may cause some events to be missed. Avoid using this trigger for crucial work. {.is-warning}

#### Parameters
- `{channel}`: The specified context channel
- `{role}`: The role that was added
- `{user}`: The user who received the role

Fires when a member gets a new role. You can configure a specific role to listen for, otherwise any role being added will fire the action.

## Guild Member Role Remove

> This trigger relies on caching which may cause some events to be missed. Avoid using this trigger for crucial work. {.is-warning}

#### Parameters
- `{channel}`: The specified context channel
- `{role}`: The role that was removed
- `{user}`: The user who lost the role

Fires when a role is removed from a member. You can configure a specific role to listen for, otherwise any role being removed will fire the action.

## Voice Channel Join

#### Parameters
- `{channel}`: The channel joined
- `{user}`: The user who joined a channel

Fires when a user joins a voice channel or switches to a new voice channel. 

## Voice Channel Leave

#### Parameters
- `{channel}`: The channel left
- `{user}`: The user who left a channel

Fires when a user leaves a voice channel or switches to a new voice channel.

## Guild Boost Add

> This trigger relies on caching which may cause some events to be missed. Avoid using this trigger for crucial work. {.is-warning}

#### Parameters
- `{user}`: The user who boosted

Fires when a member boosts the server.

## Guild Boost Remove

> This trigger relies on caching which may cause some events to be missed. Avoid using this trigger for crucial work. {.is-warning}

#### Parameters
- `{user}`: The user who removed their boost

Fires when a member removes their boost from a server.

## Webhook


Actions using this trigger will fire when a HTTP request is sent to the specified URL. To prevent loops, action locking is enforced for webhook actions and `{#fetch}` can only call webhooks from other servers.

The request method must be `POST`. You can access body data via `{$request.body}` and `{$request.headers}`, for example `{$request.headers.content-type}`. For security, the `Authorization` and `Cookie` headers are inaccessible.

Actions with this trigger will run with the user who last updated the action in context, which will also mean the action inherits that users permissions in the server.


####  Response data
|   Property   |            Type             |                        Description                         |
| :----------: | :-------------------------: | :--------------------------------------------------------: |
|  statusCode  | `"ERROR"` \| `"OK"` \| `"PROCESSING"` |                The result of the invocation                |
|   output    |           string?           |                  The output of the action                  |
| errorMessage |           string?           |       The error message if the action failed to run        |
|  errorStack  |           string?           | The stack trace for the action if the action failed to run |
