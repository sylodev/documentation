---
description: Returns a boolean indicating whether "url" is a valid URL.
---
# {utils.isUrl;&lt;url>}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{utils.isUrl;https://atlas.bot}
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
{utils.isUrl;example.com}
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
{utils.isUrl;hahaepic}
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
{utils.isUrl;}
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
{utils.isUrl;protocol://example.com}
```
{% endtab %}
{% tab title="Output" %}
```text
false
```
{% endtab %}
{% endtabs %}