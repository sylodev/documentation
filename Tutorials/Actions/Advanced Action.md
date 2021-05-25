Now that you've made a basic action and have a better understanding of how actions and tags work, we can get started on making a more advanced action with some [advanced tags](https://atlasbot.xyz/documentation/tutorials/Tags/Advanced_Tags). For this tutorial, we'll be making the [Basic Action](https://atlasbot.xyz/documentation/tutorials/Actions/Basic_Action) you made earlier a wee-bit more advanced.

In case you forgot, here is the code we just made with the [Basic Action](https://atlasbot.xyz/documentation/tutorials/Actions/Basic_Action): ```{channel.topic;{args}}``` We'll be improving upon it in this tutorial.

## Improving The Code
For improving this action, let's include an [{if}](https://atlasbot.xyz/documentation/tags/if) tag in the action code to enable conditional parsing. If our criteria is met, the command will succeed. If the criteria is not met, it will throw an error.

## Handling Errors
For this action, we will have Atlas throw an error if the channel in context has no topic. We'll give you the code you need, encased with an [{if}](https://atlasbot.xyz/documentation/tags/if) tag, and explain it what it's doing as we go.

**Tag Code:** ```{if;{channel.topic;{args}};===;;That channel does not have a topic!;{channel.topic;{args}}```

**English:** ```If the channel topic you provided is equal to null (or is empty), then send the message "That channel does not have a topic!", otherwise send the contents of the channel topic```

Now, paste the tag code above into your action.
Hoora...uh oh! Something isn't working... We have imbalanced brackets!

## Troubleshooting
Imbalanced brackets are the thorn in the side of many people's actions. Forget to put in one bracket and the whole thing comes tumbling down.

How do you know if you have imbalanced brackets? Usually actions with imbalanced brackets will output... well, nothing. Count the number of left brackets (`{`) and compare it with the amount of right brackets (`}`). If the numbers don't match up, you have imbalanced brackets!

Now let's fix that:
```{if;{channel.topic;{args}};===;;That channel does not have a topic!;{channel.topic;{args}}}```

Notice the extra bracket! Let's test it... and hooray! Now it works.

Ready for a real challenge? Try to adapt this code to do something different. See if you can make a command that tells you whether a user is a bot or not. ([HINT](https://atlasbot.xyz/documentation/tags/user.bot))
