---
description: Removes a role from the user.
---
# {user.removerole;&lt;role>;[user]}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{user.removerole;human}
```
{% endtab %}
{% tab title="Output" %}
```text

```
{% hint style="info" %}
This tag outputs nothing on success.
{% endhint % }{% endtab %}
{% endtabs %}
{% tabs %}
{% tab title="Input" %}
```text
{user.removerole;Humans;Sylver}
```
{% endtab %}
{% tab title="Output" %}
```text

```
{% hint style="info" %}
This would remove the "Humans" role from the user "Sylver".
{% endhint % }{% endtab %}
{% endtabs %}