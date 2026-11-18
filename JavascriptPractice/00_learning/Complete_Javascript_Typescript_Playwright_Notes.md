# JavaScript, TypeScript, and Playwright Complete Memory Notes

Use this as a revision sheet for the practice programs in `JavascriptPractice`.
The inventory covers **234 JavaScript/TypeScript source files** and excludes generated dependency folders.

## Quick Recall Rules

- Prefer `const`; use `let` only when reassignment is required. Avoid `var`.
- Prefer `===` and `!==`; loose equality can perform type conversion.
- `&&` and `||` return operands and can short-circuit. `??` selects the right side only for `null` or `undefined`.
- Strings are immutable. Check whether an array/object method mutates the original.
- `return` ends a function. `break` ends a loop or `switch`. `continue` skips the current iteration.
- `await` pauses an async function for a Promise. Await independent work carefully to avoid unnecessary sequential delays.
- Prefer `unknown` over `any` in TypeScript, and narrow it before use.
- Closures retain access to variables from their lexical scope.
- In Playwright, prefer role, label, and text locators, and await browser actions.

## 1. JavaScript Basics

**Remember:** `console.log()` prints values, statements perform actions, and expressions produce values. Arithmetic combines values with `+`, `-`, `*`, `/`, `%`, and `**`.

## 2. Keywords and Identifiers

**Remember:** JavaScript keywords have reserved meanings. An identifier names a variable, function, parameter, class, or property. Use readable names and valid identifier rules. The JavaScript engine parses, compiles, and executes code.

## 3. Literals

**Remember:** Literals are values written directly in source code: numbers, strings, booleans, `null`, and `undefined`. Arrays and objects can also contain literal values.

## 4. Operators

**Remember:** Separate arithmetic, assignment, comparison, logical, ternary, and `typeof` operators. Ternary syntax is `condition ? valueIfTrue : valueIfFalse`.

## 5. Increment, Decrement, and Nullish Coalescing

**Remember:** Prefix `++x`/`--x` changes first and then uses the new value. Postfix `x++`/`x--` uses the old value first. `??` falls back only for `null` or `undefined`, unlike `||`.

## 6. `if`/`else`

**Remember:** `if` runs for a truthy condition. `else if` checks alternatives. `else` is the fallback. Falsy values are `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, and `NaN`.

## 7. `switch`

**Remember:** `switch` compares an expression against `case` values with strict equality. Use `break` to prevent fall-through. `default` handles no match.

## 8. User Input

**Remember:** Browser input comes from prompts, forms, events, or the DOM. Validate it and convert text types before calculations. In Node, use an input library or standard input.

## 9. For Loops

**Remember:** `for(initialization; condition; update)` repeats while the condition is truthy. `break` exits and `continue` skips the current iteration.

## 10. `while`

**Remember:** Use `while(condition)` for state-based repetition. Update the state inside the loop or it can run forever.

## 11. `do...while`

**Remember:** `do { ... } while(condition)` executes once before checking the condition.

## 12. Arrays

**Remember:** Arrays are ordered and zero-indexed.

| Need | Common methods |
|---|---|
| Add/remove end | `push`, `pop` |
| Add/remove beginning | `unshift`, `shift` |
| Copy part | `slice` |
| Replace/remove in place | `splice` |
| Transform | `map` |
| Keep matching items | `filter` |
| Accumulate | `reduce` |
| Find one item | `find`, `findIndex` |
| Sort | `sort`; use `(a, b) => a - b` for ascending numbers |

Default `sort()` is lexicographic for strings and turns numbers into text.

## 13. Functions

**Remember:** A function accepts parameters, executes a body, and optionally `return`s a value. Functions are first-class values and can be passed or returned.

```js
function add(a, b) {
  return a + b;
}

const multiply = (a, b) => a * b;
```

## 14. Scope, Hoisting, and the Temporal Dead Zone

**Remember:** Prefer `const`, use `let` for reassignment, and avoid `var`. Hoisting sets declarations up in a scope, but `let`/`const` remain inaccessible until initialization (the temporal dead zone).

## 15. Closures

**Remember:** A closure is a function combined with variables from its lexical environment. It can preserve private state after the outer function returns.

```js
function makeCounter() {
  let count = 0;
  return () => ++count;
}
```

## 16. Strings

**Remember:** Strings are immutable sequences of characters. Common operations include `length`, indexing, `slice`, `includes`, `startsWith`, `toUpperCase`, `toLowerCase`, `trim`, and template literals.

## 17. Objects

**Remember:** Objects map keys to values and may contain methods. Read with dot or bracket syntax. Destructure to extract properties and use spread to copy or merge objects.

```js
const { name, age } = user;
const copy = { ...user, active: true };
```

## 18. Multidimensional Arrays

**Remember:** A multidimensional array is an array of arrays. Use `array[row][column]` and nested loops for rows and columns.

## 19. Callbacks

**Remember:** A callback is a function passed to another function and invoked later. It is commonly used for events, array methods, and asynchronous operations.

## 20. Promises

**Remember:** A Promise is pending, fulfilled, or rejected. Use `then`/`catch`/`finally`, or `await` inside `async` code.

| Helper | Purpose |
|---|---|
| `Promise.all` | All succeed or reject immediately |
| `Promise.allSettled` | Wait for every result |
| `Promise.race` | First settled result |
| `Promise.any` | First fulfilled result |

## 21. Async/Await

**Remember:** An `async` function always returns a Promise. `await` waits for fulfillment and throws on rejection. Handle failures with `try/catch/finally`.

```js
async function load() {
  try {
    return await fetchData();
  } catch (error) {
    console.error(error);
  }
}
```

## 22. Modules

**Remember:** Default export: one main value per file. Named exports: multiple labeled values. Import named values with `{}` and default values without `{}`.

```js
// default
export default function greet() {}
import greet from "./greet.js";

// named
export const add = (a, b) => a + b;
import { add as sum } from "./math.js";
```

## 23. Classes and Objects

**Remember:** A class is a blueprint. `constructor` initializes instances. `new` creates an instance. Methods describe behavior. `this` identifies the instance in a normal method call.

## 24. Playwright

**Remember:** Playwright Test uses `test`, `expect`, `page`, and locators. Every async navigation, interaction, and assertion should be awaited.

```ts
test("submit form", async ({ page }) => {
  await page.goto("https://example.com");
  await page.getByRole("textbox", { name: "Name" }).fill("Sam");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page).toHaveURL(/success/);
});
```

Prefer role/label/text locators over CSS tied to implementation details.

## 25. Constructors

**Remember:** The constructor runs when `new` creates an instance and initializes instance properties. Pass required initial state as constructor parameters.

## 26. Encapsulation

**Remember:** Hide implementation/state and expose only needed operations. JavaScript private fields use `#field`; TypeScript can use `private`/`protected` and public methods/getters/setters.

## 27. Inheritance

**Remember:** `extends` makes a subclass inherit behavior. `super()` calls the parent constructor. `super.method()` calls the parent implementation. Subclasses can add or override behavior.

## 28. Polymorphism

**Remember:** Different implementations can be used through the same method/interface contract. A subclass can override a parent method while callers continue using the shared method name.

## 29. Interview Questions

**Remember:** Explain surprising output by checking precedence, equality, hoisting, closure scope, mutation, Promise timing, and `this`. Test edge cases rather than relying on a guess.

## 30. TypeScript Fundamentals

**Remember:** TypeScript adds compile-time types. Add types to variables, parameters, return values, arrays, objects, unions, interfaces, and type aliases.

```ts
interface User {
  name: string;
  age?: number;
}

function greet(user: User): string {
  return `Hello, ${user.name}`;
}
```

## 31. Advanced TypeScript

**Remember:** Generics reuse logic with type safety. Use unions for alternatives and narrowing for a specific branch. `unknown` requires checking. `never` represents a value that cannot occur.

```ts
function identity<T>(value: T): T {
  return value;
}

function isText(value: unknown): value is string {
  return typeof value === "string";
}

function fail(message: string): never {
  throw new Error(message);
}
```

## Practice Exercises

**Remember:** Apply the basics together: read and validate input, remove/transform whitespace, iterate through arrays, branch by conditions, and test empty, minimum, maximum, and invalid cases.

## Useful One-Line Patterns

```js
const defaultName = input ?? "Guest";
const doubled = [1, 2, 3].map(n => n * 2);
const adults = users.filter(user => user.age >= 18);
const total = values.reduce((sum, value) => sum + value, 0);
const copy = { ...user, active: true };
const found = items.find(item => item.id === targetId);
```

## Complete Source Inventory


### 01_chapter_JS_Basics (2 files)

- [01_HelloWorld.js](../01_chapter_JS_Basics/01_HelloWorld.js)
- [02_Math.js](../01_chapter_JS_Basics/02_Math.js)

### 02_chapter_JS_Keywrods_Identifiers (7 files)

- [03_js_engine.js](../02_chapter_JS_Keywrods_Identifiers/03_js_engine.js)
- [04_letengine.js](../02_chapter_JS_Keywrods_Identifiers/04_letengine.js)
- [05_KW_IND.js](../02_chapter_JS_Keywrods_Identifiers/05_KW_IND.js)
- [06_KW_IND_Rules.js](../02_chapter_JS_Keywrods_Identifiers/06_KW_IND_Rules.js)
- [07_IND_Rules2.js](../02_chapter_JS_Keywrods_Identifiers/07_IND_Rules2.js)
- [08_Comments.js](../02_chapter_JS_Keywrods_Identifiers/08_Comments.js)
- [09_IQ.js](../02_chapter_JS_Keywrods_Identifiers/09_IQ.js)

### 03_chapter_JS_Literals (9 files)

- [10_Literal.js](../03_chapter_JS_Literals/10_Literal.js)
- [11_Numberal.js](../03_chapter_JS_Literals/11_Numberal.js)
- [12_Null_Undefined.js](../03_chapter_JS_Literals/12_Null_Undefined.js)
- [13_Null.js](../03_chapter_JS_Literals/13_Null.js)
- [14_Literals.js](../03_chapter_JS_Literals/14_Literals.js)
- [15_Number.js](../03_chapter_JS_Literals/15_Number.js)
- [16_Numbers_PART2.js](../03_chapter_JS_Literals/16_Numbers_PART2.js)
- [17_Special.js](../03_chapter_JS_Literals/17_Special.js)
- [18_undefined.js](../03_chapter_JS_Literals/18_undefined.js)

### 04_chapter_JS_Operators (18 files)

- [19_Arch.js](../04_chapter_JS_Operators/19_Arch.js)
- [20_Assigment_Op.js](../04_chapter_JS_Operators/20_Assigment_Op.js)
- [21_Arithematic_Op.js](../04_chapter_JS_Operators/21_Arithematic_Op.js)
- [22_Comparsion_Op.js](../04_chapter_JS_Operators/22_Comparsion_Op.js)
- [23_Logical_Op.js](../04_chapter_JS_Operators/23_Logical_Op.js)
- [24_Confusing_Comparsion.js](../04_chapter_JS_Operators/24_Confusing_Comparsion.js)
- [26_Question.js](../04_chapter_JS_Operators/26_Question.js)
- [27_String.js](../04_chapter_JS_Operators/27_String.js)
- [28_Ternary_Op.js](../04_chapter_JS_Operators/28_Ternary_Op.js)
- [29_T_Op.js](../04_chapter_JS_Operators/29_T_Op.js)
- [30_IQ.js](../04_chapter_JS_Operators/30_IQ.js)
- [31_IQ.js](../04_chapter_JS_Operators/31_IQ.js)
- [32_IQ.js](../04_chapter_JS_Operators/32_IQ.js)
- [33_IQ.js](../04_chapter_JS_Operators/33_IQ.js)
- [34_Nested_Ternary.js](../04_chapter_JS_Operators/34_Nested_Ternary.js)
- [35_IQ.js](../04_chapter_JS_Operators/35_IQ.js)
- [36_IQ.js](../04_chapter_JS_Operators/36_IQ.js)
- [37_TypeOf.js](../04_chapter_JS_Operators/37_TypeOf.js)

### 05_chapter_JS_Incre_Decr_Op (8 files)

- [38_ID_Op.js](../05_chapter_JS_Incre_Decr_Op/38_ID_Op.js)
- [39_ID.js](../05_chapter_JS_Incre_Decr_Op/39_ID.js)
- [40_IQ.js](../05_chapter_JS_Incre_Decr_Op/40_IQ.js)
- [41_IQ.js](../05_chapter_JS_Incre_Decr_Op/41_IQ.js)
- [42_IQ.js](../05_chapter_JS_Incre_Decr_Op/42_IQ.js)
- [43_De.js](../05_chapter_JS_Incre_Decr_Op/43_De.js)
- [44.js](../05_chapter_JS_Incre_Decr_Op/44.js)
- [45_Nullish.js](../05_chapter_JS_Incre_Decr_Op/45_Nullish.js)

### 06_chatper_if_else_statement_Condition (4 files)

- [46_IF.js](../06_chatper_if_else_statement_Condition/46_IF.js)
- [47_IF_Else_Nested.js](../06_chatper_if_else_statement_Condition/47_IF_Else_Nested.js)
- [48_TO_IfElse.js](../06_chatper_if_else_statement_Condition/48_TO_IfElse.js)
- [49_Multiple_ifelse.js](../06_chatper_if_else_statement_Condition/49_Multiple_ifelse.js)

### 07_chapter_switch (9 files)

- [50_switch.js](../07_chapter_switch/50_switch.js)
- [51_IQ.js](../07_chapter_switch/51_IQ.js)
- [52_IQ.js](../07_chapter_switch/52_IQ.js)
- [53_API_Switch.js](../07_chapter_switch/53_API_Switch.js)
- [54_Switch_Group.js](../07_chapter_switch/54_Switch_Group.js)
- [55_IQ.js](../07_chapter_switch/55_IQ.js)
- [56_IQ.js](../07_chapter_switch/56_IQ.js)
- [57_IQ.js](../07_chapter_switch/57_IQ.js)
- [58_IQ.js](../07_chapter_switch/58_IQ.js)

### 08_chapter_UserInput (4 files)

- [59_UI.js](../08_chapter_UserInput/59_UI.js)
- [60_Node_UI.js](../08_chapter_UserInput/60_Node_UI.js)
- [61_Prompt_sync.js](../08_chapter_UserInput/61_Prompt_sync.js)
- [62_FS_readFile.js](../08_chapter_UserInput/62_FS_readFile.js)

### 09_chapter_Loops (7 files)

- [63_Loop.js](../09_chapter_Loops/63_Loop.js)
- [64_For_loop.js](../09_chapter_Loops/64_For_loop.js)
- [65_Foor_Loop.js](../09_chapter_Loops/65_Foor_Loop.js)
- [66_iq.js](../09_chapter_Loops/66_iq.js)
- [67_iq.js](../09_chapter_Loops/67_iq.js)
- [97_Array_Copy.js](../12_chapters_Arrays/97_Array_Copy.js)
- [98_Array_Destructing.js](../12_chapters_Arrays/98_Array_Destructing.js)
- [99.js](../12_chapters_Arrays/99.js)

### 13_chapter_Functions (16 files)

- [101_Fn.js](../13_chapter_Functions/101_Fn.js)
- [102_Type1_Fn.js](../13_chapter_Functions/102_Type1_Fn.js)
- [103_Type2_Fn.js](../13_chapter_Functions/103_Type2_Fn.js)
- [104_Type3_Fn.js](../13_chapter_Functions/104_Type3_Fn.js)
- [105_Type4_Fn.js](../13_chapter_Functions/105_Type4_Fn.js)
- [106_Template_Literal.js](../13_chapter_Functions/106_Template_Literal.js)
- [107_Fn_Exp.js](../13_chapter_Functions/107_Fn_Exp.js)
- [108_Fn_Arrow.js](../13_chapter_Functions/108_Fn_Arrow.js)
- [109_Arrow.js](../13_chapter_Functions/109_Arrow.js)
- [110_Arrow_Multiple.js](../13_chapter_Functions/110_Arrow_Multiple.js)
- [110_Fn.js](../13_chapter_Functions/110_Fn.js)
- [112_Fn_REAL.js](../13_chapter_Functions/112_Fn_REAL.js)
- [113_Fn.js](../13_chapter_Functions/113_Fn.js)
- [114_Spread_As_Argument_Fn.js](../13_chapter_Functions/114_Spread_As_Argument_Fn.js)
- [115_Fn_Return.js](../13_chapter_Functions/115_Fn_Return.js)
- [116_Return_Fn.js](../13_chapter_Functions/116_Return_Fn.js)

### 14_chapter_Var_Let_Const_Hoisting_TDZ (11 files)

- [117.js](../14_chapter_Var_Let_Const_Hoisting_TDZ/117.js)
- [118_var_let_const.js](../14_chapter_Var_Let_Const_Hoisting_TDZ/118_var_let_const.js)
- [119_let.js](../14_chapter_Var_Let_Const_Hoisting_TDZ/119_let.js)
- [120_Const.js](../14_chapter_Var_Let_Const_Hoisting_TDZ/120_Const.js)
- [121_Var_Hoisting.js](../14_chapter_Var_Let_Const_Hoisting_TDZ/121_Var_Hoisting.js)
- [122_Let_Hoisting.js](../14_chapter_Var_Let_Const_Hoisting_TDZ/122_Let_Hoisting.js)
- [123_Fn_Hoisting.js](../14_chapter_Var_Let_Const_Hoisting_TDZ/123_Fn_Hoisting.js)
- [124_Let_TDZ.js](../14_chapter_Var_Let_Const_Hoisting_TDZ/124_Let_TDZ.js)
- [125_let_tdz.js](../14_chapter_Var_Let_Const_Hoisting_TDZ/125_let_tdz.js)
- [126_Var.js](../14_chapter_Var_Let_Const_Hoisting_TDZ/126_Var.js)
- [127_TDZ_TypeOf.js](../14_chapter_Var_Let_Const_Hoisting_TDZ/127_TDZ_TypeOf.js)

### 15_chapter_Functions_Closure (1 files)

- [128_Closure.js](../15_chapter_Functions_Closure/128_Closure.js)

### 16_chapter_String (3 files)

- [129_String.js](../16_chapter_String/129_String.js)
- [130_String_Fn.js](../16_chapter_String/130_String_Fn.js)
- [131_String_Search.js](../16_chapter_String/131_String_Search.js)

### 17_Objects_JS (8 files)

- [132_Objects.js](../17_Objects_JS/132_Objects.js)
- [133_Object_Copy.js](../17_Objects_JS/133_Object_Copy.js)
- [134.js](../17_Objects_JS/134.js)
- [135.js](../17_Objects_JS/135.js)
- [136_Normal.js](../17_Objects_JS/136_Normal.js)
- [137_Config.js](../17_Objects_JS/137_Config.js)
- [138_Call_By_Ref_By_Value.js](../17_Objects_JS/138_Call_By_Ref_By_Value.js)
- [139_Shallow_Copy_Deep_Copy.js](../17_Objects_JS/139_Shallow_Copy_Deep_Copy.js)

### 18_Multi_Dimensions_Array (7 files)

- [140_MDArrays.js](../18_Multi_Dimensions_Array/140_MDArrays.js)
- [141_2D.js](../18_Multi_Dimensions_Array/141_2D.js)
- [142_REAL_Exmaple.js](../18_Multi_Dimensions_Array/142_REAL_Exmaple.js)
- [143_array_Fn.js](../18_Multi_Dimensions_Array/143_array_Fn.js)
- [144_Right_Hand_Pattern.js](../18_Multi_Dimensions_Array/144_Right_Hand_Pattern.js)
- [145_Left_Hand_Triablge_Pattern.js](../18_Multi_Dimensions_Array/145_Left_Hand_Triablge_Pattern.js)
- [146_Pyamid_Pattern.js](../18_Multi_Dimensions_Array/146_Pyamid_Pattern.js)

### 19_Callback (8 files)

- [147_Callback.js](../19_Callback/147_Callback.js)
- [148_More_CB.js](../19_Callback/148_More_CB.js)
- [149_CB_Sync.js](../19_Callback/149_CB_Sync.js)
- [150_CB_Async.js](../19_Callback/150_CB_Async.js)
- [151_CallBackHell.js](../19_Callback/151_CallBackHell.js)
- [152_REAL_QA.js](../19_Callback/152_REAL_QA.js)
- [153_Callbacl_Return.js](../19_Callback/153_Callbacl_Return.js)
- [154_Pyramid_DOOM.js](../19_Callback/154_Pyramid_DOOM.js)

### 20_Promise (7 files)

- [155_Promise.js](../20_Promise/155_Promise.js)
- [156_Promise_Finally.js](../20_Promise/156_Promise_Finally.js)
- [157_Promise_Improve.js](../20_Promise/157_Promise_Improve.js)
- [158_Promise.All.js](../20_Promise/158_Promise.All.js)
- [159_Promise.Settle.js](../20_Promise/159_Promise.Settle.js)
- [161_IQ.js](../20_Promise/161_IQ.js)

### 21_Async_Await (9 files)

- [162_Async_Await.js](../21_Async_Await/162_Async_Await.js)
- [163_AA.js](../21_Async_Await/163_AA.js)
- [164_Playwright.spec.ts](../21_Async_Await/164_Playwright.spec.ts)
- [165_Playwright2.spec.ts](../21_Async_Await/165_Playwright2.spec.ts)
- [167_AA_Parallel_Exe.js](../21_Async_Await/167_AA_Parallel_Exe.js)
- [168_AA_Flaky_Finder.js](../21_Async_Await/168_AA_Flaky_Finder.js)
- [169_IQ.js](../21_Async_Await/169_IQ.js)
- [170_IQ.js](../21_Async_Await/170_IQ.js)
- [171_IQ.js](../21_Async_Await/171_IQ.js)

### 22_Export_Import (6 files)

- [172_IE.js](../22_Export_Import/172_IE.js)
- [173.js](../22_Export_Import/173.js)
- [174_Logs.js](../22_Export_Import/174_Logs.js)
- [logger.js](../22_Export_Import/logs/logger.js)
- [testutils.js](../22_Export_Import/testutils.js)
- [utils.js](../22_Export_Import/utils.js)

### 23_Class_Objects (1 files)

- [175_Class.js](../23_Class_Objects/175_Class.js)

### 24_Playwright (2 files)

- [playwright.config.ts](../24_Playwright/playwright.config.ts)
- [example.spec.ts](../24_Playwright/tests/example.spec.ts)

### 25_Class_Object_Constructor (12 files)

- [176_Con.js](../25_Class_Object_Constructor/176_Con.js)
- [177_IQ.js](../25_Class_Object_Constructor/177_IQ.js)
- [178_IQ.js](../25_Class_Object_Constructor/178_IQ.js)
- [179.js](../25_Class_Object_Constructor/179.js)
- [180_REAL_PW.js](../25_Class_Object_Constructor/180_REAL_PW.js)
- [181_Private_Public.js](../25_Class_Object_Constructor/181_Private_Public.js)
- [182_api.js](../25_Class_Object_Constructor/182_api.js)
- [183_Static.js](../25_Class_Object_Constructor/183_Static.js)
- [184_Static.js](../25_Class_Object_Constructor/184_Static.js)
- [185_IQ.js](../25_Class_Object_Constructor/185_IQ.js)
- [186_REAL.js](../25_Class_Object_Constructor/186_REAL.js)
- [187.js](../25_Class_Object_Constructor/187.js)

### 26_OOPs_Encapsulation (7 files)

- [188_Encapsulation.js](../26_OOPs_Encapsulation/188_Encapsulation.js)
- [189.js](../26_OOPs_Encapsulation/189.js)
- [190_Bank_ecap.js](../26_OOPs_Encapsulation/190_Bank_ecap.js)
- [191_IQ.Encap.js](../26_OOPs_Encapsulation/191_IQ.Encap.js)
- [192_IQ.js](../26_OOPs_Encapsulation/192_IQ.js)
- [193_IQ.js](../26_OOPs_Encapsulation/193_IQ.js)
- [194_IQ.js](../26_OOPs_Encapsulation/194_IQ.js)

### 27_OOPs_Inheritance (13 files)

- [195_SI.js](../27_OOPs_Inheritance/01_Single_Inheritance/195_SI.js)
- [196_SI_REAL.js](../27_OOPs_Inheritance/01_Single_Inheritance/196_SI_REAL.js)
- [197_REAL.js](../27_OOPs_Inheritance/01_Single_Inheritance/197_REAL.js)
- [198_SI.js](../27_OOPs_Inheritance/01_Single_Inheritance/198_SI.js)
- [199.js](../27_OOPs_Inheritance/01_Single_Inheritance/199.js)
- [200_IQ.js](../27_OOPs_Inheritance/01_Single_Inheritance/200_IQ.js)
- [201_IQ.js](../27_OOPs_Inheritance/01_Single_Inheritance/201_IQ.js)
- [202_IQ.js](../27_OOPs_Inheritance/01_Single_Inheritance/202_IQ.js)
- [203_MI.js](../27_OOPs_Inheritance/02_MultiLevel_Inheritance/203_MI.js)
- [204_Multipe.js](../27_OOPs_Inheritance/03_Multiple_Inheritance/204_Multipe.js)
- [205_Mixin_MI.js](../27_OOPs_Inheritance/03_Multiple_Inheritance/205_Mixin_MI.js)
- [206_HI.js](../27_OOPs_Inheritance/04_Hierarchial_Inheritance/206_HI.js)
- [207_Hybird.js](../27_OOPs_Inheritance/05_Hybrid_Inheritance/207_Hybird.js)

### 28_OOPs_Polymorphism (2 files)

- [208.js](../28_OOPs_Polymorphism/Compile_Time/208.js)
- [207_RTP.js](../28_OOPs_Polymorphism/Run_Time/207_RTP.js)

### 29_IQ (4 files)

- [209.js](../29_IQ/209.js)
- [210.js](../29_IQ/210.js)
- [211.js](../29_IQ/211.js)
- [212.js](../29_IQ/212.js)

### 30_Typescript (2 files)

- [213.js](../30_Typescript/213.js)
- [213.ts](../30_Typescript/213.ts)

### 31_Typescript (5 files)

- [214.ts](../31_Typescript/214.ts)
- [215_Basic.ts](../31_Typescript/215_Basic.ts)
- [216_Fn.ts](../31_Typescript/216_Fn.ts)
- [217.ts](../31_Typescript/217.ts)
- [218.ts](../31_Typescript/218.ts)

### PracticeExcercise (11 files)

- [01_FindMax.js](../PracticeExcercise/01_FindMax.js)
- [02_FindFrequency.js](../PracticeExcercise/02_FindFrequency.js)
- [03_FindDuplicates.js](../PracticeExcercise/03_FindDuplicates.js)
- [04_SumofArray.js](../PracticeExcercise/04_SumofArray.js)
- [06_CountVowelsAndConsonants.js](../PracticeExcercise/06_CountVowelsAndConsonants.js)
- [07_PalindromeChecker.js](../PracticeExcercise/07_PalindromeChecker.js)
- [08_RemoveDuplicateCharacters.js](../PracticeExcercise/08_RemoveDuplicateCharacters.js)
- [09_Anagram.js](../PracticeExcercise/09_Anagram.js)
- [11_CheckSubString.js](../PracticeExcercise/11_CheckSubString.js)
- [12_TestDurationReport.js](../PracticeExcercise/12_TestDurationReport.js)
