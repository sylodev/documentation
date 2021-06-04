---
description: Sends a message to the channel.
---

# channel.send [content] <channel>

### Examples

{% tabs %}
{% tab title="Input" %}
```text
{channel.send;ayyy}
```
{% endtab %}

{% tab title="Output" %}
```text
ayyy
```{% endtab %}
{% endtabs %}{% tabs %}
{% tab title="Input" %}
```text
{channel.send;ayyy;#general}
```
{% endtab %}

{% tab title="Output" %}
```text
ayyy
```
{% hint style="info" %}
Output would be sent to the #general channel, regardless of where it was called.
{% endhint %}
{% endtab %}
{% endtabs %}