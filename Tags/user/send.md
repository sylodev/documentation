---
description: Direct-messages a user a message. If the user does not allow direct-messages from guild members, this will throw an error.
---

# user.send [message] <user>

### Examples

{% tabs %}
{% tab title="Input" %}
```text
{user.send;Hello :)}
```
{% endtab %}

{% tab title="Output" %}
```text

```
{% hint style="info" %}
This tag does not output anything on success.
{% endhint %}
{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Input" %}
```text
{user.send;Hello :)}
```
{% endtab %}

{% tab title="Output" %}
```text
{user.send-ERROR1}
```
{% hint style="info" %}
This tag will throw an error if the user's direct-messages are not open.
{% endhint %}
{% endtab %}
{% endtabs %}