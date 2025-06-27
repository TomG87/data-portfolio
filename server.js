const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static(path.join(__dirname, "images")));

const projects = [
  {
    id: 1,
    title: "Spotify & YouTube Performance Analysis",
    description:
      "Analyzed correlation between Spotify popularity scores and YouTube views for top tracks, identifying high-potential cross-promotion opportunities.",
    tableauUrl:
      "https://public.tableau.com/views/spotify_youtube_analysis/Sheet1?:embed=true",
    sqlQuery: `-- Cleaned Spotify/YouTube dataset
      SELECT 
        Artist,
        Track,
        CAST(REPLACE("Spotify Popularity", ",", "") AS INTEGER) AS Popularity,
        CAST(REPLACE("Spotify Playlist Count", ",", "") AS INTEGER) AS PlaylistCount,
        CAST(REPLACE("YouTube Views", ",", "") AS INTEGER) AS YouTubeViews
      FROM "spotify_dataset"
      WHERE "YouTube Views" IS NOT NULL 
        AND "Spotify Popularity" IS NOT NULL
      ORDER BY Popularity DESC
      LIMIT 50;`,
  },
  {
    id: 2,
    title: "Second Project Title", // Changed for uniqueness
    description: "Second project description here.",
    tableauUrl: "tableau website route",
    sqlQuery: `-- Second SQL query here
      SELECT ...`,
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
