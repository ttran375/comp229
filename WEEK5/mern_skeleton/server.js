const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the "public" directory
app.use("/", express.static(path.join(__dirname, "public")));

// API endpoint
app.get("/api/v1", (req, res) => {
  res.json({
    project: "React and Express Boilerplate",
    from: "Vanaldito",
  });
});

// Serve the index.html file for all other routes (for SPA support)
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log();
  console.log(`App running on port ${PORT}`);
  console.log();
  console.log(`> Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});
