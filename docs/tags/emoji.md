## `{emoji.id;emoji}`

The ID of the emoji. For guild emojis, this is the emoji snowflake. For native emojis this is the native emoji character.

## `{emoji.markdown;emoji}`

Get the emoji formatted for a Discord message. This will return the custom guild emoji format for guild emojis and the native emoji character for native emojis.

## `{emoji.name;emoji}`

The name of the emoji.

## `{emoji.url;emoji}`

The URL to the emoji. For guild emojis, this is the .gif or .png link. For native emojis, this is a .png link to the twemoji image.

## `{emoji.animated;emoji}`

Whether the emoji is animated. False for native emojis.

## `{emoji.category;emoji}`

Get the category of an emoji. For native emojis this matches the lowercase name of categories from the emoji picker in Discord, for example `people` or `objects`. For guild emojis this will be `guild`.

## `{emoji.aliases;emoji}`

Get the aliases for an emoji. Native emojis only.
