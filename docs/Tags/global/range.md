---
description: Gets a random number between the minimum and maximum values. If the maximum is unset, the minimum will become the maximum and the minimum will be set to "1".
---
# {range;&lt;minimum>;[maximum]}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{range;5;10}
```
{% endtab %}
{% tab title="Output" %}
```text
7
```
{% endtab %}
{% endtabs %}
{% tabs %}
{% tab title="Input" %}
```text
{range;0;100}
```
{% endtab %}
{% tab title="Output" %}
```text
69
```
{% endtab %}
{% endtabs %}
{% tabs %}
{% tab title="Input" %}
```text
{range;5}
```
{% endtab %}
{% tab title="Output" %}
```text
0
```
{% endtab %}
{% endtabs %}