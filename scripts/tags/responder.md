---
title: {responder} tags
description: 
published: 1
date: 2022-02-24T23:00:00.000Z
tags: 
editor: markdown
dateCreated: 2022-02-16T05:09:37.565Z
---

# `{responder}` tags

`{responder}` tags let you construct a message that will be sent either once the action is over, or when you manually send it. These tags are meant to be chained together to form a complete response.

```
{responder.text;Hello!}
{responder.embed title="World"}
{responder.send}
```

## `{responder.text;message}`

Sets the text of the output message. If output text already exists, the string is appended to it.

```
{responder.text;Hello World}                  // Output message is be "Hello World"
{responder.text;Hello}{responder.text;World}  // Output message is be "Hello World"
{responder.text;Hello}{responder.text;}       // There is be no output message because empty text clears existing text.

Note: These commands are not in succession. Assume they were all the first occurence of responder tags.
```

## `{responder.dm fallback=false;member}` 

Sets the responder output location to an user's DM. This tag can be hit and miss if the user has their DMs closed.

```
{responder.dm;{user.id}}                // Will send the output in DM to the user in context.
{responder.dm fallback=true;{user.id}}  // Will try to send the output in DM to the user and will send it in the context channel if that fails.
```

## `{responder.embed}`

Adds an embed to the output message. Calling it multiple times will add multiple embeds to the message, up to a maximum of 10. Only one argument is required in most cases, but you can add multiple.

#### Arguments
- `color`: The color of the embed.
- `description`: The main text in the embed.
- `footer`: The small text at the bottom of the embed.
- `footer_icon`: The URL for the image of the footer.
- `icon`: The URL for the icon next to the embed title. Cannot be used alone.
- `image`: The URL for the big image at the bottom of the embed.
- `name`: The name of the author. This or `title` are required for `icon` to work.
- `thumbnail`: The URL for the large image on the right of the embed.
- `timestamp`: The timestamp at the bottom of the embed.
- `title`: The title of the embed.
- `url`: The URL for the title. Adding this will make the title blue.

```
{responder.embed title="Hello world"}
{responder.embed title=Test timestamp="5 hours ago"}
```

## `{responder.embedField;name;value;inline}`

Adds a field to the last created embed.

#### Arguments
- `name`: The name of the field.
- `value`: The text in the field.
- `inline`: Whether the field is inline or not, defaults to false.

```
{responder.embed title="Example" description="This documentation is epic"}
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
{responder.text;Something bad happened!}  // Would output "Something bad hapened!"
```

## `{responder.ephemeral}`

Marks the message as ephemeral. Only works with interactions. 

## `{responder.error;message}`

This is the same as `{responder.text}`, with some extras:

- Embed color will be set to red
- The message will be set to ephemeral

You should use this when sending error messages.

## `{responder.send return_id=false}`

Sends the message immediately. This will automatically call `{responder.reset}` if the message is sent successfully. `return_id` is an optional boolean that controls whether it should return the output message ID. Calling this is optional, once execution is over and there is a configured responder it will be sent automatically.

## `{responder.button label handler state url emoji style}`

Adds a button to the message. 

#### Arguments
- `label`: The button text.
- `handler`: The value of the component callback action to call when the button is clicked
- `state`: An optional payload that will be accessible in the component callback action
- `url`: Used to link to external resources
- `emoji`: The name of an emoji to add to the button. Can be a guild emoji or a native emoji.
- `style`: Can change the [button style](https://discord.com/developers/docs/interactions/message-components#button-object-button-styles), which defaults to `Primary`. This will be ignored if `url` is present.
