---
description: Check if "input" is a valid Discord snowflake.
---
# {utils.isSnowflake;&lt;input>}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{utils.isSnowflake;111372124383428608}
```
{% endtab %}
{% tab title="Output" %}
```text
true
```
{% endtab %}
{% endtabs %},{% tabs %}
{% tab title="Input" %}
```text
{utils.isSnowflake;awd}
```
{% endtab %}
{% tab title="Output" %}
```text
false
```
{% endtab %}
{% endtabs %},{% tabs %}
{% tab title="Input" %}
```text
{utils.isSnowflake;}
```
{% endtab %}
{% tab title="Output" %}
```text
false
```
{% endtab %}
{% endtabs %},{% tabs %}
{% tab title="Input" %}
```text
{utils.isSnowflake;{user.id}}
```
{% endtab %}
{% tab title="Output" %}
```text
true
```
{% endtab %}
{% endtabs %}