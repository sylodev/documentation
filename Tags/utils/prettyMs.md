---
description: Converts milliseconds to a pretty date. If verbose is true, it will use long names instead of short names, like "minutes" instead of "m".
---

# utils.prettyMs [milliseconds] <verbose=true>

### Examples

{% tabs %}
{% tab title="Input" %}
```text
{utils.prettyMs;133769}
```
{% endtab %}

{% tab title="Output" %}
```text
2 minutes 13 seconds
```
{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Input" %}
```text
{utils.prettyMs;133769;false}
```
{% endtab %}

{% tab title="Output" %}
```text
2m 13s
```
{% endtab %}
{% endtabs %}