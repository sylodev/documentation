# Role Add/Remove

> This trigger relies on caching which may cause some events to be missed. Avoid using this trigger for crucial work.

## Guild Member Role Add

Fires when a member gets a new role. You can configure a specific role to listen for, otherwise any role being added will fire the action.

#### Parameters

- `{channel}`: The specified context channel.
- `{role}`: The role that was added.
- `{user}`: The user who received the role.

## Guild Member Role Remove

Fires when a role is removed from a member. You can configure a specific role to listen for, otherwise any role being removed will fire the action.

#### Parameters

- `{channel}`: The specified context channel.
- `{role}`: The role that was removed.
- `{user}`: The user who lost the role.