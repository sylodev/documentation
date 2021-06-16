---
description: Returns the date the channel was created. "exact" is a true/false value on whether to include hours/minutes.
---

# channel.createdAt \<exact\> \<channel\>

### Examples

{% tabs %}
{% tab title="Input" %}

```text
{channel.createdAt;general}
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
{channel.createdAt;general;true}
```

{% endtab %}

{% tab title="Output" %}

```text
Jul 31, 2018, 9:19 PM
```

{% endtab %}
{% endtabs %}
