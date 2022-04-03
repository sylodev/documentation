# Arrays

Arrays are lists of items that can be iterated over or passed to other tags. `{[one;two;three]}` would create an array with 3 elements.

You can assign them to variables

```
{=myarray;{[one;two;three]}}
{$myarray}
{$myarray.0} // one
```

And you can iterate over them with `{for}`

```
{=target;{[one;two;three]}}
[#for;{=item};{$target}]
	{$item}
[/for]
```

would print

```
one
two
three
```
