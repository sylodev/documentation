Actions are pretty awesome. They allow you to run events on a timed loop, create a custom command, or setup keyword triggers relatively easily. Each action has a trigger. Triggers can be things like adding a certain emoji to a message or running a command. Heres a list of trigger types and what they do.

## Trigger Types

### Command

Triggers when someone has a message with a prefix and label matching the server's prefix and action content. For example `a!command`.

### Keyword

Triggers when a message is created containing the contents of the keyword.

### Interval

Triggers at a configurable time interval. Whoever last updated the action will be the user in context. All command tags and their commands will run on behalf of this user.

### Message Reaction Add

Triggers when a user reacts to a message.

### Message Reaction Remove

Triggers when a user removes a reaction to a message.

### Message Create

Triggers when a message is created. Only can be triggered once every 10 seconds.

### Member Join

Triggers when a member joins your server.

### Member Leave

Triggers when a member leaves your server.

### Member Role Add

Triggers when a member is given a role in your server.

### Member Role Remove

Triggers when a member has a role taken away in your server.

## Restrictions

Most triggers support role and channel restrictions. These allow you to prevent users with a role or in a channel from using your action or whitelist your action so only a group or channel can use your action.

## Sub-Actions

Sub-actions are what the action does when it's triggered. The content of each sub-action will be evaluated and supports the full suite of tags. Up to 3 sub-actions are supported per action.
