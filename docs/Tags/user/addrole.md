---
description: Gives a user a role.
---
# {user.addrole;&lt;role>;[user]}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{user.addrole;human}
```
{% endtab %}
{% tab title="Output" %}
```text

```
{% hint style="info" %}
This tag outputs nothing on success.
{% endhint % }
{% endtab %}
{% endtabs %}
{% tabs %}
{% tab title="Input" %}
```text
{user.addrole;Humans;Sylver}
```
{% endtab %}
{% tab title="Output" %}
```text

```
{% hint style="info" %}
This would add the "Humans" role to the user "Sylver".
{% endhint % }
{% endtab %}
{% endtabs %}