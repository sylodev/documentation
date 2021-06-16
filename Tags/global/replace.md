---
description: Replaces <search\> in <string\> with <replacement\>, now with extra regexp flavour.
---

# replace <string\> <search\> [replacement]

### Examples

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

{% hint style="info" %}
Note the capitalized "Kittens". {replace} is case-insensitive.
{% endhint %}
{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Input" %}

```text
{replace;The quick brown fox jumped over the lazy fox;([A-z]+);($1)}
```

{% endtab %}

{% tab title="Output" %}

```text
(The) (quick) (brown) (fox) (jumped) (over) (the) (lazy) (fox)
```

{% hint style="info" %}
This example uses regular expressions, essentially surrounding groups of a-z in (). Google is your friend, but chances are you should just leave this alone if you don't understand it.
{% endhint %}
{% endtab %}
{% endtabs %}
