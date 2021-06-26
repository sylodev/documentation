---
description: Gets the hex code of a role. If <hex=false>, the color will be in base 10 and may be empty if the role has no color.
---

# role.color <hex=true> &lt;role>

### Examples

{% tabs %}
{% tab title="Input" %}

```text
{role.color;Developer}
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
{role.color;Developer;false}
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
{role.color;@everyone}
```

{% endtab %}

{% tab title="Output" %}

```text
0
```

{% hint style="info" %}
The everyone role has no color and cannot have one, so it will always return 0.
{% endhint %}
{% endtab %}
{% endtabs %}
