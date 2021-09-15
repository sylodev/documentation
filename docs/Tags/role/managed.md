---
description: Returns a boolean indicating whether the role is managed by a third party connection.
---
# {role.managed;&lt;role>}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{role.managed;Developer}
```
{% endtab %}
{% tab title="Output" %}
```text
false
```
{% endtab %}
{% endtabs %}
{% tabs %}
{% tab title="Input" %}
```text
{role.managed;Atlas}
```
{% endtab %}
{% tab title="Output" %}
```text
true
```
{% endtab %}
{% endtabs %}