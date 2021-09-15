---
description: Returns a boolean indicating whether "target" contains "term".
---
# {utils.includes;[target];[term]}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{utils.includes;a string;string}
```
{% endtab %}
{% tab title="Output" %}
```text
true
```
{% endtab %}
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
```
{% endtab %}
{% endtabs %}
{% tabs %}
{% tab title="Input" %}
```text
{utils.includes;;}
```
{% endtab %}
{% tab title="Output" %}
```text
false
```
{% endtab %}
{% endtabs %}