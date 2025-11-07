// Soru15.ts

type PickByValueType<T, V> = {
  [K in keyof T as T[K] extends V ? K : never]: T[K];
};

// Test - (dokunma)
type Person = {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
};

type OnlyNumbers = PickByValueType<Person, number>;

const obj: OnlyNumbers = {
  id: 1,
  age: 25
};

console.log(obj);
