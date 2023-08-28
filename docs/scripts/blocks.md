# Blocks

Blocks are a way to format tags in a way that is more readable. You can use them to format `{if}`, `{loop}` and `{function}` in a way that is slightly more readable. Blocks aren't required, but they are recommended for readability in some circumstances.

Tag names in blocks are prefixed with `#`. Without this prefix, the block will be ignored. Block nesting is supported.

## `[#if]`

Syntax: `[#if;condition] body [/if]`

```json
[#if;{ticket.reason}]
    // Add the ticket reason only if it is not empty
    {responder.embedField name="Reason" value={ticket.reason}}
[/if]
```

See also: [`{if}`](../tags/global.md#if)

## `[#for]`

Syntax: `[#for;init;iterable] body [/for]`

```json
{=array;{[one;two;three]}}
[#for;{=item};{$array}]
	{responder.embedField name="Item Value" value={$item}}
[/for]
```

See also: [`{for}`](../tags/arrays-and-objects.md#forinititerablebody)