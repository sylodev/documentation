---
description: Wait for a message in a channel. Returns the message content. Author is a user ID, when set only accept messages from that user. Timeout is, in seconds, how long to wait before giving up if no messages are sent. Defaults to 30s.
---

# channel.awaitmessage &lt;author> &lt;timeout> &lt;channel>

### Examples

{% tabs %}
{% tab title="Input" %}

```text
{channel.awaitmessage;{user.id};60}
```

{% endtab %}

{% tab title="Output" %}

```text
wew
```

{% endtab %}
{% endtabs %}
