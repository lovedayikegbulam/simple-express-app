const express = require("express");
const authorRoute = require("../src/routes/author.route");
const localhost = "localhost"
const port = 3000

const app = express();

// MiddleWare 
app.use(express.json());
app.use(logger);
app.use("/authors", authorRoute);

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "Page not found" });
});

app.listen(port, () => {
    console.log(`Server running at http://${localhost}:${port}/`);
})