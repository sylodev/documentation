---
description: Sets a key to a value in volatile storage, used for storing things. If you want full persistence, look into "perset" and "perget"
---

# set <key> <value>

### Examples

{% tabs %}
{% tab title="Input" %}
```text
{set;key;value}
```
{% endtab %}

{% tab title="Output" %}
```text

```{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Input" %}
```text
{set;key;value} {get;key}
```
{% endtab %}

{% tab title="Output" %}
```text
value
```{% endtab %}
{% endtabs %}