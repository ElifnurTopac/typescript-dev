// Soru10.ts

class MathHelper {
  static PI = 3.14159;

  static calculateCircumference(radius: number): number {
    return 2 * MathHelper.PI * radius;
  }
}

console.log(MathHelper.PI); // 3.14159
console.log(MathHelper.calculateCircumference(5)); // 31.4159
