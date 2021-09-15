---
description: A semi-colon. Use this if the parser keeps eating your semi-colon.
---
# {semi}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{semi}
```
{% endtab %}
{% tab title="Output" %}
```text
;
```
{% endtab %}
{% endtabs %}
{% tabs %}
{% tab title="Input" %}
```text
{set;key;Whats up{semi} gamer} {get;key}
```
{% endtab %}
{% tab title="Output" %}
```text
Whats up; gamer
```
{% endtab %}
{% endtabs %}