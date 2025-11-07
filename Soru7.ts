// Soru7.ts

type User = {
  id: number;
  name: string;
  email: string;
};

function updateUser(user: User, updates: Partial<User>): Readonly<User> {
  const updatedUser = { ...user, ...updates };
  return updatedUser as Readonly<User>;
}

const user: User = {
  id: 1,
  name: "Ahmet",
 email: "ahmet@example.com"
};

const updated = updateUser(user, { email: "yeni@example.com" });

console.log(updated);
// { id: 1, name: "Ahmet", email: "yeni@example.com" }

// updated.name = "Deniz"; // ❌ HATA: Readonly olduğu için değiştirilemez
