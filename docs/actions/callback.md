## Component Callback

This trigger fires when a component is clicked that was created with the same `handler` as the value of the component callback. [Click here to download an action that creates a button that calls this action type](https://cdn.atlas.bot/resources/Button_Callback_Demo.actionpack).

- `{$state}` is the value of the `state` option you set when creating the button.
- `{$value}` is the value of the select menu that was clicked, if any. If multiple options are allowed, this is the first one.
- `{$values}` is the values of all select menu items that were clicked, if multiple options are allowed.
- `{$component}` will be the object containing information about the component that was clicked.
- `{$customId}` is the complete custom ID of the component that was clicked.

```json
{responder.button label="Click Me" handler="create_button_callback"}
```

<img src="https://i.imgur.com/3RphhVv.png" />

```json
Hello {user.mention}!
```

<img src="https://i.imgur.com/gwR5QMP.png" />

When you run `/create_button`, it will reply with a message with a button attached. That button includes a `handler` property that points to the component callback action you created. When that button is clicked, it calls the component callback action and passes it any payload you might have set when you created the button.
