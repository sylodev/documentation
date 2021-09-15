---
description: Finds the pattern in the target. Supports regex. 

If "forceRegex" is true, errors are thrown if we determine the pattern is unsafe instead of silently falling back to wildcard matching. 
If you are using regex, "forceRegex" should always be on. The default is for backwards compatibility.
---
# {find;&lt;target>;&lt;pattern>;[group];[flags];[forceRegex]}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{find;This is a test;test}
```
{% endtab %}
{% tab title="Output" %}
```text
test
```
{% endtab %}
{% endtabs %},{% tabs %}
{% tab title="Input" %}
```text
{find;fortnite;fort*}
```
{% endtab %}
{% tab title="Output" %}
```text
fortnite
```
{% endtab %}
{% endtabs %},{% tabs %}
{% tab title="Input" %}
```text
{find;example phrase;test}
```
{% endtab %}
{% endtabs %},{% tabs %}
{% tab title="Input" %}
```text
{find;The date is 21-08-2020;([0-9]{1,2})(?:/|-)([0-9]{1,2})(?:/|-)([0-9]{2,4});3}
```
{% endtab %}
{% tab title="Output" %}
```text
2020
```
{% endtab %}
{% endtabs %},{% tabs %}
{% tab title="Input" %}
```text
{find;example;(x+x+)+y;1;gi;true}
```
{% endtab %}
{% endtabs %}