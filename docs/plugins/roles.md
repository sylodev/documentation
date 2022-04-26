# Roles

The roles plugin provides utilities for managing roles in your server.

## Join Roles

> Join roles will break membership screening because members that are given a role immediately pass screening regardless of that roles permissions. This is not an issue we can fix without Discord changing their API.
>
> Because of this, you should think of an alternate method for join roles like requiring new users to click a button with reaction roles to agree to the rules and get a role that opens up the rest of the server.

Join roles are roles given to people when they join. You can select up to two that will be given to new members when they join.

## Reaction Roles

Reaction roles are roles given to people when they react to a message with a set reaction, click a button or select a role from a dropdown.

### Reaction Groups

Atlas groups reaction roles into reaction groups. A single reaction group corresponds to one or more messages in Discord. For managed reaction groups, they always correspond to a single message in Discord. The group content is the message content, which is disabled for unmanaged groups. Tags are supported in the reaction groups content.

### Managed Reaction Groups

> Managed reaction groups are synced in the background. Changes to the content or list of roles may take up to a minute to be reflected in Discord. Removing a role will stop it being handed out immediately.

Managed reaction groups are automatically created by the bot and are updated when you update the reaction group.

### Unmanaged Reaction Groups

> Unmanaged reaction groups are only recommended if you are moving from another bot or have special needs. It is strongly recommended to let Atlas manage the message as it simplifies the process and means other administrators can easily update the message.

Unmanaged reaction groups are created by you. You must enter a message ID and select the channel the message is in, and Atlas will manage reactions on the message and give people roles when they react to the message.

Because Atlas cannot update unmanaged reaction groups, the content for a group is ignored. This also restricts the group to using only emoji reactions, other group types like buttons or select menus require the bot to update the message.

### Conditional Scripts

The conditional script part of each role is a small script that will determine whether the user reacting will be given that role. This script can return `true`, `false` or a message. If a message is returned, it is shown to the user.

For example, a script such as `{if;{user.roles};includes;BOOST_ROLE_ID;true;You need to be boosting the server to do that!}` would only allow people with the boost role to get that role. If the user does not have the role, it tells them `You need to be boosting the server to do that!`.

Expensive tags are disabled in conditional scripts, tags like `{user.addRole}` and `{fetch}` will throw an error.

### Role Labels

Labels can be configured per role and will be used in place of the role name for buttons or select menu groups. Without a label, the role name will be used.
