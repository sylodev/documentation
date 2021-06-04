---
description: Returns a random argument.
---

# choose [...options]

### Examples

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
Cats are {choose;good;bad} mkay
```
{% endtab %}

{% tab title="Output" %}
```text
Cats are bad mkay
```
{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Input" %}
```text
Doggos are {choose;good;good} mkay
```
{% endtab %}

{% tab title="Output" %}
```text
Doggos are good mkay
```
{% endtab %}
{% endtabs %}