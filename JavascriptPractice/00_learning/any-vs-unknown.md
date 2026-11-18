# `any` vs `unknown` in TypeScript

Imagine you have a box, but you don't know what's inside.

- **`any`** is a box you can use without checking what's inside. TypeScript won't warn you if you use it the wrong way.
- **`unknown`** is a box you must check before using. TypeScript helps you avoid mistakes.

| | `any` | `unknown` |
|---|---|---|
| What can go inside? | Anything | Anything |
| Can you use what's inside right away? | Yes, but it might cause a mistake. | No. Check what's inside first. |
| Does TypeScript help keep you safe? | Not much. It lets you skip its checks. | Yes. It asks you to check the value first. |
| Simple example | An unchecked box | A box you inspect before using |
| Usually choose this? | Only when you really need to skip checks. | Yes, when you don't know a value's type yet. |

## Example

```ts
let uncheckedBox: any = "hello";
uncheckedBox.toFixed(2); // TypeScript allows this, but it fails: "hello" isn't a number.

let mysteryBox: unknown = "hello";
// mysteryBox.toUpperCase(); // TypeScript asks us to check it first.

if (typeof mysteryBox === "string") {
  console.log(mysteryBox.toUpperCase()); // Safe: we checked that it's text.
}
```

## Remember

**`any`** means “use it without checking.”  
**`unknown`** means “check it before using it.”

When you're unsure, choose **`unknown`**. It helps catch mistakes before your code runs.
