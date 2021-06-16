---
description: Sets a key to a value in persistent storage.
---

# perset \<key\> [value]

### Examples

{% tabs %}
{% tab title="Input" %}

```text
{perset;key;value}
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
{perset;key;value} {perget;key}
```

{% endtab %}

{% tab title="Output" %}

```text
value
```

{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Input" %}

```text
{perset;key}
```

{% endtab %}

{% tab title="Output" %}

```text

```

{% hint style="info" %}
To delete a key.
{% endhint %}
{% endtab %}
{% endtabs %}
