# Context Menu

> It may take a couple minutes for changes to this trigger to show in Discord. Changing the trigger involves syncing those changes with Discord, which can take time. {.is-info}

#### Parameters

- `{channel}`: The channel where the command was invoked.
- `{user}`: The user who invoked the command.
- `{$targetType}`: The [type of target](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-types).

#### Parameters for Message Context Menus

- `{message}`: The message the action was used on.
- `{$targetId}`: The ID of the message.

#### Parameters for User Context Menus

- `{$targetId}`: The ID of the user the action was used on.

Fires when someone right clicks a message or user and selects the trigger name under `Apps` in the context menu.

 <img src="https://i.imgur.com/2atG7Qb.png" alt="Example showing a Context Menu action in Discord" loading="lazy" />

To get, for example, the name of the target user with the User Context Menu, do `{user.username;{$targetId}}`.