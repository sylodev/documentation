---
description: Gets the ID of the suggestions author, if one is in context.
---
# {suggestion.author}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{suggestion.author}
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
{user.mention;{suggestion.author}}
```
{% endtab %}
{% tab title="Output" %}
```text
@Sylver#1058
```
{% endtab %}
{% endtabs %}