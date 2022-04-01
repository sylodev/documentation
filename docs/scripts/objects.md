---
render_with_liquid: false
---

# Objects

Objects are used to store data in a structured format. You can use them to create embeds or store data about things.

```
{responder.embed;{{ "title": "test" }}}
{responder.embed title="override";{{ "title": "test" }}}
```

```
{=data;{{ "key": "{user.id}" }}}
{$data.key}
{=data.key;new value}
{$data.key}
```
