---
description: Returns all message mentions in a message by ID. This includes user, role and channel mentions.
---
# {message.mentions;[message id];[message channel]}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{message.mentions}
```
{% endtab %}
{% tab title="Output" %}
```text
111372124383428608 532902669220839426
```
{% hint style="info" %}
In this case, the message content would be something like "@Sylver#1048 #general"
{% endhint % }{% endtab %}
{% endtabs %}