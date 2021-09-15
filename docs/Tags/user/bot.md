---
description: Checks whether a user is a bot. Returns a boolean.
---
# {user.bot;[user]}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{user.bot}
```
{% endtab %}
{% tab title="Output" %}
```text
false
```
{% endtab %}
{% hint style="info" %}
Assumes the user in context is not a bot. 
{% endhint % }
{% endtabs %}
{% tabs %}
{% tab title="Input" %}
```text
{user.bot;Atlas}
```
{% endtab %}
{% tab title="Output" %}
```text
true
```
{% endtab %}
{% hint style="info" %}
Assumes the user in context is a bot. 
{% endhint % }
{% endtabs %}