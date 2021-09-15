---
description: Gets the timestamp of a provided date or the current date if none is provided.
---
# {utils.timestamp;[date]}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{utils.timestamp}
```
{% endtab %}
{% tab title="Output" %}
```text
1623052829130
```
{% endtab %}
{% endtabs %}
{% tabs %}
{% tab title="Input" %}
```text
{utils.timestamp;{user.createdAt}}
```
{% endtab %}
{% tab title="Output" %}
```text
1592517600000
```
{% endtab %}
{% endtabs %}