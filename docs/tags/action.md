# Action

These tags are only available within Action scripts.

`actionID` is optional for all tags. If not provided, the tag will use the current action. 
Can be the actions name or ID, for example `{action.id;my_action}` or `{action.name;f8dbbc57-d418-4fe5-bba6-16291f7b7d74}`

## `{action.invocations;actionID?}`

Gets the invocation count of the specified action.

## `{action.name;actionID?}`

Gets the name of the specified action.

## `{action.isDisabled;actionID?}`

Gets the disabled state of the specified action.

## `{action.id;actionID?}`

Gets the ID of the specified action.

## `{action.schedule;actionID?}`

Gets the schedule of the specified interval action.

Interval schedules are returned as Cron expressions, for example `0 0 12 * * ?` for daily at noon. Learn more about [Interval actions](../actions/intervals.md) here.