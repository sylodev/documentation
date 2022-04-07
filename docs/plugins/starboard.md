# Starboards

Starboards are channels where messages go when a specific reaction is added. In the most common variant of this, reacting with a ⭐ would send an embed of that message to a channel named #starboard.

# Hierarchy

Starboards higher in the list will take priority over ones lower in the list. If there is a restriction setup for a starboard higher in the list that isn't matched, lower priority starboards will be considered.

As an example, let's say we have `#starboard` and `#staff-starboard`. If someone reacts with ⭐ in any channel in the `Staff` category, we want it to go to the `#staff-starboard` channel, and any messages sent elsewhere will go to the regular starboard channel. To do this, we would create a `#staff-starboard` starboard with the ⭐ emoji, and setup a whitelist for the `Staff` category. Then, we would create the regular starboard below it without a whitelist so that it sends other messages to `#starboard`.

This also works with other options, such as `minAge`, `maxAge` and `minStars`. If a starboard's requirements are not met, we consider other starboards that match the same emoji. You can use this fall-through behavior for category-specific starboards, separate starboards for extremely old messages, etc.
