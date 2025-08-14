const express = require("express");
const app = express();
const PORT = 3000;

// Define a route for the homepage
app.get("/", (req, res) => {
  res.send("index.html");
});

// Start the server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running at http://0.0.0.0:${PORT}`);
});