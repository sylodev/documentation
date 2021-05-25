So many questions, so little patience! You don't have time to ask your questions to a live human being! You want instant, accurate answers. That's where the frequently asked questions comes into play. A list of our most commonly asked questions.

**Q**: Atlas isn't responding to commands, what do I do?
**A:** Make sure Atlas has the proper permissions in the channel you are executing the command. Atlas needs **Read Messages** and **Send Messages** permissions to respond to you. You'd be surprised at how often these permissions are disabled.

**Q**: My server isn't showing up on the dashboard, what’s going on?
**A:** Ensure you are logged in on the correct account. Next, ensure you have **Manage Server** or **Administrator** permissions in the guild you are trying to access. If you are sure you have these permissions, refresh the website.

**Q**: Who can execute moderator commands? Do I have to manually set restrictions?
**A:** Atlas restricts normal users from executing moderator commands such as (`mute`,`kick`,`ban`) based on their existing Discord permissions. For example, if they have the **Ban Users** permission, they can execute the `ban` command. You can also check the permission requirements for a specific command by running `a!help <command name>`.

**Q**: Atlas just randomly sent a message in my Discord server. Why?
**A:** Atlas will **never** send messages to a channel that it wasn't told to. Common reasons for seemingly randomly sent messages are **1.** Someone executed a command and quickly deleted the invocation message. **2.** You have a Message Create, Keyword, Interval action that is triggering the response.

**Q**: Why can't I mention @everyone or @here with Atlas?
**A:** This is mainly to prevent abuse. If someone who doesn't know what they're doing makes an action that mentions @everyone and sets no restrictions on it, anybody would be able to execute that action. (Bad!)

**Q**: Why is Atlas offline in my server but not in my friend's server?
**A:** Atlas utilizes a feature for bots called sharding. Sharding splits up Atlas into many different individual instances. One of these instances of Atlas is what is running on your server. Every now and then, shards go down and automatically reboot (usually within 5 minutes). Two different servers can be on two different shards resulting in one instance of Atlas going offline while the other remains online.

**Q**: I have ideas to improve Atlas for everyone. How do I let you know about them?
**A:** Join our [support server](https://atlasbot.xyz/support)! Drop your ideas in the #suggestions channel and if they're accepted, they will be voted on by other Atlas users. If you're lucky, your idea might find its way into Atlas.

**Q**: I need help creating an action. What do I do?
**A:** If you've checked out our [basic action tutorial](https://atlasbot.xyz/documentation/tutorials/Actions/Basic_Action) and think it's just barely out of your comfort zone to try it yourself, [let us help](https://atlasbot.xyz/support)! We have an experienced support team that would be happy to assist you.

**Q**: Why is Atlas saying "That command has been disabled" or "That plugin has been disabled"?
**A:** Plugins and commands can be manually disabled by anyone with access to your dashboard. Chances are: if you didn't disable it, one of your staff members did. You can navigate to your dashboard and manually re-enable it or simply type `a!tp <plugin name>` for plugins or `a!tc <command name>` for commands.

**Q**: I like what you guys are doing, how do I support Atlas?
**A:** Atlas is entirely supported by user-purchased premium memberships. Visit the [developer's Patreon](https://www.patreon.com/NotSylver) to sign up to be a premium member. Your generous proceeds are what helps keep Atlas awesome!

**Q**: How do I use `a!<command>`? or, alternatively: How do I use a subcommand of `a!<command>`?
**A:** `a!help <command>` has all your answers. If you can’t find what you’re looking for, feel free to ask in our [support server](https://atlasbot.xyz/support).

**Q**: I did `a!role addall` but it only gave some people the role?
**A:** For performance reasons, in large servers, `a!role addall` takes a bit of time to give everyone the role.

If your question wasn’t answered here, feel free to join our [support server](https://atlasbot.xyz/support).
