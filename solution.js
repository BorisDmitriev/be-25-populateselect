const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: String,
    user: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User" 
    }],
});

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

const Post = mongoose.model("Post", PostSchema);
const User = mongoose.model("User", UserSchema);

mongoose.connect("mongodb://127.0.0.1:27017/exampleDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function populatePosts() {
    try {
        const posts = await Post.find().populate("user")
        posts.forEach(post => console.log(post))
    } catch (error) {
        console.error("Fehler bei der Ausführung von Aufgabe 1:", error);
    }
}

async function selectTitle() {
    try {
        
        const posts = await Post.find().select("title")
        console.log("--------------", posts )
    } catch (error) {
        console.error("Fehler bei der Ausführung von Aufgabe 2:", error);
    }
}

async function selectUserName() {
    try {
        const posts = await Post.find().populate("user", "name")
        console.log("--------------")
        posts.forEach(post => console.log(post))
    } catch (error) {
        console.error("Fehler bei der Ausführung von Aufgabe 3:", error);
    }
}

async function runTasks() {
    await populatePosts();
    await selectTitle();
    await selectUserName();

    mongoose.disconnect();
}

runTasks();
