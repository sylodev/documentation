---
description: Returns a true/false value on whether the role is managed by a third party connection.
---

# role.managed <role\>

### Examples

{% tabs %}
{% tab title="Input" %}

```text
{role.managed;Developer}
```

{% endtab %}

{% tab title="Output" %}

```text
false
```

{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Input" %}

```text
{role.managed;Atlas}
```

{% endtab %}

{% tab title="Output" %}

```text
true
```

{% endtab %}
{% endtabs %}
