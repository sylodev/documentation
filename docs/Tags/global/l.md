---
description: A left bracket. Use this if the parser keeps eating brackets you want to be shown.
---
# {l}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{l}
```
{% endtab %}
{% tab title="Output" %}
```text
{
```
{% endtab %}
{% endtabs %}
{% tabs %}
{% tab title="Input" %}
```text
{set;key;Whats up {l} gamer} {get;key}
```
{% endtab %}
{% tab title="Output" %}
```text
Whats up { gamer
```
{% endtab %}
{% endtabs %}