---
title: {responder} tags
description: 
published: 1
date: 2022-02-24T01:38:00.000Z
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

Sets the text of the output message. If output text already exists, the string is appended to it.

`{responder.text;Hello World}` will make the output message "Hello World"
`{responder.text;Hello}{responder.text;World}` will make the output message "Hello World"
`{responder.text;Hello}{responder.text;}` empty text will clear existing text.

## `{responder.dm fallback=false;member}` 

Set the responder to dm a user. This tag can be hit and miss if the user has their direct-messages closed.

`{responder.dm;{user.id}}` will send the output in DM to the user in context.
`{responder.dm fallback=true;{user.id}}` will try to send the output in DM to the user and will send it in the context channel if that fails.


## `{responder.embed}`

Adds an embed to the message. Calling it multiple times will add multiple embeds to the message, up to a maximum of 10.

`{responder.embed title="Hello world"}`
`{responder.embed title=Test timestamp="5 hours ago"}`

## `{responder.embedField;name;value;inline}`

Adds a field to the last created embed.

```
{responder.embed title="My Embed" description="Fortnite or something idk"}
{responder.embedField name="My Field" value="very cool" inline=true}
{responder.embedField name="Another One" value="even cooler" inline=true}
```

## `{responder.channel;channel}`

Sets the channel the message will be sent to.

## `{responder.reset}`

Resets any options already applied to the responder.

```
{responder.text;Hello}
{responder.reset}
{responder.text;Something bad happened!}
```
This would output "Something bad happened!"

## `{responder.ephemeral}`

Marks the message as ephemeral. Only works with interactions. 

## `{responder.error;message}`

This is the same as `{responder.text}`, with some extras:

- Embed color will be set to red
- The message will be set to ephemeral

You should use this when sending error messages.

## `{responder.send return_id=false}`

Sends the message immediately. This will automatically call `{responder.reset}` if the message is sent successfully. `return_id` is an optional boolean that controls whether it should return the output message ID. Calling this is optional, once execution is over and there is a configured responder it will be sent automatically.

## `{responder.button text handler payload link emoji dstyle}`

Adds a button to the message. 

#### Arguments
- `text`: The button text.
- `handler`: The value of the component callback action to call when the button is clicked
- `payload`: An optional payload that will be accessible in the component callback action
- `link`: Used to link to external resources
- `emoji`: The name of an emoji to add to the button. Can be a guild emoji or a native emoji.
- `style`: Can change the [button style](https://discord.com/developers/docs/interactions/message-components#button-object-button-styles), which defaults to `Primary`. This will be ignored if `link` is present.
