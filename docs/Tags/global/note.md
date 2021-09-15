---
description: Outputs nothing. You should use this for adding comments to your code. Child tags are not executed.
---
# {note;[...]}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{note;This code does something very important}
```
{% endtab %}
{% tab title="Output" %}
```text

```
{% endtab %}
{% endtabs %}
{% tabs %}
{% tab title="Input" %}
```text
{note;{user.send;Hello}}
```
{% endtab %}
{% tab title="Output" %}
```text

```
{% hint style="info" %}
The user would not receive the message because child tags are not executed.
{% endhint %}
{% endtab %}
{% endtabs %}