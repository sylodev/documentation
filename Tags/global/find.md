---
description: Finds <search> in <target>, now with extra regexp flavour. <group> is an optional capture group to return when using regex. <flags> are any regex flags like "g" or "i", you can mix and match groups like "gi".
---

# find <target> <search> <group> <flags=i>

### Examples

{% tabs %}
{% tab title="Input" %}
```text
{find;This is a test;test}
```
{% endtab %}

{% tab title="Output" %}
```text
test
```
{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Input" %}
```text
{find;This does not include the forbidden word;test}
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
{find;The date is 07-08-2018;([0-9]{1,2})(?:/|-)([0-9]{1,2})(?:/|-)([0-9]{2,4});3}
```
{% endtab %}

{% tab title="Output" %}
```text
2018
```
{% hint style="info" %}
Using some regex magic, this will match dates and return the year using the third capture group. This is an advanced example.
{% endhint %}
{% endtab %}
{% endtabs %}