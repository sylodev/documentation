# Server

This was previously named `{guild}`. All `{server}` tags have a `{guild}` alias for backwards compatibility. `{server.id}` is the same as `{guild.id}`.

## `{server.id}`

Returns the ID of the server.

## `{server.name}`

Returns the name of the server.

## `{server.icon;size;hash}`

Gets the icon of the server.

#### Arguments

- `size`: The size of the image to get. Must be a valid [CDN size](https://discord.com/developers/docs/reference#image-formatting).
- `hash`: Whether to return the hash directly instead of a URL.

## `{server.splash;size;hash}`

Gets the splash image of the server.

#### Arguments

- `size`: The size of the splash to get. Must be a valid [CDN size](https://discord.com/developers/docs/reference#image-formatting).
- `hash`: Whether to return the hash directly instead of a URL.

## `{server.banner;size;splash}`

Gets the banner of the server.

#### Arguments

- `size`: The size of the banner to get. Must be a valid [CDN size](https://discord.com/developers/docs/reference#image-formatting).
- `hash`: Whether to return the hash directly instead of a URL.

## `{server.channels}`

Returns an array of IDs for all channels in the server.

## `{server.roles}`

Returns an array of IDs for all roles in the server.

## `{server.shardId}`

Returns the ID of the shard the bot is running on in the server.

## `{server.ownerId}`

Returns the ID of the server owner.

## `{server.memberCount}`

Returns the total count of members in the server. This should be almost exactly accurate and is not subject to caching issues.

## `{server.createdAt}`

Returns a [timestamp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#description) for the creation date of a server that can be used with [{time}](https://documentation.atlas.bot/en/scripts/tags/global#time-formattime).

## `{server.prefix}`

Gets the legacy prefix of the server. This tag is only available for compatibility reasons and is not recommended in new actions. This tag is deprecated and may be removed in a future release.
