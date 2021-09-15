---
description: Replaces anything matching the pattern in the target with the replacement.
---
# {replace;&lt;target>;&lt;pattern>;[replacement]}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{replace;kittens are the best;kittens;puppies}
```
{% endtab %}
{% tab title="Output" %}
```text
puppies are the best
```
{% endtab %}
{% endtabs %}
{% tabs %}
{% tab title="Input" %}
```text
{replace;Kittens are the best;kittens;puppies}
```
{% endtab %}
{% tab title="Output" %}
```text
puppies are the best
```
{% endtab %}
{% hint style="info" %}
This tag is case-insensitive.
{% endhint % }
{% endtabs %}
{% tabs %}
{% tab title="Input" %}
```text
{replace;An example phrase;([A-z]+);($1)}
```
{% endtab %}
{% tab title="Output" %}
```text
(an) (example) (phrase)
```
{% endtab %}
{% hint style="info" %}
This example is advanced and uses regex. It surrounds words matched by `[A-z]+` with `(` and `)`.
{% endhint % }
{% endtabs %}