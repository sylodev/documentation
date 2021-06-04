---
description: Gets the ID of the ticket's author, if one is in context.
---

# ticket.author

### Examples

{% tabs %}
{% tab title="Input" %}
```text
{ticket.author}
```
{% endtab %}

{% tab title="Output" %}
```text
111372124383428608
```
{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Input" %}
```text
{user.mention;{ticket.author}}
```
{% endtab %}

{% tab title="Output" %}
```text
@Sylver#1058
```
{% endtab %}
{% endtabs %}