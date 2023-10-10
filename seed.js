const mongoose = require("mongoose");

// Definiere das Schema für deine Daten
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

// Verbindung zur MongoDB-Datenbank herstellen
mongoose.connect("mongodb://127.0.0.1:27017/exampleDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Funktion zum Einfügen von Beispieldaten
async function seedDatabase() {
    try {
        // Beispieldaten für User
        const sampleUsers = [
            { name: "John Doe", age: 25 },
            { name: "Jane Smith", age: 30 },
            { name: "Bob Johnson", age: 35 },
        ];

        // Beispieldaten für Posts
        const samplePosts = [
            { title: "First Post", user: null },
            { title: "Second Post", user: null },
            { title: "Third Post", user: null },
        ];

        // Benutzerdaten in die Datenbank einfügen
        const createdUsers = await User.insertMany(sampleUsers);

        // IDs der erstellten Benutzer erhalten
        const userIDs = createdUsers.map((user) => user._id);

        // Postdaten mit verknüpften Benutzer-IDs aktualisieren
        const updatedPosts = samplePosts.map((post, index) => {
            post.user = userIDs[index];
            return post;
        });

        // Postdaten in die Datenbank einfügen
        await Post.insertMany(updatedPosts);

        console.log("Beispieldaten erfolgreich eingefügt.");

        // Verbindung zur Datenbank trennen
        mongoose.disconnect();
    } catch (error) {
        console.error("Fehler beim Einfügen der Beispieldaten:", error);
    }
}

// Aufruf der Funktion zum Einfügen der Beispieldaten
seedDatabase();
