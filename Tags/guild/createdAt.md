---
description: Returns the date the guild was created. "exact" is a true/false value on whether to include hours/minutes.
---

# guild.createdAt &lt;exact>

### Examples

{% tabs %}
{% tab title="Input" %}

```text
{guild.createdAt}
```

{% endtab %}

{% tab title="Output" %}

```text
Jul 31, 2018
```

{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Input" %}

```text
{guild.createdAt;true}
```

{% endtab %}

{% tab title="Output" %}

```text
Jul 31, 2018, 9:19 PM
```

{% endtab %}
{% endtabs %}
