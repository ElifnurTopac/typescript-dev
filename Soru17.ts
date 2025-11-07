// Soru17.ts

type FilterUnion<T, U> = T extends U ? T : never;

// Test (dokunma)
type A = FilterUnion<"a" | "b" | 1 | true, string>; 
// Sonuç: "a" | "b"

const x: A = "a";
// const y: A = 1; // ❌ HATA (Doğru!)
console.log(x);
