---
description: Gets the hex code of a role. If "hex" is false, the color will be in base 10 and may be empty if the role has no color.
---
# {role.color;&lt;role>;[hex=true]]}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{role.color;humans}
```
{% endtab %}
{% tab title="Output" %}
```text
#F38A8D
```
{% endtab %}
{% endtabs %},{% tabs %}
{% tab title="Input" %}
```text
{role.color;humans;false}
```
{% endtab %}
{% tab title="Output" %}
```text
15960717
```
{% endtab %}
{% endtabs %},{% tabs %}
{% tab title="Input" %}
```text
{role.color;@everyone}
```
{% endtab %}
{% tab title="Output" %}
```text
#B9BBBE
```
{% endtab %}
{% endtabs %}