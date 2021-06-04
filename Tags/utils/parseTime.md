---
description: Parses a "human" time (e.g, "in 2h", "2h3m") to a timestamp compatible with {utils.time}. This essentially just throws the mute/reminder parser at it.
---

# utils.parseTime [time]

### Examples

{% tabs %}
{% tab title="Input" %}
```text
{utils.parseTime;1h2m}
```
{% endtab %}

{% tab title="Output" %}
```text
2019-04-01T23:33:26.128Z
```
{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Input" %}
```text
{utils.time;{utils.parseTime;1h3m}}
```
{% endtab %}

{% tab title="Output" %}
```text
Apr 1, 2019
```
{% endtab %}
{% endtabs %}