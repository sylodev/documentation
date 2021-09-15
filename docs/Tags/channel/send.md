---
description: Sends a message to the channel. 
---
# {channel.send;&lt;content>;[channel];[returnId]}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{channel.send;Welcome to the thunder dome}
```
{% endtab %}
{% tab title="Output" %}
```text

```
{% endtab %}
{% hint style="info" %}
"Welcome to the thunder dome" would be sent to the context channel.
{% endhint % }
{% endtabs %}
{% tabs %}
{% tab title="Input" %}
```text
{channel.send;what;{channel.id};true}
```
{% endtab %}
{% tab title="Output" %}
```text
532902719531515905
```
{% endtab %}
{% hint style="info" %}
If the third argument is "true", the ID of the created message will be returned.
{% endhint % }
{% endtabs %}
{% tabs %}
{% tab title="Input" %}
```text
{channel.send;ayyy;off-topic}
```
{% endtab %}
{% tab title="Output" %}
```text

```
{% endtab %}
{% hint style="info" %}
This message would be sent to the #off-topic channel.
{% endhint % }
{% endtabs %}