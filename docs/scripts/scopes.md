# Scopes

Scopes are an advanced feature that is used in loops and functions. They limit variable assignments to the scope of the function or loop.

```
{=items;{[one;two;three]}}
[#for;{=item};{$items}]
	{$item}
[/for]
{$item} // This will throw an error because "item" is only available in the for loop.
```

You can assign variables outside of a scope and modify them inside a scope. Variables that exist outside of the scope before it is created will not be cleared upon leaving the scope.

```
{=total;0}
{=items;{[one;two;three]}}
[#for;{=item};{$items}]
	{=total;{math;{$total} + 1}}
[/for]
{$total} // 3
```

Because `total` was initialised before entering the `for` scope, it will not be cleared and the outer scope will be able to access it.
