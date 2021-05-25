Actions are pretty awesome! They allow you to create pretty much whatever you would want. Let's try creating a basic action that will get the channel’s topic with an optional argument to specify which channel.

## Creating an Action
Navigate to your [dashboard](https://atlasbot.xyz/@me/guilds) and select the guild you want the action to be in. Click on the **Actions** plugin and press the `+` icon to create a new action.

## Configuring Your Action
When a new action is created, the default **Trigger Type** is a command action. That's what we'll be using for this tutorial, so keep that as is.

Next up is the **Trigger Content**. Change this value to whatever you want your command to be named. For this tutorial, we'll name it `topic`.

Next, let's scroll down until you see a box called **Action One**. We will input our code in the **Trigger Content** field of this box.

From reading the [documentation](https://atlasbot.xyz/documentation), we know that we will need to use the [{channel.topic}](https://atlasbot.xyz/documentation/tags/channel.topic) tag. We can also see that this tag has an optional `<channel>` argument. We will use the [{args}](https://atlasbot.xyz/documentation/tags/args) tag to populate the `<channel>` argument based on user input.

Now for the fun part - coding it and watching it work! Paste the code: ```{channel.topic;{args}}``` into the **Trigger Content** field and press **Save Changes**. Your action is now ready to use! Head over to your Discord server and type `a!topic` in chat. If the channel you sent the command in has an existing topic, Atlas will tell you what it is! Now let's get the topic for a different channel. Type `a!topic <channel name>`. Bazinga! Atlas will grab the topic of the channel you just specified.
