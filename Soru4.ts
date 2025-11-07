// Soru4.ts

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = {
  name: "Ahmet",
  age: 25,
  city: "İstanbul"
};

console.log(getProperty(person, "name")); // "Ahmet"
console.log(getProperty(person, "age"));  // 25
