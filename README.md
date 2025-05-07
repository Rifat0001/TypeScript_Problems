# 1. What are some differences between interfaces and types in TypeScript?

In TypeScript, both `interface` and `type` are used to describe the shape of data, such as objects or functions. Although they are often interchangeable, there are key differences between them in terms of capabilities and usage.

---

## Interface vs Type

| Feature                            | `interface`                            | `type`                                     |
|------------------------------------|----------------------------------------|---------------------------------------------|
| **Extension**                      | Can be extended using `extends`        | Can use intersections (`&`) to combine     |
| **Merging**                        | Supports declaration merging           | Cannot merge — will throw an error         |
| **Usage for primitives/unions**    | Not allowed                            | Can define primitive, union, and tuple types |
| **Implements in Classes**          | Commonly used with `implements`        | Can be used, but `interface` is preferred  |
| **Readability in large codebases** | Easier to read when extending multiple types | Can become complex with multiple intersections |

---



# 2. What is the use of the keyof keyword in TypeScript? Provide an example.

In TypeScript, the `keyof` keyword is used to extract the keys of a type as a union of string literal types. This is particularly useful when you want to enforce type safety while working with object properties dynamically.

---

## 🧠 What Does `keyof` Do?

`keyof` takes an object type and produces a union of its keys.

For example:

```ts
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

type PersonKeys = keyof Person;
// result : "name" | "age" | "isStudent"

