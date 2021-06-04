---
description: Gets a raw setting value. This is an advanced tag, if you don't understand how to use it or what it does, then you probably shouldn't be using it.
---

# settings <key>

### Examples

{% tabs %}
{% tab title="Input" %}
```text
{settings;prefix}
```
{% endtab %}

{% tab title="Output" %}
```text
a!
```{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Input" %}
```text
{settings;plugins.moderation.state}
```
{% endtab %}

{% tab title="Output" %}
```text
enabled
```{% endtab %}
{% endtabs %}