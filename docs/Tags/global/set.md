---
description: Sets a key to a value in volatile storage. If "value" is empty, the key is deleted.
---
# {set;&lt;key>;[value]}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{set;my-key;value}
```
{% endtab %}
{% tab title="Output" %}
```text

```
{% endtab %}
{% hint style="info" %}
This tag outputs nothing on success.
{% endhint % }
{% endtabs %}
{% tabs %}
{% tab title="Input" %}
```text
{set;my-key;value} {get;my-key}
```
{% endtab %}
{% tab title="Output" %}
```text
value
```
{% endtab %}
{% endtabs %}
{% tabs %}
{% tab title="Input" %}
```text
{set;my-key} {get;my-key}
```
{% endtab %}
{% tab title="Output" %}
```text

```
{% endtab %}
{% hint style="info" %}
With no value the key is deleted.
{% endhint % }
{% endtabs %}