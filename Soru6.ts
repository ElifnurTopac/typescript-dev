// Soru6.ts

class MemoryCache<T> {
  private store: Record<string, T> = {};

  set(key: string, value: T): void {
    this.store[key] = value;
  }

  get(key: string): T | undefined {
    return this.store[key];
  }

  clear(): void {
    this.store = {};
  }
}

const cache = new MemoryCache<number>();

cache.set("a", 100);
cache.set("b", 200);

console.log(cache.get("a")); // 100
console.log(cache.get("b")); // 200

cache.clear();
console.log(cache.get("a")); // undefined
