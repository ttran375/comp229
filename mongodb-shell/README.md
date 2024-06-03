# Introduction to NoSQL, MongoDB, MongoDB Shell and CRUD Operations

## Creating and showing databases

To switch to another database called mean by executing the following command:

```
use mean
```

To list all the other databases in the current MongoDB server, just execute the following command:

```
show dbs
```

## MongoDB collections

Insert and retrieve example:

```js
db.posts.insert({ title: "First Post", user: "bob" });
db.posts.find();
```

Show all available collections:

```
show collections
```

To drop a collection:

```js
db.posts.drop();
```

## MongoDB CRUD operations

- Create a new document – use `insert()`, `update()`, or `save()` methods.
- Read a document – use `find()` method.
- Update a document - use `update()` or save() methods.
- Deleting documents – use `remove()` method.

## Creating a document using insert()

``` js
db.posts.insert({ title: "Second Post", user: "alice" });
```

## Creating a document using update()

```js
db.posts.update(
  { user: "alice" },
  { $set: { title: "Second Post", user: "alice" } },
  { upsert: true }
);
```

## Creating a document using insertOne() or replaceOne()

```js
db.posts.insertOne({ title: "Second Post", user: "alice" });
```

## Finding all the collection documents

The following query will retrieve all the documents in the posts collection:

```js
db.posts.find();
```

Furthermore, performing the same operation can also be done using the following query:

```js
db.posts.find({});
```

## Retrieve a specific document

```js
db.posts.find({ user: "alice" });
```

## Build more complex queries

Retrieve all the posts that were created by either alice or bob, you can use the following $in operator:

```js
db.posts.find({ user: { $in: ["alice", "bob"] } });
```

To perform an AND query, you simply add the properties you'd like to check to the query object.

```js
db.posts.find({ user: "alice", commentsCount: { $gt: 10 } });
```

An OR query is a bit more complex because it involves the $or operator.

```js
db.posts.find({ $or: [{ user: "alice" }, { user: "bob" }] });
```

## Updating existing documents

The update() method takes three arguments to update existing documents

```js
db.posts.update(
  {
    user: "alice",
  },
  {
    $set: {
      title: "Second Post",
    },
  },
  {
    multi: true,
  }
);
```

## Updating documents using updateOne()

```js
db.posts.updateOne(
  { _id: ObjectId("65b4a6babd5faf31f5b30e3b") },
  { $set: { title: "Second Post", user: "alice" } },
  { upsert: true }
);
```

## Deleting documents

```js
db.posts.remove({});
```

To rebuild your collection with different indexes, it is preferred that you use the `drop()` method.

## Deleting multiple documents

```js
db.posts.deleteMany({ user: "alice" });
```

## Deleting a single document

```js
db.posts.deleteOne({ user: "alice" }, true);
```
