---
description: Sets a key to a value in volatile storage. If "value" is empty, the key is deleted.
---
# {set;&lt;key>;[value]}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{set;my-key;value}
```
{% endtab %}
{% endtabs %}
{% tabs %}
{% tab title="Input" %}
```text
{set;my-key;value} {get;my-key}
```
{% endtab %}
{% tab title="Output" %}
```text
value
```
{% endtab %}
{% endtabs %}
{% tabs %}
{% tab title="Input" %}
```text
{set;my-key} {get;my-key}
```
{% endtab %}
{% endtabs %}