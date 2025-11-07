// Soru1.ts

function mergeArrays<T, U>(arr1: T[], arr2: U[]): (T | U)[] {
  return [...arr1, ...arr2];
}

const numbers = [1, 2, 3];
const strings = ["a", "b", "c"];

const result = mergeArrays(numbers, strings);
console.log(result);
// Beklenen çıktı: [1, 2, 3, "a", "b", "c"]
