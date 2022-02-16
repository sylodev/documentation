---
title: {responder} tags
description: 
published: 1
date: 2022-02-16T05:09:37.565Z
tags: 
editor: markdown
dateCreated: 2022-02-16T05:09:37.565Z
---

# `{responder}` tags

`{responder}` tags let you construct a message that will be sent once the action is over, or you manually send it. These tags are meant to be chained together to form a complete responder.

```
{responder.text;Hello!}
{responder.embed title="World"}
{responder.send}
```

## `{responder.text;message}`

Appends text to the output message. If there is more text, it will be appended to the existing text.

`{responder.text;Hello World}` will make the output message "Hello World"
`{responder.text;Hello}{responder.text;World}` will make the output message "Hello World"
`{responder.text;Hello}{responder.text;}` empty text will clear existing text.

## `{responder.dm fallback=false;member}` 

Set the responder to dm a user. This tag can be hit and miss if the user has their direct-messages closed.

`{responder.dm;{user.id}}` will make the message direct-message the user in context.
`{responder.dm fallback=true;{user.id}}` will send a message to the user and will fall back to the context channel if the user has their direct-mesage closed.


## `{responder.embed}`

This tag is used to add embeds to the message. Calling it multiple times will add multiple embeds to the message, up to a maximum of 10.

`{responder.embed title="Hello world"}`
`{responder.embed title=Test timestamp="5 hours ago"}`

## `{responder.channel;channel}`

Set the channel the message will be sent to. THe channel must support sending messages.

## `{responder.reset}`

Reset any options already applied to the responder.

```
{responder.text;Hello}
{responder.reset}
{responder.text;Something bad happened!}
```
This would output "Something bad happened!"

## 