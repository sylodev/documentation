---
description: A right bracket. Use this if the parser keeps eating brackets you want to be shown.
---
# {r}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{r}
```
{% endtab %}
{% tab title="Output" %}
```text
}
```
{% endtab %}
{% endtabs %}
{% tabs %}
{% tab title="Input" %}
```text
{set;key;Whats up {r} gamer} {get;key}
```
{% endtab %}
{% tab title="Output" %}
```text
Whats up } gamer
```
{% endtab %}
{% endtabs %}