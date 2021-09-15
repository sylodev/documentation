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
{% tab title="Output" %}
```text

```
{% endtab %}
{% hint style="info" %}
This tag does not output anything on success if [returnId] is not true.
{% endhint % }
{% endtabs %}
{% tabs %}
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
{% hint style="info" %}
Returns the ID of the message sent.
{% endhint % }
{% endtabs %}
{% tabs %}
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
{% hint style="info" %}
This tag will throw an error if the user's direct-messages are not open.
{% endhint % }
{% endtabs %}