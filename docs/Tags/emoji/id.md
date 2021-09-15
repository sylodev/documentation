---
description: Gets an emoji ID. For native emojis, this will return the emoji itself. For guild emojis, it returns the emojis ID.
---
# {emoji.id;&lt;emoji>}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{emoji.id;smile}
```
{% endtab %}
{% tab title="Output" %}
```text
😄
```
{% endtab %}
{% endtabs %}
{% tabs %}
{% tab title="Input" %}
```text
{emoji.id;aguildemoji}
```
{% endtab %}
{% tab title="Output" %}
```text
538223757291028480
```
{% endtab %}
{% endtabs %}