---
description: Returns true or false if [string] includes [query].
---

# utils.includes [string] [query]

### Examples

{% tabs %}
{% tab title="Input" %}
```text
{utils.includes;a string;string}
```
{% endtab %}

{% tab title="Output" %}
```text
true
```{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Input" %}
```text
{utils.includes;AN UPPERCASE STRING;uppercase}
```
{% endtab %}

{% tab title="Output" %}
```text
true
```{% endtab %}
{% endtabs %}