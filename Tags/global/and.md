---
description: Returns "true" if all args are present, or "false" in any other circumstance.
---

# and *

### Examples

{% tabs %}
{% tab title="Input" %}
```text
{and;; ;test}
```
{% endtab %}

{% tab title="Output" %}
```text
false
```{% endtab %}
{% endtabs %}{% tabs %}
{% tab title="Input" %}
```text
{and;first;second}
```
{% endtab %}

{% tab title="Output" %}
```text
true
```{% endtab %}
{% endtabs %}{% tabs %}
{% tab title="Input" %}
```text
{and;false;false}
```
{% endtab %}

{% tab title="Output" %}
```text
true
```
{% hint style="info" %}
Booleans are not parsed.
{% endhint %}
{% endtab %}
{% endtabs %}