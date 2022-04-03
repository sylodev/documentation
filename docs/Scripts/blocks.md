# Blocks

<!-- todo: this is awful -->

Both `{if}` and `{for}` also support a block syntax with regular brackets. For the `[#if]` block, it is not possible to have a body that will run when the condition is false.

## `[#if]`

Syntax: `[#if;condition] body [/if]`

```json
[#if;{ticket.reason}]
    // Add the ticket reason only if it is not empty
    {responder.embedField name="Reason" value={ticket.reason}}
[/if]
```

## `[#for]`

Syntax: `[#for;init;iterable] body [/for]`

```json
{=array;{[one;two;three]}}
[#for;{=item};{$array}]
	{responder.embedField name="Item Value" value={$item}
[/for]
```
