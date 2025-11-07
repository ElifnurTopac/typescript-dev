// Soru18.ts

type LastParameter<T> = T extends (...args: [...infer _, infer L]) => any ? L : never;

// Test (dokunma)
function sample(a: number, b: boolean, c: string) {}
type Result = LastParameter<typeof sample>; // string

const value: Result = "Hello";
console.log(value);
