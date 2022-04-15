# Command Syncing

With Discords new [slash commands](https://support.discord.com/hc/en-us/articles/1500000368501-Slash-Commands-FAQ), commands now have to be registered in every server individually with Discord. This is done per-server instead of globally to ensure servers can disable commands and have them not show up in the UI, and so default commands can be overridden by actions. When you make changes to actions or commands, Atlas will queue up a sync task which will create or delete new slash commands based on the settings. Disabled commands are hidden entirely. Command actions like slash commands or context menus will be registered during this process, and will take priority over default commands with the same name. Syncing commands can sometimes take a few minutes to complete, and will become slightly slower the more often you do it to give priority to users that sync less frequently.

Up to 200 commands can be created per server per day, past that limit the sync will fail and you'll have to wait until the limit resets. Actions that are deleted may take a few minutes to be hidden in Discord, but they will stop working immediately.

If Atlas is offline in your server when you try sync, it will automatically sync when the bot comes back online. It may take longer then usual while it works through the backlog of sync requests.
