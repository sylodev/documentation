---
description: Direct-messages a user a message. If the user does not allow direct-messages from guild members, this will throw an error.
---
# {user.send;&lt;message>;[user];[returnId]}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{user.send;Hello :)}
```
{% endtab %}
{% endtabs %},{% tabs %}
{% tab title="Input" %}
```text
{user.send;Bye;{user.id};true}
```
{% endtab %}
{% tab title="Output" %}
```text
851450376993636362
```
{% endtab %}
{% endtabs %},{% tabs %}
{% tab title="Input" %}
```text
{user.send;Hello :)}
```
{% endtab %}
{% tab title="Output" %}
```text
{user.send-ERROR1}
```
{% endtab %}
{% endtabs %}