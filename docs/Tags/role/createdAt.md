---
description: Returns the date the role was created. "exact" is a boolean indicating whether to include hours and minutes.
---
# {role.createdAt;&lt;role>;[exact]}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{role.createdAt;Developer}
```
{% endtab %}
{% tab title="Output" %}
```text
Jul 28, 2017
```
{% endtab %}
{% endtabs %},{% tabs %}
{% tab title="Input" %}
```text
{role.createdAt;Developer;true}
```
{% endtab %}
{% tab title="Output" %}
```text
Jul 28, 2017, 7:57 PM
```
{% endtab %}
{% endtabs %}