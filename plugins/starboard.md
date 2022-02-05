---
title: Starboards
description: 
published: 1
date: 2022-02-05T20:16:42.236Z
tags: 
editor: markdown
dateCreated: 2022-02-05T20:15:33.694Z
---

# Starboards

Starboards are channels where messages go when a specific reaction is added. The most common variant would be reacting with a ⭐ would send that message to a #starboard channel.

# Hierarchy

Starboards higher in the list will take priority over ones lower in the list. If there is a restriction setup for a starboard higher in the list that isn't matched, lower priority starboards will be considered.

As an example, let's say we have `#starboard` and `#staff-starboard`. If someone reacts with ⭐ in any channel in the `Staff` category, we want it to go to the `#staff-starboard` channel, and any messages sent elsewhere will go to the regular starboard channel. To do this, we would create a `#staff-starboard` starboard with the ⭐ emoji, and setup a whitelist for the `Staff` category. Then, we would create the regular starboard below that without a whitelist that sends messages to `#starboard`.