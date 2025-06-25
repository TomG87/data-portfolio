const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const projects = [
  {
    id: 1,
    title: "Example",
    description: "Example text",
    tableauUrl: "tableau website route",
    sqlQuery: "provide SQL code for query here",
  },
];

app.get("/", (req, res) => {
  res.render("index", { projects });
});

app.get("/projects/:id", (req, res) => {
  const project = projects.find((p) => p.id === parseInt(req.params.id));
  res.render("project", { project });
});

const PORT = process.env.Port || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
