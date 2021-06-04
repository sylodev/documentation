---
description: Returns true if the input is a valid Discord snowflake, or false for any other circumstance. This does not mean the snowflake is definitely used by something, just that it could be in use or used in the future.
---

# utils.isSnowflake <string>

### Examples

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
{% endtabs %}

{% tabs %}
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
{% endtabs %}

{% tabs %}
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
{% endtabs %}

{% tabs %}
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