// Soru11.ts

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

// Test Kodu (dokunma)
type A = UnwrapPromise<Promise<number>>; // number
type B = UnwrapPromise<string>;          // string

const a: A = 123;
const b: B = "hello";

console.log(a, b);
