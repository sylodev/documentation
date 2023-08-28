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

> This tag is part of the `Create DM` expensive group.

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
`image`
`thumbnail`
`timestamp`
`title`
`url`

Use the [Embed Builder](https://staging.atlas.bot/tools/embed-builder) to quickly build an embed.

<details>
  <summary>Color Defaults</summary>
  <p><code>Black: #000000
Dark Mode: #36393f
White: #FFFFFF
Red: #ED4245
Pink: #EB459E
Fuchsia: #EB459E
Purple: #9C27B0
Blurple: #5865F2
Blurple Classic: #7289DA
Deep Purple: #673AB7
Indigo: #3F51B5
Blue: #2196F3
Light Blue: #03A9F4
Cyan: #00BCD4
Teal: #009688
Green: #57F287
Light Green: #8BC34A
Lime: #CDDC39
Yellow: #FEE75C
Amber: #FFC107
Orange: #FF9800
Deep Orange: #FF5722
Brown: #795548
Grey: #9E9E9E
Blue Grey: #607D8B
Role Default: #4f545c
Magenta: #E91E63</code></p>
</details>


## `{responder.embedField;name;value;inline}`

Add a field to the last created embed.

```
{responder.embed title="My Embed" description="Fortnite or something idk"}
{responder.embedField name="My Field" value="very cool" inline=true}
{responder.embedField name="Another One" value="even cooler" inline=true}
```

## `{responder.channel;channel}`

Set the channel the message will be sent to. Setting a channel with a context interaction will have the responder ignore that interaction when sending a message. **The context interaction must still be replied to or it will be marked as failed**.

```json
// Do some weird logging stuff to a separate channel that the user will never see
{responder.channel;MY_LOG_CHANNEL}
{responder.text;{user.mention} ran our command!}
{responder.send} // Send the log message to the log channel

// Now we reply to the slash command (context interaction). This is required,
// not replying will have Discord mark the interaction as failed. Depending on a few factors,
// if we don't reply Atlas will automatically send a "The action did not output anything" message
// to stop it being marked as failed.
{responder.text;Hi {user.mention}! This is a reply to the context interaction that is required for it not to fail}
// No need for {responder.send} as it is automatically once the script finishes executing if its configured
```

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

## `{responder.send return_id=false ignore_interaction=false}`

> This tag is part of the `Create Message` expensive group.

Send the message immediately. This will automatically call `{responder.reset}` if the message is sent successfully.

`return_id` can be used to get the output message ID. **return_id does not work when replying to an interaction**. Discord does not give us message data when we send an interaction, however because the responder will assume you mean the context interaction, leaving out the ID should do effectively the same thing.

`ignore_interaction` can be set to have the responder ignore the context interaction and reply with a regular message in the context channel. **The interaction still needs a reply or it will be marked as failed**, you should only use this to send off a separate message.

If the responder is configured when the script finishes, it will be sent automatically. This means you probably don't need `{responder.send}` unless you're sending multiple messages.

## `{responder.edit;message}`

Set the responder to edit the given message. Atlas must have sent the message to edit it.
Place after the new message content.

## `{responder.button label handler? stateless? state? url? emoji? style=primary actionRowIndex? disabled=false}`

Add a button to the message.

#### Arguments

- `label` is the button text.
- `handler` is the value of the component callback action to call when the button is clicked
- `state` is an optional payload that will be accessible in the component callback action
- `url` can be used to link to external resources
- `emoji` is the name of an emoji to add to the button. Can be a guild emoji or a native emoji.
- `stateless` Whether this button should be forced to be a stateless interaction. Required if you don't want the button to expire.
- `style` can change the [button style](https://discord.com/developers/docs/interactions/message-components#button-object-button-styles), which defaults to `Primary`. This will be ignored if `url` is present.
- `disabled` can be set to `true` to disable the button.
- `actionRowIndex` can be used to set the row the button is in. This is useful if you want to have multiple buttons in a row.

If you want a button to only have an emoji, here is a fun hack. Copy this empty space and paste it into the button label.

```
‎
```

## `{responder.select handler stateless=false state? disabled=false placeholder? minValues? maxValues? actionRowIndex? type=StringSelect;options}`

Create a new select menu with the given options.

#### Arguments

- `handler` is the value of the component callback action to call when the menu is interacted with
- `state` is an optional payload that will be accessible in the component callback action
- `stateless` Whether this menu should be forced to be a stateless interaction. Required if you don't want the menu to expire.
- `disabled` can be set to `true` to disable the menu.
- `placeholder` is the text to show when no option is selected
- `minValues` is the minimum number of options that must be selected
- `maxValues` is the maximum number of options that can be selected
- `type` can be `StringSelect`, `UserSelect`, `RoleSelect`, `MentionableSelect`, or `ChannelSelect`.
- `actionRowIndex` can be used to set the row the menu is in. This is useful if you want to have multiple menus on a message.

`options` is an array of [select options](https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-option-structure), and is required for `StringSelect` menus.

```
{=options;{{
  "value": [
      {
          "label": "Option One",
          "value": "1"
      },
      {
          "label": "Option Two",
          "value": "2"
      }
  ]
}}}

{responder.select handler=my_callback placeholder="Select an option";{$options.value}}
```

## `{responder.reference;message?}`

Set the responder to reference the given message. Call with no params, `{responder.reference}`, to stop the bot replying to the context message.
