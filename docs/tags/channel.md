# `{channel}` tags

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

## `{channel.edit;channel}`

Updates a channel.

#### Arguments

- `name`: The new name of the channel.
- `topic`: The new topic of the channel.
- `nsfw`: Whether the channel is NSFW or not.

## `{channel.create name type topic nsfw parent return_id;channel}`

Creates a new channel.

#### Arguments

- `name`: The name of the channel.
- `type`: The [type](https://discord.com/developers/docs/resources/channel#channel-object-channel-types) of the channel. `guildtext`, `guild_text`, `GUILD_TEXT`, and `GuildText` are all valid and will all resolve to a guild text channel. IDs are also supported but the name is preferred.
- `topic`: The topic of the channel.
- `nsfw`: Whether the channel is NSFW or not.
- `parent`: The parent channel, if any.
- `return_id`: Whether to return the created channels ID or not.

## `{channel.delete;channel}`

> This tag can do serious damage if you are not extremely careful with validating inputs. {.is-warning}

Deletes a channel.
