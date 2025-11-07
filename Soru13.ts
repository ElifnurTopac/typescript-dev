// Soru13.ts

type CreateGetters<T> = {
  [K in keyof T as get${Capitalize<string & K>}]: () => T[K];
};

// Test (dokunma)
type User = {
  id: number;
  name: string;
};

type GetterUser = CreateGetters<User>;

const user: GetterUser = {
  getId: () => 1,
  getName: () => "Ahmet"
};

console.log(user.getId());  // 1
console.log(user.getName()); // "Ahmet"
