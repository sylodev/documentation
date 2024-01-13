# Channel

## `{channel.mention;channel}`

Returns a string with a channel mention.

## `{channel.id;channel}`

Returns the ID of a channel.

## `{channel.type;channel}`

Returns an integer for the [channel type](https://discord.com/developers/docs/resources/channel#channel-object-channel-types).

## `{channel.createdAt;channel}`

Returns a [timestamp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#description) for the creation date of a channel that can be used with [{time}](https://documentation.atlas.bot/en/scripts/tags/global#time-formattime).

## `{channel.nsfw;channel}`

Checks if a channel is marked as NSFW.

## `{channel.name;channel}`

Returns the name of a channel.

## `{channel.lastMessageId;channel}`

Returns the ID of the last message sent in a channel.

## `{channel.topic;channel}`

Returns a channel topic, also known as channel description.

## `{channel.parentId}`

Get the parent ID of the channel. For regular channels this is the category ID. For threads this is the ID of the parent channel.

```json
{channel.parentId} // "", a channel with no parent
{channel.parentId} // "532902705404837888", a regular channel with a parent
{channel.parentId} // "532902728834351115", a thread channel with a parent
```

## `{channel.isThread}`

Returns true if the channel is a thread.

## `{channel.isVoice}`

Returns true if the channel is a voice channel.

## `{channel.isTextable}`

Returns true if the channel can accept messages.

## `{channel.edit name? topic? nsfw? archived? ratelimit? parent?;channel}`

> This tag is part of the `Mutate Channel` expensive group.

Updates a channel.

#### Arguments

- `name`: The new name of the channel.
- `topic`: The new topic of the channel.
- `nsfw`: Whether the channel is NSFW or not.
- `archived`: Whether this channel is archived; channel must be a thread.
- `ratelimit`: How often users can send messages in this channel, for example `1m`.
- `parent`: The category to move the channel to.

## `{channel.startThread auto_archive_duration? ratelimit? invitable? is_private? return_id? channel?;name;message?}`

> This tag is part of the `Mutate Channel` expensive group.

Creates a new thread.

- `name` the name of the thread.
- `message` the message the thread is created from.
- `auto_archive_duration` the time until threads are archived after inactivity. Can be `one_hour`, `one_day`, `three_days` or `one_week`.
- `ratelimit` how often users can send messages in the thread, for example `1m`.
- `invitable` whether non-moderators can add other non-moderators to the thread; only available on private threads.
- `is_private` whether the read is private, must not have a message to be private.
- `return_id` whether to return the ID of the created thread.
- `channel` the channel to create the thread on.

## `{channel.create name type topic nsfw parent return_id;channel}`

> This tag is part of the `Mutate Channel` expensive group.

Creates a new channel.

#### Arguments

- `name`: The name of the channel.
- `type`: The [type](https://discord.com/developers/docs/resources/channel#channel-object-channel-types) of the channel. `guildtext`, `guild_text`, `GUILD_TEXT`, and `GuildText` are all valid and will all resolve to a guild text channel. IDs are also supported but the name is preferred.
- `topic`: The topic of the channel.
- `nsfw`: Whether the channel is NSFW or not.
- `parent`: The parent channel, if any.
- `return_id`: Whether to return the created channels ID or not.

## `{channel.delete;channel}`

> This tag is part of the `Mutate Channel` expensive group.
> This tag is marked `Dangerous` and must be enabled in Advanced Settings.

Deletes a channel.

## `{channel.position;channel}`

Get the position of a channel.

## `{channel.purge;channel}`

> This tag is part of the `Mutate Message` expensive group.
> This tag is marked `Dangerous` and must be enabled in Advanced Settings.

Purge messages from a channel with various parameters.

#### Arguments
- `limit?` default: 100: The number of messages to purge, applied before filtering.
- `channel?`: The channel to purge messages in.
- `includePinned?` default: false: Whether to include pinned messages.
- `newerThan?`: Messages that are newer than this time will be purged. Accepts a time value.
- `olderThan?`: Messages that are older than this time will be purged. Accepts a time value.
- `beforeMessage?`: Purge messages sent before this message.
- `afterMessage?`: Purge messages sent after this message.
- `including?`: Purge messages including this message. Can be a regex pattern.
- `excluding?`: Purge messages excluding this message. Can be a regex pattern.
- `author?`: Purge messages that were sent by this user.
- `notAuthor?`: Purge messages that were not sent by this user.
- `hasImage?`: Purge messages that do or do not contain an image.
- `hasLink?`: Purge messages that do or do not contain a link.
- `hasInvite?`: Purge messages that do or do not contain a server invite.
- `hasAttachment?`: Purge messages that do or do not have an attachment.
- `reason?`: The reason for deleting the channel.

- `return_bool?` default: false: Whether to return true if messages were purged.
