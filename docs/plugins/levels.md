# Levels

The levels plugin rewards users for being active in the server.

## Rewards

Level rewards are roles that are given to users at specific levels.

The `stack` option for level rewards will mean that once the user achieves that level, they keep the reward even after they level up. Disabling stacking will remove the role once they level up, unless there is no role left to give.

<img src="https://sylver.hates-this.place/f/2qQnxB.png" />

Given this example

- At level 1, the user will get the "Sticky" role
- At level 2, the user will get the "Alt" role and the "Sticky" role will be removed
- At level 3, the "Alt" role will be removed and the "Bot" role will be added.
- At level 4, the user will keep the "Bot" role from level 3, even though it is not set to stack.

## Level-up Message

The level-up message is sent when users gain a level. It supports scripts. If the direct-message option is set, the message will be sent to the user and will fall back to the channel the user levelled up in if the direct-message fails (for example, if the user has their direct-messages closed).
