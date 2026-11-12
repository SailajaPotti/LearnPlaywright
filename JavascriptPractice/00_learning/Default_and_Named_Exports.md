# JavaScript Default and Named Exports

Imagine each JavaScript file is a little box. **Exports** are the things you
choose to let other files take out of that box and use.

There are two common ways to export things: **default** and **named**.

## Named exports

Named exports are like labeled items in the box. Each item keeps its name, and
you use curly braces to ask for the item you want.

```js
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

In another file, import the names you need:

```js
// app.js
import { add, subtract } from "./math.js";

console.log(add(2, 3));      // 5
console.log(subtract(5, 2)); // 3
```

The names inside the braces must match the exported names. You can also give an
imported item a different local name:

```js
import { add as sum } from "./math.js";

console.log(sum(2, 3)); // 5
```

A file can have many named exports.

## Default export

A default export is the box's main item. A file can have only **one** default
export.

```js
// greeting.js
export default function greet(name) {
  return `Hello, ${name}!`;
}
```

Import it without curly braces. You choose the name to use in your file:

```js
// app.js
import sayHello from "./greeting.js";

console.log(sayHello("Sam")); // Hello, Sam!
```

Here, the exported function is called `greet` in its own file, but we called it
`sayHello` after importing it. That's okay because a default import gets its
name from the importing file.

## Using both kinds together

A file can have one default export and any number of named exports:

```js
// math.js
export const add = (a, b) => a + b;

export default function multiply(a, b) {
  return a * b;
}
```

You can import the default item and named items in one line:

```js
// app.js
import multiply, { add } from "./math.js";

console.log(multiply(2, 3)); // 6
console.log(add(2, 3));      // 5
```

## Quick comparison

| | Default export | Named export |
|---|---|---|
| How many in one file? | One | Any number |
| Import syntax | No curly braces | Curly braces |
| Import name | You choose it | It matches the export (unless you use `as`) |

```js
import mainThing from "./file.js";       // default
import { helper } from "./file.js";      // named
import mainThing, { helper } from "./file.js"; // both
```

## Easy way to remember

- **Default:** one main thing; import it without `{}` and choose its local name.
- **Named:** labeled things; import them inside `{}` using their exported names.

Both styles let one JavaScript file share code with another. Use the style
that makes the file's purpose easiest to understand, and follow the style
already used by the project.