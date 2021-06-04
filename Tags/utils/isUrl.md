---
description: Returns true if <string> is a valid web URL, or false if it's anything else.
---

# utils.isUrl <string>

### Examples

{% tabs %}
{% tab title="Input" %}
```text
{utils.isUrl;https://atlas.bot}
```
{% endtab %}

{% tab title="Output" %}
```text
true
```{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Input" %}
```text
{utils.isUrl;hahaepic}
```
{% endtab %}

{% tab title="Output" %}
```text
false
```{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Input" %}
```text
{utils.isUrl;}
```
{% endtab %}

{% tab title="Output" %}
```text
false
```{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Input" %}
```text
{utils.isUrl;protocol://example.com}
```
{% endtab %}

{% tab title="Output" %}
```text
false
```{% endtab %}
{% endtabs %}