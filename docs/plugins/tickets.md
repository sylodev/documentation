---
render_with_liquid: false
---

Tickets

## Prefixes

Prefixes let you organise tickets. Setting a ticket prefix will append that prefix to the channel name so you can easily see which tickets are in which state at a glance.

`/ticket prefix:assigned` will set the ticket prefix to `assigned` and will update the tickets channel to `assigned-sylver-1058`.

## Archiving

You can configure an optional archive channel. When tickets are closed, instead of deleting the channel we will move the channel to the archive category. If your server is running low on channels, archived tickets will be automatically deleted to make room for newer tickets.
