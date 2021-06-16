---
description: Returns the date the role was created. "exact" is a true/false value on whether to include hours/minutes.
---

# role.createdAt [role] <exact\> <role\>

### Examples

{% tabs %}
{% tab title="Input" %}

```text
{role.createdAt;Developer}
```

{% endtab %}

{% tab title="Output" %}

```text
Jul 28, 2017
```

{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Input" %}

```text
{role.createdAt;Developer;true}
```

{% endtab %}

{% tab title="Output" %}

```text
Jul 28, 2017, 7:57 PM
```

{% endtab %}
{% endtabs %}
