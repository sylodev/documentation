---
description: Wait for a message in the channel. <author> will listen for only messages sent by that user. <timeout> is how long to wait for messages matching the filter before giving up and returning nothing.
---
# {channel.awaitmessage;&lt;author>;[timeout=30s];[channel]}
## Examples
{% tabs %}
{% tab title="Input" %}
```text
{channel.awaitmessage;{user.id};60}
```
{% endtab %}
{% tab title="Output" %}
```text
A message I sent to test this tag.
```
{% endtab %}
{% endtabs %},{% tabs %}
{% tab title="Input" %}
```text
{channel.awaitmessage;{user.id};5}
```
{% endtab %}
{% endtabs %}