---
title: Action Triggers
description: Information on action triggers and how they work
published: 1
date: 2022-01-23T09:55:04.461Z
tags: actions
editor: markdown
dateCreated: 2022-01-21T06:07:28.374Z
---

# Action Triggers

## Slash Command

> It may take a couple minutes for changes to application command actions to show in Discord. Changing the trigger involves syncing those changes with Discord, which can take time. {.is-warning}

The Slash Command trigger can be used to make your own custom commands. The action will trigger when someone runs `/<trigger value>`, for example the default trigger will register a `/my_command` command that you can run to invoke your action.

You can also configure options that the slash command can have, which will be passed to your action through the `{option}` tag. If you have an option named `target_user` that is a "User" option type, you can do `{option;target_user}` to get the target users ID, which can then be used in other tags, for example `{user.username;{option;target_user}}` to get the target users username.

## Context Menu

> It may take a couple minutes for changes to application command actions to show in Discord. Changing the trigger involves syncing those changes with Discord, which can take time. {.is-warning}

The Context Menu trigger can be used to invoke an action when someone right clicks a message or user and selects the trigger name under `Apps` in the context menu.

 <img src="https://i.imgur.com/2atG7Qb.png" alt="Example showing a Context Menu action in Discord" loading="lazy" />

- For user context menus, the target user ID can be accessed through `{target}`, for example `{user.username;{target}}`
- For message context menus, `{message}` will correspond to the message the action was used on and `{target}` will be the ID of the message.

## Keyword

The keyword trigger can be used to trigger actions when messages contain a given phrase or match a RegEx pattern. Wildcards are supported. `hello*world` will be expanded to match `*hello*world*`, to avoid this you can use regex with `^` and `$`, such as `/^hello.*world$/` which will match messages matching "hello\*world" exactly, and not something like `hello world :)`.

Some examples of valid patterns are

- `world` will match message containing "world", such as "something here word", "bigworld", etc
- `hello*world` will match messages such as "Hello World!", "Hello There World", "Something Hello World"
- `/hello.world/i` is a regex pattern which will match messages such as "Hello World!", "Hello There World" but or even "unrelaetd helloxworld"
- `/^Hello World$/` is a regex pattern which will match messages exactly matching "Hello World" and nothing else. `^` and `$` are used to ensure the match starts at the beginning of the message and ends at the ending.

## Interval

The interval trigger can be used to invoke an action on a schedule. The schedule can follow multiple formats, including [cron](https://en.wikipedia.org/wiki/Cron)-like expressions and regular text input, such as `every minute` or `every hour on monday between 6am and 6pm`. If the input is invalid and cannot be parsed, you will be unable to save the action. All schedules are calculated in UTC.

Runs must be at minimum a minimum apart. If an action is scheduled to run every second, it will only be invoked every minute at most. Additionally, if an action is set to run every minute of 2022, once the year is over the action will be disabled and you will have to configure a new schedule.

An action set to run every hour will be scheduled to run on the hour every hour. There is no guarantee the action will run at the exact time its scheduled, as priority may be given to actions that run less frequently, or there may be a lot of actions to run at that specific moment which will delay others. Actions set to run at midnight every day will be competing with thousands of others to run, so they may be delayed a couple seconds or minutes. You can configure this by setting a grace period. If the action does not run within the grace period of the target time, that run will be scrapped and the action will be rescheduled to run at the next scheduled date. For example, an action set to run every day at 5pm with a grace period of 30 minutes will not run if the bot is down from 5pm to 5:30pm.

Actions with this trigger will run with the user who last updated the action in context, which will also mean the action inherits that users permissions in the server.

The format for cron expressions is as follows

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

- `0 0/5 14 * * ?` is a cron expression that fires every 5 minutes starting at 2pm and ending at 2:55pm, every day.
- `at 10:15am`
- `every 5 minutes`
- `at 10:15 am also at 5:15pm except on Tuesday`
- `every 20 mins starting on the 7th min` fires on the 7th, 27th, and 47th minute every hour
- `after 12th hour` fires every hour after noon every day
- `at 5:00 pm on Weds,Thurs and Fri` fires at 5:00pm on Wednesday, Thursday, and Friday
- `at 5:00 pm every 1 day of March in 2014` fires at 5:00pm every day of March in 2014

## Webhook Receive

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
