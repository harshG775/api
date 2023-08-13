const express = require("express");
const fs = require("fs");
const app = express();

let db = fs.readFileSync("./database/db.json", "utf-8")
let parsed = JSON.parse(db)
// main
app.get("/", (req, res) => {
    res.json(parsed);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
});