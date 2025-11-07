// Soru16.ts

type Brand<T, U> = T & { __brand: U };

type UserID = Brand<string, "UserID">;
type PostID = Brand<string, "PostID">;

// Test (dokunmayın)
const userId: UserID = "user-123" as UserID;
const postId: PostID = "post-987" as PostID;

console.log(userId, postId);

// Aşağıdakiler HATA olur (Doğru!)
/*
const wrong1: UserID = postId;
const wrong2: PostID = userId;
*/
