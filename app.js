
const express = require("express");
require("dotenv").config();
const app = express();

// route
let PORT = process.env.PORT ? process.env.PORT : 8000;
app.get("/", (req, res) => {
  // Sending This is the home page! in the page
  res
    .status(200)
    .send(`This Page is running in AWS EC2 CI/CD WITH Github Actions is the home page and test runnings on ${PORT}`);
});

// Listening to the port 

console.log(PORT);
app.listen(PORT, () => {
  console.log(`Server is running...`);
});
