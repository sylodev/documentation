---
description: Formats the time to a human-readable format. If no time is provided, it defaults to the current date.
---
# {utils.time;[exact=true];[time]}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{utils.time}
```
{% endtab %}
{% tab title="Output" %}
```text
Dec 10, 2018, 4:08 PM
```
{% endtab %}
{% endtabs %},{% tabs %}
{% tab title="Input" %}
```text
{utils.time;true;Mon, 10 Dec 2018 16:06:14 GMT}
```
{% endtab %}
{% tab title="Output" %}
```text
Dec 10, 2018, 4:06 PM
```
{% endtab %}
{% endtabs %},{% tabs %}
{% tab title="Input" %}
```text
{utils.time;false}
```
{% endtab %}
{% tab title="Output" %}
```text
Dec 10, 2018
```
{% endtab %}
{% endtabs %},{% tabs %}
{% tab title="Input" %}
```text
{utils.time;true;10d}
```
{% endtab %}
{% tab title="Output" %}
```text
Dec 10, 2018, 4:06 PM
```
{% endtab %}
{% endtabs %}