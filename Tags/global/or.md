---
description: Returns the first argument that exist and is not empty.
---

# or *

### Examples

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
{% endtabs %}

{% tabs %}
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