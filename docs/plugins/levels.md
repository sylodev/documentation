# Levels

The levels plugin rewards users for being active in the server.

## Gaining XP

Eligible messages sent by users will gain a random amount of XP. By default, the amount of XP is a random number between `6.5` and `12.5` per message. When a user gains XP for a message, that user will be put on cooldown and will not be able to gain XP for one minute.

Messages are eligible for XP if they meet all the following conditions:

- The message is sent by a human
- The message is in a server
- The message is either a regular message or a reply to another message
- The message does not mention a bot
- The message does not start with a common bot prefix
- The message length is over 3 characters

Ineligible messages will not gain XP and will not cause the author to be put on cooldown.

## Level-up Message

Level-up messages are sent when a user moves from one level to another. Tags are supported in the level-up message content. If the direct-message option is set, the message will be sent to the user and will fall back to the channel the user levelled up in if the direct-message fails (for example, if the user has their direct-messages closed).

## Rewards

Level rewards are roles that are given to users at specific levels.

The `stack` option for level rewards will mean that once the user achieves that level, they keep the reward even after they level up. Disabling stacking will remove the role once they level up, unless there is no role left to give.

<img src="https://i.imgur.com/O2JVl9d.png" alt="A picture showing the configuration used in the following example" />

Given this example

- At level 1, the user will get the "Sticky" role
- At level 2, the user will get the "Alt" role and the "Sticky" role will be removed
- At level 3, the "Alt" role will be removed and the "Bot" role will be added.
- At level 4, the user will keep the "Bot" role from level 3, even though it is not set to stack.

## Preventing users from gaining XP

Plugin restrictions apply to gaining XP. If a channel is blacklisted, that channel cannot be used to gain XP.

## Level Curves

Level curves are a Prime feature that can be used to to make it easier or harder to level-up. The expression is used to convert a users XP into their level. If you open the curve preview, you can see how your custom level compares to other bots and the default level curve.

Changing the level curve will apply to all users immediately and retroactively. Because the level is calculated based on the users XP, changing the level curve will change the level of existing users.

Level rewards are not adjusted when you change the level curve.

<img src="https://i.imgur.com/XxALrjb.png" alt="An example of the level curve options" />

<img src="https://i.imgur.com/3AuZs13.png" alt="An example of the curve preview for a custom level curve" />
