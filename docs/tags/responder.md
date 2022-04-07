# Responder

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

Embed Elements
`author-image`
`author-name`
`author-url`
`color`
`description`
`footer`
`footer-icon`
`timestamp`
`title`
`url`

Use the [Embed Builder](https://staging.atlas.bot/tools/embed-builder) to quickly build an embed.

## `{responder.embedField;name;value;inline}`

Add a field to the last created embed.

```
{responder.embed title="My Embed" description="Fortnite or something idk"}
{responder.embedField name="My Field" value="very cool" inline=true}
{responder.embedField name="Another One" value="even cooler" inline=true}
```

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

## `{responder.ephemeral}`

Mark the message as ephemeral. Only works with interactions.

## `{responder.error;message}`

This is the same as `{responder.text}`, with some extras;

- Embeds will be set to red
- The message will be set to ephemeral

You should use this whenever sending error messages.

## `{responder.send return_id=false}`

Send the message immediately. This will automatically call `{responder.reset}` if the message is sent successfully. `return_id` can be used to get the output message ID. Calling this is optional, once execution is over and there is a configured responder it will be sent automatically.

## `{responder.button label handler state url emoji style}`

Add a button to the message.

`label` is the button text.
`handler` is the value of the component callback action to call when the button is clicked
`state` is an optional payload that will be accessible in the component callback action
`url` can be used to link to external resources
`emoji` is the name of an emoji to add to the button. Can be a guild emoji or a native emoji.
`style` can change the [button style](https://discord.com/developers/docs/interactions/message-components#button-object-button-styles), which defaults to `Primary`. This will be ignored if `url` is present.
