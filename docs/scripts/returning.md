# Returning

`{return}` can be used to return early. For advanced actions, you should likely always use `{return}` as it filters out useless and unwanted data.

```json
{channel.send;test} // This will still be sent
Hello world! // This will be discarded because we're using {return}
{return;Goodbye world!} // This will be the only returned value
```

`{return}` can also be used in functions to return values. You can learn more about `{return}` with functions in the [functions](./functions.md) documentation.

## Returning Early

`{return}` shines when used to return early.

```json
[#if;{option;help}]
    // Handle help information
    {return;Hello! It seems you're asking for help.}
[/if]

// Handle the user not asking for help
// This will never run if "help" is set.
{return;Hello! This is the default message.}
```
