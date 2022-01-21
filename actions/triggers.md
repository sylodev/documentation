---
title: Action Triggers
description: Information on action triggers and how they work
published: 1
date: 2022-01-21T06:09:26.589Z
tags: actions
editor: markdown
dateCreated: 2022-01-21T06:07:28.374Z
---

# Action Triggers

## Interval

The interval trigger can be used to invoke an action on a schedule. The schedule can follow multiple formats, including [cron](https://en.wikipedia.org/wiki/Cron)-like expressions and regular text input, such as `every minute` or `every hour on monday between 6am and 6pm`. If the input is invalid and cannot be parsed, you will be unable to save the action.

An action set to run every hour will run on the hour. 

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