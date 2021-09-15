---
description: When an error occurs in a child tag, we return the given message instead of the error.
---
# {catch;&lt;subtag(s)>;[message]}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{catch;{throw;test};Something bad happened :c}
```
{% endtab %}
{% tab title="Output" %}
```text
Something bad happened :c
```
{% endtab %}
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
{% endhint % }
{% endtab %}
{% endtabs %}