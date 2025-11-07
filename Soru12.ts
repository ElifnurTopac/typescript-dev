// Soru12.ts

type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// Test Kodu (dokunma)
function example() {
  return { id: 1, name: "Test" };
}

type Result = GetReturnType<typeof example>; 
// Result -> { id: number; name: string; }

const obj: Result = { id: 1, name: "Test" };

console.log(obj);
