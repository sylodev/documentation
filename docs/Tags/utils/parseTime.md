---
description: Parses a "human" time (e.g, "in 2h", "2h3m") to a timestamp compatible with {utils.time}. This essentially just throws the mute/reminder parser at it.
---
# {utils.parseTime;&lt;time>}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{utils.parseTime;1h}
```
{% endtab %}
{% tab title="Output" %}
```text
2021-08-21T04:41:01.950Z
```
{% endtab %}
{% endtabs %}
{% tabs %}
{% tab title="Input" %}
```text
{utils.time;{utils.parseTime;1h}}
```
{% endtab %}
{% tab title="Output" %}
```text
Aug 21, 2021
```
{% endtab %}
{% endtabs %}
{% tabs %}
{% tab title="Input" %}
```text
{utils.time;{utils.parseTime;1629520892435}}
```
{% endtab %}
{% tab title="Output" %}
```text
Aug 21, 2021
```
{% endtab %}
{% endtabs %}