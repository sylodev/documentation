---
description: Compares values. Unlike most other tags, conditional parsing is enabled, meaning yes will be parsed and no will not in {if;true;===;true;yes;no}.

Available operators are `==`, `!=`, `>=`, `>`, `<=`, `<`, `!==`, `===`, `startswith`, `endswith`, `includes`. Adding '!' before an operator will invert the output.
---

# if see examples

### Examples

{% tabs %}
{% tab title="Input" %}
```text
{if;false;yay}
```
{% endtab %}

{% tab title="Output" %}
```text
yay
```{% endtab %}
{% endtabs %}{% tabs %}
{% tab title="Input" %}
```text
{if;condition;yay;nay}
```
{% endtab %}

{% tab title="Output" %}
```text
yay
```{% endtab %}
{% endtabs %}{% tabs %}
{% tab title="Input" %}
```text
{if;cond;===;cond;yay}
```
{% endtab %}

{% tab title="Output" %}
```text
yay
```{% endtab %}
{% endtabs %}{% tabs %}
{% tab title="Input" %}
```text
{if;cond;!==;cond;yay}
```
{% endtab %}

{% tab title="Output" %}
```text

```{% endtab %}
{% endtabs %}{% tabs %}
{% tab title="Input" %}
```text
{if;true;===;true;yay;nay}
```
{% endtab %}

{% tab title="Output" %}
```text
yay
```{% endtab %}
{% endtabs %}{% tabs %}
{% tab title="Input" %}
```text
{if;test;!includes;no;true}
```
{% endtab %}

{% tab title="Output" %}
```text
true
```{% endtab %}
{% endtabs %}