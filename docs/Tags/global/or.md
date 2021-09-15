---
description: Returns the first argument that exist and is not empty. Cannot be used with {if}. Uses conditional parsing.
---
# {or;[...]}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{or;; ;test}
```
{% endtab %}
{% tab title="Output" %}
```text
test
```
{% endtab %}
{% endtabs %},{% tabs %}
{% tab title="Input" %}
```text
{or;first;second}
```
{% endtab %}
{% tab title="Output" %}
```text
first
```
{% endtab %}
{% endtabs %}