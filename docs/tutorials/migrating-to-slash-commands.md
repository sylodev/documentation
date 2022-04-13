# Migrating to Slash Commands

> This tutorial is only relevant for existing servers that are not already using slash commands. This does not apply to servers that added Atlas after April 1st, 2022.

Discord is making bots migrate to [slash commands](https://support.discord.com/hc/en-us/articles/1500000368501-Slash-Commands-FAQ) in the near future. Slash commands provide a more streamlined way to interact with bots and are a much better experience for users that are unfamiliar with the bot. The new version of Atlas is made from the ground up with this in mind, and so slash commands are the intended way to use the bot. While migrating to slash commands is optional, it is strongly encouraged. Servers that don't will encounter issues. We are unlikely to offer support for issues that only occur with legacy commands.

To setup slash commands in your server:

1. Go to the guild overview in your server
2. Hit "Sync Now"

<img src="https://i.imgur.com/RIWuDMV.png" />

Once it finishes loading, slash commands should be working in your server. Type `/` to view them.

> Toggling plugins, commands or creating actions will automatically sync slash commands - there is no need to manually sync them after the initial sync.

Now that slash commands are setup, you should configure the legacy compatibility mode for your server.

<img src="https://i.imgur.com/v84JAEL.png" />

- If your server is used to the old prefixed commands, you should set the legacy compatibility mode to "Show Warning" to inform them of the move to slash commands. When they attempt to run a prefixed command, they'll get a helpful warning instead telling them how to use slash commands.
- If your server is fine with slash commands, you should disable legacy compatibility entirely. It's recommended to do this after you've been using the "Show Warning" mode for a while.

If neither of the above options apply to your server, you can leave legacy compatibility enabled. You will likely run into weird quirks with legacy compatibility, because Atlas assumes you're using slash commands. We will not support issues that only occur with legacy commands. You are strongly encouraged to migrate to slash commands, because eventually legacy support will be removed.

## Resources

- [Slash Commands FAQ](https://support.discord.com/hc/en-us/articles/1500000368501-Slash-Commands-FAQ)
- [Slash Commands Announcement](https://discord.com/blog/slash-commands-are-here)
- [Message intent FAQ](https://support-dev.discord.com/hc/en-us/articles/4404772028055-Message-Content-Privileged-Intent-for-Verified-Bots), the reason bots are moving to slash commands

## Troubleshooting

### "Missing Access" errors

<img src="https://i.imgur.com/3jXfG3P.png" />

Because slash commands did not exist until recently, so in some older servers Atlas does not have permission to register slash commands. To give Atlas the right permissions, you'll have to re-authorise it.

> You do not have to kick the bot before re-authorising it.

1. Go to [atlas.bot/get](https://atlas.bot/get)
2. Select the server with the error
3. Click "Continue"
4. Click "Authorise"
5. Back on atlas.bot, click "Complete Setup"
6. Click "Sync Now" under "Force Sync" in the "Danger Zone" section on the guild overview page.

It can take up to a few minutes to finish syncing slash commands.

### "Invalid Form Body" errors

When Atlas syncs slash commands in your server, it also includes actions from that server in the sync. Sometimes, actions can be setup incorrectly and can cause issues when syncing.

The most common cause is actions with uppercase or special characters in the command names. To fix this, update the command name and make sure it strictly uses characters `a-z`.

### Something else

> Still having issues? Feel free to [join our support server](https://atlas.bot/support) and ask for help.
