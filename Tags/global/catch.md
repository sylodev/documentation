---
description: If an error occures on any of the subtags, it will retun [message] instead of throwing an error. Please keep in mind this will still report the error as usual.
---

# catch [subtag(s)] [message]

### Examples

{% tabs %}
{% tab title="Input" %}
```text
{catch;{throw;test};Something bad happened :c}
```
{% endtab %}

{% tab title="Output" %}
```text
Something bad happened :c
```{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Input" %}
```text
{catch;{throw;test}}
```
{% endtab %}

{% tab title="Output" %}
```text
Something bad happened :c
```
{% hint style="info" %}
The default message is "Something bad happened :c"
{% endhint %}
{% endtab %}
{% endtabs %}