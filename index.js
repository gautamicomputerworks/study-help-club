const express = require("express");
const app = express();

// allow JSON data
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Study Help Club Backend is running");
});

// start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});