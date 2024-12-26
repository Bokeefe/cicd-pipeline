const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api", (req, res) => {
  res.json({
    status: 200,
    message: "howdy 🤠 world!",
  });
});

app.listen(80, () => {
  console.log("Website server running on port 80");
});

app.listen(8080, () => {
  console.log("API server running on port 8080");
});
