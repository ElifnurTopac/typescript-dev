// Soru19.ts

type Flatten<T> = T extends (infer U)[] ? U : T;

// Test (dokunma)
type A = Flatten<number[]>; // number
type B = Flatten<string>;   // string

const a: A = 10;
const b: B = "Hello";

console.log(a, b);
