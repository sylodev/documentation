---
description: Gets the ID of the suggestions approver, if one is in context.
---
# {suggestion.approver}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{suggestion.approver}
```
{% endtab %}
{% tab title="Output" %}
```text
111372124383428608
```
{% endtab %}
{% endtabs %},{% tabs %}
{% tab title="Input" %}
```text
{user.mention;{suggestion.approver}}
```
{% endtab %}
{% tab title="Output" %}
```text
@Sylver#1058
```
{% endtab %}
{% endtabs %}