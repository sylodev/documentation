# Arrays & Objects

## `{split;input;separator}`

Splits `input` into an array at `separator`. `separator` can be an arbitrary string or regex pattern.

```json
{split;one,two,three;,}          // {[one;two;three]}
{split;woah party tricks;/ +/g}  // {[woah;party;tricks]}
{split;one,two,three;/(,)/g}     // {[one;,;two;,;three]}, you can use groups to keep the separator in the output array.
```

## `{join;array;separator}`

Join the items of an array together with the given separator.

```json
{=array;{[one;two;three]}}
{join;{$array};,} // one,two,three
```

## `{push return?;array;value}`

Adds an item to the end of an array.

This will mutate the original array, which is why nothing is returned by default.

```json
{=array;{[one]}}
{push;{$array};two}  // no output
{$array}             // {[one;two]}
{push return;{$array};three}  // {[one;two;three]}
```

## `{pop}`

Returns and deletes the last item of an array.

```json
{=array;{[one;two;three]}}
{pop;{$array}}  // three
{$array}        // {[onw;two]}
```

## `{shift}`

Returns and deletes the first item of an array.

```json
{=array;{[one;two;three]}}
{shift;{$array}}  // one
{$array}          // {[two;three]}
```

## `{unshift return?;array;value}`

Adds an item to the front of an array. Essentially the same as `{push}` but the item is added to the beginning of the array.

```json
{=array;{[three]}}
{unshift;{$array};two}  // no output
{$array}                // {[two;three]}
{unshift return;{$array};one}  // {[one;two;three]}
```

## `{for;init;iterable;body}`

Iterates over array items until `{break}` is encountered or it reaches the end of the array.

```json
{=array;{[one;two;three]}}

// regular format
{for;{=item};{$array};{$item}}  // one two three

// block format
[#for;{=item};{$array}]
  {$item}
[/for]
```

## `{keys;object}`

Get the keys of an object. Useful when you want to iterate over the keys or values of an object. Only top-level keys are returned

```json
{=object.key;value}
{=object.nested.key;value}
{keys;{$object}} // {[key;nested]}
```

## `{includes;array;item}`

Check whether an array includes an item.

```json
{=array;{[one;two;three]}}
{includes;{$array};two} // true
```

## `{sort reverse?;array;key?}`

Sort an array. Returns a new array and does not mutate the original.

- `reverse?` whether to reverse the array after sorting. Defaults to `false`.
- `array` the array to sort
- `key` the key to sort by if the array is an array of objects.

## `{slice;target;start;end}`

Get a slice of an array or string. If `end` is not specified, it is assumed to be the length of the target.

```json
{=array;{[one;two;three]}}
{slice;{$array};1} // {[two;three]}
{slice;{$array};1;2} // {[two]}
```

## `{index mode?;array;value}`

Return the index at which a given element can be found in the array. Defaults to the first instance.

- `mode?` an option mode for indexing the array. Can be `last` or `all`.
- `array` the array to index
- `value` the value to look for
  
## `{filter;array;value;operator?}`

Return an array with just the elements that pass a check.

- `array` the array to filter
- `value` the value to filter by
- `operator` the operator to filter by

The available operators are `==`, `===`, `!=`, `!==`, `>`, `>=`, `<`, `<=`, `startswith`, `endswith`, `contains`, `includes`, `has` and `matches`.

## `{splice;array;array...}`

Combines two or more arrays into one.

```json
{=first_array;{[one;two;three]}}
{=second_array;{[four;five;six]}}

{splice;{$first_array};{$second_array}} // {[one;two;three;four;five;six]}
```