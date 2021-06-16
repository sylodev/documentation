---
description: Sends a message to the channel.
---

# channel.send <content> [channel] [return-id]

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
```

{% endtab %}
{% endtabs %}

{% tabs %}
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

{% tabs %}
{% tab title="Input" %}

```text
{channel.send;what;{channel.id};true}
```

{% endtab %}

{% tab title="Output" %}

```text
what
```

{% hint style="info" %}
This would output "what", but return the message ID of the sent message, for use elsewhere in the script.'Output would be sent to the #general channel, regardless of where it was called.
{% endhint %}

{% endtab %}
{% endtabs %}
