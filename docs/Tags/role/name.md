---
description: Gets the name of a role.
---
# {role.name;&lt;role>}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{role.name;tes}
```
{% endtab %}
{% tab title="Output" %}
```text
test
```
{% hint style="info" %}
This assumes the role name is "test" and the input is incomplete.
{% endhint % }{% endtab %}
{% endtabs %}
{% tabs %}
{% tab title="Input" %}
```text
{role.name;340583469149192204}
```
{% endtab %}
{% tab title="Output" %}
```text
Developer
```
{% hint style="info" %}
This assumes the ID "340583469149192204" is for the "Developer" role.
{% endhint % }{% endtab %}
{% endtabs %}