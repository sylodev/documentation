# Action Locking

For interval, keyword, message create and webhook actions action locking is enabled. Action locking prevents other instances of the action from running at the same time, which helps stop people attempting to abuse actions. Actions that attempt to run at the same time will be delayed or blocked depending on how long it takes to run.

For example, if I have a keyword action that triggers on the keyword `monke` with the following content

```json
{responder.text;First message}
{responder.send}
{sleep;10}
{responder.text;Second message}
```

Then I send two messages at the same time with content that would trigger this action

```
monke
monke
```

Only the first message would trigger the action, with the "First message" message being created immediately, then 10 seconds later "Second message". Once "Second message" is sent, you can send another `monke` message, the action runs again. The second `monke` message never triggered the action as it timed out waiting for the first invocation to finish.

## Delays and timeouts

If the action is locked and the action attempts to fire again, Atlas will wait a few seconds and run the action once it finishes executing, or will time out if it does not finish in time. Atlas will wait 1 second for the action to finish before timing out, and 5 seconds in Prime servers.

In the example above, because it sleeps for 10 seconds, the trigger for the second message times out waiting for the lock.

## Disabling Locking

[Prime](https://atlas.bot/prime) servers can disable action locking by going into the configuration tab for the action and clicking the "Disable Locking" option. Free servers cannot disable locking of actions.
