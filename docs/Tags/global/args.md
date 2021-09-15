---
description: Access user-provided arguments.
---
# {args;[index];[range=1]}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{args;1}
```
{% endtab %}
{% tab title="Output" %}
```text
arg1
```
{% hint style="info" %}
Input would be "a!actionlabel arg1 arg2".
{% endhint %}
{% endtab %}
{% endtabs %}
{% tabs %}
{% tab title="Input" %}
```text
{args;2}
```
{% endtab %}
{% tab title="Output" %}
```text
arg2
```
{% hint style="info" %}
Input would be "a!actionlabel arg1 arg2".
{% endhint %}
{% endtab %}
{% endtabs %}
{% tabs %}
{% tab title="Input" %}
```text
{args}
```
{% endtab %}
{% tab title="Output" %}
```text
arg1 arg2
```
{% hint style="info" %}
Input would be "a!actionlabel arg1 arg2".
{% endhint %}
{% endtab %}
{% endtabs %}
{% tabs %}
{% tab title="Input" %}
```text
{args;2;2}
```
{% endtab %}
{% tab title="Output" %}
```text
arg2 arg3
```
{% hint style="info" %}
Input would be "a!actionlabel arg1 arg2 arg3 arg4
{% endhint %}
{% endtab %}
{% endtabs %}
{% tabs %}
{% tab title="Input" %}
```text
{args;2;infinity}
```
{% endtab %}
{% tab title="Output" %}
```text
arg2 arg3
```
{% hint style="info" %}
This would return all args at index 2 to infinity.
{% endhint %}
{% endtab %}
{% endtabs %}