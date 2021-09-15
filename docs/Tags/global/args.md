---
description: Access user-provided arguments.
---
# {args;[index];[range=1]}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{args;1}
```
{% endtab %}
{% tab title="Output" %}
```text
arg1
```
{% endtab %}
{% endtabs %}
{% tabs %}
{% tab title="Input" %}
```text
{args;2}
```
{% endtab %}
{% tab title="Output" %}
```text
arg2
```
{% endtab %}
{% endtabs %}
{% tabs %}
{% tab title="Input" %}
```text
{args}
```
{% endtab %}
{% tab title="Output" %}
```text
arg1 arg2
```
{% endtab %}
{% endtabs %}
{% tabs %}
{% tab title="Input" %}
```text
{args;2;2}
```
{% endtab %}
{% tab title="Output" %}
```text
arg2 arg3
```
{% endtab %}
{% endtabs %}
{% tabs %}
{% tab title="Input" %}
```text
{args;2;infinity}
```
{% endtab %}
{% tab title="Output" %}
```text
arg2 arg3
```
{% endtab %}
{% endtabs %}