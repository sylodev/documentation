# Ticket

## `{ticket.author;channel}`

Gets the ID of the ticket's author, if one is in context.

## `{ticket.channel}`

Gets the ID of the ticket's channel, if one is in context.

## `{ticket.close;channel}`

> This tag is part of the `Mutate Channel` expensive group.

Close the ticket channel.

## `{ticket.create}`

> This tag is part of the `Mutate Channel` expensive group.

Open the ticket channel.

#### Arguments
`reason`: Set the reason for the ticket.
`user`: Set the ticket author.
`prefix`: Set the ticket prefix.

## `{ticket.prefix;channel;prefix}`

> This tag is part of the `Mutate Channel` expensive group.

Add a prefix to the beinging of the ticket channel's name. Leave `prefix` blank to return the current prefix.

## `{ticket.reason}`

Gets the reason of the ticket, if one is in context.
