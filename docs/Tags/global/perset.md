---
description: 
Sets a key to a value in persistent storage. 
If "value" is empty, the key is deleted.

Unless you need absolutely must persist data between action invocations, you should use {set} and {get}.

Tags are retrieved when the action starts and are only persisted once an action finishes executing. That means that if you have an action that triggers
and runs for 5 seconds and in that time updates a key, and during that time the same action triggers again and writes to the same key as the previous action, 
the action that finishes last will overwrite the value the action before it set. This can have serious effects with things like an economy action that writes to
users balances.

---
# {perset;&lt;key>;[value]}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{perset;my-key;value}
```
{% endtab %}
{% endtabs %}
{% tabs %}
{% tab title="Input" %}
```text
{perset;my-key;value} {perget;my-key}
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
{perset;my-key} {perget;my-key}
```
{% endtab %}
{% endtabs %}