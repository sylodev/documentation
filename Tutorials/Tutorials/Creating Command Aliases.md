Sometimes commands can be a little long and confusing, so to make it easier for your members to - for example - open a new ticket, we'll be creating command aliases using Atlas' actions module. 

## Getting Started

For this tutorial we'll be creating a custom alias for the [a!ticket new](https://atlasbot.xyz/documentation/commands/ticket_new) command using what you've learned from the [Basic Action Tutorial](https://atlasbot.xyz/documentation/tutorials/Actions/Basic_Action).

To get started, we need to think of a simple command name we're going to use for the alias. Since we're making an alias for `a!ticket new`, we're going to set our **Trigger Content** to `tnew` and use the `Command` **Trigger Type**. To execute commands in an action, the command has to be wrapped in curly brackets, so if we wanted to use `a!say Hello there!` in an action, it would look like this: `{a!say;Hello there!}`.

Since `a!ticket new` has the option to provide a description for a ticket, we're going to have to use the [{args}](https://atlasbot.xyz/documentation/tags/args) tag.

## Code
```
{a!ticket;new;{args}}
```

## Usage

```a!tnew <reason>```

## Breakdown

Like we learned earlier, for a command to be executed in an action, it would have to be wrapped in curly brackets, like so: `{a!ticket}`. In actions, we replace spaces with semi-colons so, `a!ticket new` would look like this in an action: `{a!ticket;new}`.

___

##### Note:
Normal users can only create a maximum of 25 actions. Use them sparingly!
