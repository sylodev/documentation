---
description: Gives a user a role. Role is matched using a fuzzy matcher.
---

# user.addrole [role id/name/mention] &lt;user>

### Examples

{% tabs %}
{% tab title="Input" %}

```text
{user.addrole;Humans}
```

{% endtab %}

{% tab title="Output" %}

```text

```

{% hint style="info" %}
The user would have the role. Returns nothing on success.
{% endhint %}
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
Sylver would now have the "Humans" role.
{% endhint %}
{% endtab %}
{% endtabs %}
