Tags are the backbone of Atlas' customizable messages and custom actions. If you use Atlas, chances are you're using tags somewhere. This guide will help you to understand what tags are, what they do, and how to use them.

## What Are Tags?

Tags are the codes Atlas uses to retrieve or display information. Currently, there are over 100 tags available to use within Atlas. Tags look like this: `{tag}` and can be used in various places throughout Atlas. A complete list of tags can be found [here](https://atlasbot.xyz/documentation/tags).

## What Are Tags Used For?

Tags have virtually limitless capabilities depending on your use of them. For instance, user tags get you information on any user available through the Discord API. Tags can be used in join/leave messages, custom actions, ticket notifications, and more. Some tags also have arguments for you to change the context of the tag. As of now, there are 9 separate categories for tags.

## How Do I Use Tags?

They say experience is the best teacher, so let's create a join message that utilizes tags. First, navigate to your [dashboard](https://atlasbot.xyz/@me/guilds) and select the appropriate server. Click on the **Gatekeeper** plugin, then toggle **Join Messages** to the ON position. You will see that Atlas has already pre-generated a join message for you, complete with the tags [{user.mention}](https://atlasbot.xyz/documentation/tags/user.mention) and [{guild.name}](https://atlasbot.xyz/documentation/tags/guild.name). Wow, that's pretty neat!

Ready to take it up a notch? Let’s edit the existing join message to include a live server member count! By reading the [tag documentation](https://atlasbot.xyz/documentation/tags), we know that [{guild.memberCount}](https://atlasbot.xyz/documentation/tags/guild.memberCount) is the tag we're looking for. Next, let's insert the code `They are member number: {guild.memberCount}.` into the current join message. The final product should look something like this: `{user.mention} has joined {guild.name}. They are member number: {guild.memberCount}. Make sure to give them a warm welcome!`

Nicely done! You now have a basic understanding of the function and purpose of tags and how useful they can be when used properly. Ready to delve a little deeper? Check out our guide on [Advanced Tags](https://atlasbot.xyz/documentation/tutorials/Advanced_Tags) to further your knowledge!
