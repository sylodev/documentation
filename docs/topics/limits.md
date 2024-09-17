# Limits

## General Limits

|                       | Default                | Prime Classic          | Prime                  |
|------------------------------|------------------------|------------------------|------------------------|
| Default Embed Colour         | false                  | true                   | true                   |
| Locale Overrides             | false                  | true                   | true                   |
| Custom Bots                  | false                  | false                  | true (1)               |
| Suggestions Plugin           | false                  | false                  | true                   |


## Action Limits

|                       | Default                | Prime Classic          | Prime                  |
|------------------------------|------------------------|------------------------|------------------------|
| Total Actions                | 25                     | 35                     | 100                    |
| Auto-Lock Timeout            | 1 second               | 1 second               | 5 seconds              |
| Dynamic Cooldowns            | false                  | false                  | true                   |
| Disable Locking              | false                  | true                   | true                   |
| Keyword Triggers             | 2                      | 3                      | 15                     |
| Keyword Cooldown             | 30 seconds             | 20 seconds             | 20 seconds             |
| Message Create Triggers      | 2                      | 3                      | 15                     |
| Message Create Cooldown      | 60 seconds             | 30 seconds             | 20 seconds             |
| Reaction Add Triggers        | 5                      | 5                      | 10                     |
| Reaction Remove Triggers     | 5                      | 5                      | 10                     |
| Interval Triggers            | 2                      | 2                      | 10                     |
| Webhook Cooldown             | 60 seconds             | 30 seconds             | 20 seconds             |


## Expensive Tag Invocations

|                       | Default                | Prime Classic          | Prime                  |
|------------------------------|------------------------|------------------------|------------------------|
| Total Expensive Tags         | 8                      | 8                      | 14                     |
| Create Direct Messages       | 1                      | 1                      | 1                      |
| Import                       | 4                      | 4                      | 6                      |
| Mutate Message Reactions     | 3                      | 3                      | 5                      |
| Mutate Channels              | 2                      | 2                      | 4                      |
| Mutate Roles                 | 2                      | 2                      | 4                      |
| Mutate Users                 | 3                      | 3                      | 4                      |
| Mutate Messages              | 2                      | 2                      | 4                      |
| Create Messages              | 4                      | 4                      | 5                      |
| Stall Scripts                | 4                      | 4                      | 4                      |
| Mutate Storage               | 8                      | 8                      | 20                     |
| Call Commands                | 2                      | 2                      | 4                      |

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

|                       | Default                | Prime Classic          | Prime                  |
|------------------------------|------------------------|------------------------|------------------------|
| Storage Keys                 | 500                    | 500                    | 5000                   |
| Storage Size (KB)            | 5120                   | 5120                   | 10240                  |


## Poll Limits

|                       | Default                | Prime Classic          | Prime                  |
|------------------------------|------------------------|------------------------|------------------------|
| Active Polls                 | 3                      | 15                     | 15                     |
| Poll Max Duration            | 7 days                 | 30 days                | 30 days                |


## Level Limits

|                       | Default                | Prime Classic          | Prime                  |
|------------------------------|------------------------|------------------------|------------------------|
| Level Rewards                | 10                     | 30                     | 30                     |
| Custom Level Curve           | false                  | false                  | true                   |
| Level-Up Direct Message      | false                  | true                   | true                   |
| Embedded Leaderboard         | false                  | true                   | true                   |


## Logging Limits

|                       | Default                | Prime Classic          | Prime                  |
|------------------------------|------------------------|------------------------|------------------------|
| Log Streams                  | 2                      | 3                      | 5                      |


## Auto Role Limits

|                       | Default                | Prime Classic          | Prime                  |
|------------------------------|------------------------|------------------------|------------------------|
| Roles Reaction Groups        | 4                      | 5                      | 15                     |
| Roles Per Group              | 20                     | 25                     | 25                     |


## Starboard Limits

|                       | Default                | Prime Classic          | Prime                  |
|------------------------------|------------------------|------------------------|------------------------|
| Starboards                   | 1                      | 2                      | 5                      |


## Ticket Limits

|                       | Default                | Prime Classic          | Prime                  |
|------------------------------|------------------------|------------------------|------------------------|
| Tickets Archive              | false                  | true                   | true                   |


## /tag Limits

|                       | Default                | Prime Classic          | Prime                  |
|------------------------------|------------------------|------------------------|------------------------|
| /tag Messages                | 15                     | 25                     | 50                     |


## Moderation Limits

|                       | Default                | Prime Classic          | Prime                  |
|------------------------------|------------------------|------------------------|------------------------|
| Filters                      | 5                      | 7                      | 10                     |
| Filter Conditions            | 1                      | 1                      | 2                      |
| Filter Triggers              | 2                      | 2                      | 4                      |
| Filter Effects               | 2                      | 2                      | 3                      |
