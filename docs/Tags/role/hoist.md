---
description: Returns a boolean indicating whether the role is set to display members separately from online members.
---
# {role.hoist;&lt;role>}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{role.hoist;Developer}
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
{role.hoist;Atlas}
```
{% endtab %}
{% tab title="Output" %}
```text
false
```
{% endtab %}
{% endtabs %}