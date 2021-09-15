---
description: Gets a key from persistent storage.
---
# {perget;&lt;key>}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{perset;key;value} {perget;key}
```
{% endtab %}
{% tab title="Output" %}
```text
value
```
{% endtab %}
{% endtabs %},{% tabs %}
{% tab title="Input" %}
```text
{perget;non-existent-key}
```
{% endtab %}
{% endtabs %}