"use strict"
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

let db = fs.readFileSync("./database/db.json", "utf-8")
let parsed = JSON.parse(db)

app.use(express.static(path.join(__dirname,"public")))

// main
app.get("/", (req, res) => {
    res.sendFile("./public/index.html")
});
app.get("/api/data", (req, res) => {
    res.json(parsed);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
});