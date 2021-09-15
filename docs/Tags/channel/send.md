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
{% endtabs %},{% tabs %}
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
{% endtabs %},{% tabs %}
{% tab title="Input" %}
```text
{channel.send;ayyy;off-topic}
```
{% endtab %}
{% endtabs %}