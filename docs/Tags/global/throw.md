---
description: Throws an error with a custom message. Useful for testing or if you want better error handling in your actions.
---
# {throw;[message]}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{throw;Something bad happened}
```
{% endtab %}
{% tab title="Output" %}
```text
{throw-ERROR1-something-bad-happened}
```
{% hint style="info" %}
You can handle the error properly with {catch}.
{% endhint % }
{% endtab %}
{% endtabs %}