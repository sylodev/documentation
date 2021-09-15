---
description: Temporarily holds up processing. Tags before it will run normally, tags after it will have to wait. Aside from very specific circumstances, you should never use this tag. 
---
# {sleep;&lt;duration>}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{channel.send;before the sleep} {sleep;10} {channel.send;yay im back}
```
{% endtab %}
{% tab title="Output" %}
```text
before the sleep
...
yay im back
```
{% hint style="info" %}
"before the sleep" would be sent first, then 10 seconds later "yay im back" would follow. 
{% endhint % }{% endtab %}
{% endtabs %}