// Soru14.ts

type DeepReadonly<T> = T extends object
  ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
  : T;

// Test (kodda değişiklik yapma)
type User = {
  name: string;
  address: {
    city: string;
    zip: number;
  };
};

const user: DeepReadonly<User> = {
  name: "Ali",
  address: {
    city: "İstanbul",
    zip: 34000,
  },
};

// Aşağıdakiler artık HATA olur (Doğru!)
/*
user.name = "Veli";
user.address.city = "Ankara";
*/

console.log(user);
