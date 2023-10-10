# Mongoose-populate-and-select

Gegeben sind die folgenden Modelle:

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

Stelle sicher, dass du das folgende Seed-Skript ausführst, um Beispieldaten in die Datenbank einzufügen:

```shell
node seed.js
```

### Aufgaben

1. **Aufgabe 1: Ergebnisse populieren**

    - Populiere die Benutzerinformationen für jeden Post, indem du die `populate()`-Methode verwendest.
    - Gib alle Posts mit den zugehörigen Benutzerinformationen in der Konsole aus.

2. **Aufgabe 2: Felder zur Anzeige auswählen**

    - Wähle nur das Feld `title` für alle Posts aus, indem du die `select()`-Methode verwendest.
    - Gib nur die Titel der Posts in der Konsole aus.

3. **Aufgabe 3: Felder der verwandten Entität auswählen**
    - Populiere die Benutzernamen für jeden Post, indem du die `populate()`-Methode verwendest und nur das Feld `name` der verknüpften Entität auswählst.
    - Gib alle Posts mit den Namen der zugehörigen Benutzer in der Konsole aus.

Viel Erfolg bei der Bearbeitung der Aufgaben! Stelle sicher, dass du den Seed-Code und die Modelldefinitionen bereits eingerichtet hast, um auf die Datenbank zugreifen zu können.
