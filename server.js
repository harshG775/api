"use strict"
import express from "express";
import path ,{dirname} from "path";
const app = express();
// __dirname
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

import fetching from "./modules/fetching.js";

app.use(express.static(path.join(__dirname,"public")))



// main
app.get("/", (req, res) => {
    res.sendFile("./public/index.html")
});
app.get("/api/trending/all/:id", (req, res) => {
    console.log(req.params)
    fetching.getAllTrendingPage().then(d=>
        res.json(d)
    )
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
});