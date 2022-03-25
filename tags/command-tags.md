---
title: Command Tags
description: 
published: 1
date: 2022-02-25T18:31:03.802Z
tags: 
editor: markdown
dateCreated: 2022-02-25T18:31:03.802Z
---

# Command Tags

> There are future plans to deprecate command tags and instead have each command register its own tag. {.is-warning}

Command tags let you harness the power of built-in commands through tags. Every command as a corresponding command tag.

## How it works

`{/say;My Message;off-topic}`

This will run the `/say` command with the `message` option set to `My Message` and the `channel` option set to `off-topic`. The order of parameters is the same as they show up when typing `/say`.  Because all parameters are also named options, another way to do the same as above would be

`{/say message="My Message" channel=off-topic}`

## Voiding output

If you want to wrap commands, sometimes its useful for them to not return an output. You can pass the `silent` option to the command for it to skip configuring the responder in context.

`{/say silent;message;channel}` will prevent the confirmation message from being sent. 