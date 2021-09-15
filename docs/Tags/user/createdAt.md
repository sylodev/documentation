---
description: Returns the date the users account was created. "exact" is a boolean indicating whether to include hours and minutes.
---
# {user.createdAt;[exact];[user]}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{user.createdAt}
```
{% endtab %}
{% tab title="Output" %}
```text
Nov 4, 2015
```
{% endtab %}
{% endtabs %}
{% tabs %}
{% tab title="Input" %}
```text
{user.createdAt;true}
```
{% endtab %}
{% tab title="Output" %}
```text
Nov 4, 2015, 7:53 AM
```
{% endtab %}
{% endtabs %}