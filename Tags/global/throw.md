---
description: Throws a TagError with whatever you want. Useful for testing or if you want better error handling in your actions.
---

# throw [message]

### Examples

{% tabs %}
{% tab title="Input" %}

```text
{throw;Something bad happened}
```

{% endtab %}

{% tab title="Output" %}

```text
{throw-ERROR1}
```

{% hint style="info" %}
You can handle the error properly with {catch}.On error Atlas will replace the tag with {\<tagname\>-ERROR\<errorNumber\>}.
{% endhint %}
{% endtab %}
{% endtabs %}
