# Mongoose-populate-and-select

Given the following models:

```javascript
const PostSchema = new mongoose.Schema({
    title: String,
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

const Post = mongoose.model("Post", PostSchema);
const User = mongoose.model("User", UserSchema);
```

Make sure to execute the following seed script to insert sample data into the database:

```shell
node seed.js
```

### Tasks

1. **Task 1: Populating Results**

    - Populate the user information for each post using the `populate()` method.
    - Print all the posts with their associated user information to the console.

2. **Task 2: Selecting Fields to Display**

    - Select only the `title` field for all posts using the `select()` method.
    - Print only the titles of the posts to the console.

3. **Task 3: Selecting Related Entity Fields**
    - Populate the user names for each post using the `populate()` method and select only the `name` field of the related entity.
    - Print all the posts with the names of their associated users to the console.

Good luck with the exercise! Make sure you have set up the seed code and model definitions to access the database.
