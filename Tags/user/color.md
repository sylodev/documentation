---
description: Gets the user's color, based on their highest role. If <hex=true>, the output will be in hex (#ffffff).
---

# user.color <hex=true> &lt;user>

### Examples

{% tabs %}
{% tab title="Input" %}

```text
{user.color}
```

{% endtab %}

{% tab title="Output" %}

```text
#95a5a6
```

{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Input" %}

```text
{user.color;true}
```

{% endtab %}

{% tab title="Output" %}

```text
9807270
```

{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Input" %}

```text
{user.color;true;Atlas}
```

{% endtab %}

{% tab title="Output" %}

```text
#03a9f4
```

{% endtab %}
{% endtabs %}
