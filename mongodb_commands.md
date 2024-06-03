# Introduction to NoSQL, MongoDB, MongoDB Shell and CRUD Operations

## Creating and showing databases

```sh
use mean
show dbs
```

## MongoDB collections

Insert and retrieve example:

```
db.posts.insert({"title":"First Post", "user": "bob"})
db.posts.find()
```

Show all available collections:

```
show collections
```

To drop a collection:

```
db.posts.drop()
```

## MongoDB CRUD operations

- Create a new document – use `insert()`, `update()`, or `save()` methods.
- Read a document – use `find()` method.
- Update a document - use `update()` or save() methods.
- Deleting documents – use `remove()` method.

## Creating a document using insert()

```
db.posts.insert({"title":"Second Post", "user": "alice"})
```

## Creating a document using update()

```
db.posts.update({"user":"alice"},{$set:{"title":"Second Post","user":"alice"}},{upsert:true})
```

## Creating a document using insertOne() or replaceOne()

```
db.posts.insertOne({"title":"Second Post","user":"alice"})
```

## Finding all the collection documents

```
db.posts.find()
db.posts.find({})
```

## Retrieve a specific document

```
db.posts.find({ "user": "alice" })
```
