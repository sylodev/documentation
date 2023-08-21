# Slash Command

> It may take a couple minutes for changes to this trigger to show in Discord. Changing the trigger involves syncing those changes with Discord, which can take time. {.is-info}

#### Parameters

- `{user}`: The user who invoked the command.
- `{channel}`: The channel where the command was invoked.
- `{option}`: The arguments that were passed to the command by the user.

Fires when someone runs the slash command `/<trigger value>`. It can be used to make your own custom commands, for example the default trigger will register a `/my_command` command that you can run to invoke your action.

You can also configure options that the slash command can have, which will be passed to your action through the `{option}` tag. If you have an option named `target_user` that is a "User" option type, you can do `{option;target_user}` to get the target user's ID, which can then be used in other tags, for example `{user.username;{option;target_user}}` to get the target user's username.