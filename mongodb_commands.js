db.posts.updateOne(
  { _id: ObjectId("65b4a6babd5faf31f5b30e3b") },
  { $set: { title: "Second Post", user: "alice" } },
  { upsert: true }
);
