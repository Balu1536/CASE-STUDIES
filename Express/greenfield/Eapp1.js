const express = require("express");
const app = express();
const port = 3000;

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to Greenfield Community Center!");
});

// Events route
app.get("/events", (req, res) => {
  const events = [
    "Yoga Class - Monday 7pm",
    "Gardening Workshop - Wednesday 5pm",
    "Book Club - Friday 6pm"
  ];
  res.json(events);
});

// Contact route (Challenge)
app.get("/contact", (req, res) => {
  res.json({
    email: "balu@gmail.com",
    phone: "+91 9876543XXXX"
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
