# Limits

## General Limits

|                       | Default                | Prime Classic          | Prime                  | Prime Community        |
|------------------------------|------------------------|------------------------|------------------------|------------------------|
| Default Embed Colour         | false                  | true                   | true                   | true                   |
| Locale Overrides             | false                  | true                   | true                   | true                   |
| Custom Bots                  | false                  | false                  | true (1)               | true (2)               |
| Suggestions Plugin           | false                  | false                  | true                   | true                   |


## Action Limits

|                       | Default                | Prime Classic          | Prime                  | Prime Community        |
|------------------------------|------------------------|------------------------|------------------------|------------------------|
| Total Actions                | 25                     | 35                     | 100                    | 200                    |
| Auto-Lock Timeout            | 1 second               | 1 second               | 5 seconds              | 5 seconds              |
| Dynamic Cooldowns            | false                  | false                  | true                   | true                   |
| Disable Locking              | false                  | true                   | true                   | true                   |
| Keyword Triggers             | 2                      | 3                      | 15                     | 10                     |
| Keyword Cooldown             | 30 seconds             | 20 seconds             | 20 seconds             | 10 seconds             |
| Message Create Triggers      | 2                      | 3                      | 15                     | 10                     |
| Message Create Cooldown      | 60 seconds             | 30 seconds             | 20 seconds             | 20 seconds             |
| Reaction Add Triggers        | 5                      | 5                      | 10                     | 10                     |
| Reaction Remove Triggers     | 5                      | 5                      | 10                     | 10                     |
| Interval Triggers            | 2                      | 2                      | 10                     | 10                     |
| Webhook Cooldown             | 60 seconds             | 30 seconds             | 20 seconds             | 10 seconds             |

## Expensive Tag Invocations

|                       | Default                | Prime Classic          | Prime                  | Prime Community        |
|------------------------------|------------------------|------------------------|------------------------|------------------------|
| Total Expensive Tags         | 8                      | 8                      | 14                     | 14                     |
| Create Direct Messages       | 1                      | 1                      | 1                      | 1                      |
| Import                       | 4                      | 4                      | 6                      | 6                      |
| Mutate Message Reactions     | 3                      | 3                      | 5                      | 5                      |
| Mutate Channels              | 2                      | 2                      | 4                      | 4                      |
| Mutate Roles                 | 2                      | 2                      | 4                      | 4                      |
| Mutate Users                 | 3                      | 3                      | 4                      | 4                      |
| Mutate Messages              | 2                      | 2                      | 4                      | 4                      |
| Create Messages              | 4                      | 4                      | 5                      | 5                      |
| Stall Scripts                | 4                      | 4                      | 4                      | 4                      |
| Mutate Storage               | 8                      | 8                      | 20                     | 20                     |
| Call Commands                | 2                      | 2                      | 4                      | 4                      |

<details>
  <summary>Tag Groups</summary>
  <p><code>
    Mutate Users: <br />
        'user.addrole', 'user.removerole', 'user.edit' <br />
    Mutate Messages: <br />
        'message.delete', 'message.pin', 'message.unpin', 'message.publish' <br />
    Mutate Message Reactions: <br />
        'message.addreaction', 'message.removereaction', 'message.removereactions' <br />
    Mutate Channels: <br />
        'channel.edit', 'channel.create', 'channel.delete' <br />
    Mutate Roles: <br />
        'role.create', 'role.edit', 'role.delete' <br />
    Stall Scripts: <br />
        'fetch', 'sleep' <br />
    Import: <br />
        'import' <br />
    Mutate Storage: <br />
        'store.set', 'store.get', 'store.delete' <br />
    Create Messages: <br />
        'responder.send' <br />
    Create Direct Messages: <br />
        'responder.dm' <br />
    Misc Expensive: <br />
        'for', 'channel.startThread', 'channel.getPins', 'fetch', 'settings', 'user.setXP', 'user.setLevel',<br />'channel.purge', 'ticket.create', 'ticket.close', 'ticket.prefix' <br />
  </code></p>
</details>


## Storage Limits

|                       | Default                | Prime Classic          | Prime                  | Prime Community        |
|------------------------------|------------------------|------------------------|------------------------|------------------------|
| Storage Keys                 | 500                    | 500                    | 5000                   | 100000                 |
| Storage Size (KB)            | 5120                   | 5120                   | 10240                  | 10240                  |


## Poll Limits

|                       | Default                | Prime Classic          | Prime                  | Prime Community        |
|------------------------------|------------------------|------------------------|------------------------|------------------------|
| Active Polls                 | 3                      | 15                     | 15                     | 15                     |
| Poll Max Duration            | 7 days                 | 30 days                | 30 days                | 6 months               |


## Level Limits

|                       | Default                | Prime Classic          | Prime                  | Prime Community        |
|------------------------------|------------------------|------------------------|------------------------|------------------------|
| Level Rewards                | 10                     | 30                     | 30                     | 30                     |
| Custom Level Curve           | false                  | false                  | true                   | true                   |
| Level-Up Direct Message      | false                  | true                   | true                   | true                   |
| Embedded Leaderboard         | false                  | true                   | true                   | true                   |


## Logging Limits

|                       | Default                | Prime Classic          | Prime                  | Prime Community        |
|------------------------------|------------------------|------------------------|------------------------|------------------------|
| Log Streams                  | 2                      | 3                      | 5                      | 5                      |


## Auto Role Limits

|                       | Default                | Prime Classic          | Prime                  | Prime Community        |
|------------------------------|------------------------|------------------------|------------------------|------------------------|
| Roles Reaction Groups        | 4                      | 5                      | 15                     | 15                     |
| Roles Per Group              | 20                     | 25                     | 25                     | 25                     |


## Starboard Limits

|                       | Default                | Prime Classic          | Prime                  | Prime Community        |
|------------------------------|------------------------|------------------------|------------------------|------------------------|
| Starboards                   | 1                      | 2                      | 5                      | 5                      |


## Ticket Limits

|                       | Default                | Prime Classic          | Prime                  | Prime Community        |
|------------------------------|------------------------|------------------------|------------------------|------------------------|
| Tickets Archive              | false                  | true                   | true                   | true                   |


## /tag Limits

|                       | Default                | Prime Classic          | Prime                  | Prime Community        |
|------------------------------|------------------------|------------------------|------------------------|------------------------|
| /tag Messages                | 15                     | 25                     | 50                     | 50                     |


## Moderation Limits

|                       | Default                | Prime Classic          | Prime                  | Prime Community        |
|------------------------------|------------------------|------------------------|------------------------|------------------------|
| Filters                      | 5                      | 7                      | 10                     | 10                     |
| Filter Conditions            | 1                      | 1                      | 2                      | 2                      |
| Filter Triggers              | 2                      | 2                      | 4                      | 4                      |
| Filter Effects               | 2                      | 2                      | 3                      | 3                      |