const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

const projects = [
  {
    id:1,
    title: "Example",
    description: "Example text",
    tableauUrl: "tableau website route"
    sqlQuery: "provide SQL code for query here"
  }
];