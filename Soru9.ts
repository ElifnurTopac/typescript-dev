// Soru9.ts

abstract class Shape {
  abstract getArea(): number;
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle(5);
console.log(circle.getArea()); 
// Beklenen çıktı: 78.53981633974483
