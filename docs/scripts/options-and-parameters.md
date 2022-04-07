# Options & Parameters

Tag parameters are how you get tags to do what you want. For example, `{channel.id;off-topic}` will get the `channel.id` tag to return the ID of the `off-topic` channel. In that example, `off-topic` is the tag parameter, and it will be given to `channel.id` so it knows what you want.

Every parameter has a name that you can use as an option name, however not all are documented. `{channel.id;channel}` is the same as `{channel.id channel=value}` and knowing which to use is important and will make your code a lot easier to understand by others or even your future self.

Named options such as `{example option=value}` are useful for tags with lots of parameters or setting a specific value with a lot of other parameters before it. For example, `{responder.embed;;Hello!}` is the exact same as `{responder.embed description="Hello!"}`, but it is significantly easier to understand what the latter is doing. In general the documentation will give you the "recommended" way to pass them, such as `{channel.delete reason?;channel?}`.

`{responder.button handler url?;text}` is an example of how the documentation formats tag names. In that example, there is a required `handler` option, then an optional `url` option, and finally a required `text` option.

## Shortcuts

`{responder.embedField inline name="example" value="something interesting"}`

In this example, the `inline` option will automatically be set to `true` because it has no value.
