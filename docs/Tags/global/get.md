---
description: Gets a key from volatile storage.
---
# {get;&lt;key>}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{set;key;value} {get;key}
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
{get;non-existent-key}
```
{% endtab %}
{% tab title="Output" %}
```text

```
{% hint style="info" %}
Unset keys return nothing.
{% endhint %}
{% endtab %}
{% endtabs %}