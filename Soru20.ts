// Soru20.ts

type ParseRouteParams<T extends string> =
  T extends ${string}:${infer Param}/${infer Rest}
    ? { [K in Param | keyof ParseRouteParams<Rest>]: string }
    : T extends ${string}:${infer Param}
      ? { [K in Param]: string }
      : {};


// Test (dokunma)
type R1 = ParseRouteParams<"/users/:id">;
//     ^? { id: string }

type R2 = ParseRouteParams<"/users/:userId/posts/:postId">;
//     ^? { userId: string; postId: string }

const p1: R1 = { id: "123" };
const p2: R2 = { userId: "u1", postId: "p45" };

console.log(p1, p2);
