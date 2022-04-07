# Scopes

<!-- Scopes are an advanced feature that is used in loops and functions. They limit variable assignments to the scope of the function or loop. -->

Scopes limit where variables can be accessed. For example, the body of a function is a separate scope. Variables in the parent scope are accessible in the function body, but variables created in the function body are inaccessible in the parent scope once the function is called.

```json
{=parent_scope_value;hello} // create a "parent_scope_value" variable and set it to "hello"
[#function;my_function]
	// Create a "child_scope_value" variable and set it to "world"
	{=child_scope_value;world}
	// This is fine. "parent_scope_value" is accessible in the function body because it was created in the parent scope. "child_scope_value" is also fine because we created it in the function body.
	{$parent_scope_value}
	// "child_scope_value" is also fine because we created it in the function body, and we haven't changed scopes.
	{$child_scope_value}
[/function]
{my_function}

// This will throw an error because "child_scope_value" is only assigned in the function body, making it inaccessible in the parent scope.
{$parent_scope_value} {$child_scope_value}
```

This also applies to loops. Variables created in the loop will be cleared on each iteration.

```json
// Create an array with three items
{=items;{[one;two;three]}}
[#for;{=item};{$items}] // Iterate over that array
	{$item} // Print the value
[/for]
{$item} // This will throw an error because "item" is only available in the for loop.
```

Modifying values from the parent scope in the child scope will modify them in the parent scope.

```json
{=total;0}
{=items;{[one;two;three]}}
[#for;{=item};{$items}]
	{=total;{math;{$total} + 1}}
[/for]
{$total} // 3
```

Because `total` was initialised before entering the `for` scope, it will not be cleared and the outer scope will be able to access it.
