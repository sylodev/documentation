# Objects

Object tags are [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) wrapped in `{}`. They are useful for storing multiple values in a single `{store}` key, for embeds, and more.

```yaml
{responder.embed;{{ "title": "test" }}}
{responder.embed title="override";{{ "title": "test" }}}
```

```yaml
{=data;{{ "key": "{user.id}" }}}
{$data.key}
{=data.key;new value}
{$data.key}
```

Objects are parsed by removing the `{}`, running any tags, then parsing the result as JSON. For tags in the object, a best-effort attempt is made to escape characters like `"`, but you may still encounter parsing related errors due to tag results.

```yaml
// This works because it is a top-level tag call, so the result is escaped.
{=quot;"}
{{
"key": "value {$quot} test"
}}
```
