const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());   // To read JSON data

//simple route
app.get("/", (req, res) => {
    res.send("Hello World!");
});

//student route
app.get("/student", (req, res) => {
    res.send("Student Page");
});

//teacher route
app.get("/teacher", (req, res) => {
    res.send("Teacher Page");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});