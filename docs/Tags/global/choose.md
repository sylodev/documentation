---
description: Returns a random argument. Uses conditional parsing.
---
# {choose;[...]}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{choose;a;b}
```
{% endtab %}
{% tab title="Output" %}
```text
a
```
{% endtab %}
{% endtabs %}
{% tabs %}
{% tab title="Input" %}
```text
{choose;one;two;three;four}
```
{% endtab %}
{% tab title="Output" %}
```text
three
```
{% endtab %}
{% endtabs %}
{% tabs %}
{% tab title="Input" %}
```text
{choose}
```
{% endtab %}
{% tab title="Output" %}
```text

```
{% endtab %}
{% hint style="info" %}
If no arguments are given, nothing is returned.
{% endhint % }
{% endtabs %}