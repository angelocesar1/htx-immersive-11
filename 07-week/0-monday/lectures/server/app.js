const express = require("express");
const cors = require("cors");
const app = express();
console.log(app);

let movies = [];
let fullNames = [];

// use the cors middleware
app.use(cors());
// server can now read json body
app.use(express.json());

// POST
// Movies
app.post("/movies", (req, res) => {
  console.log(req.body);
  console.log(req.body.title);
  console.log(req.body.year);
  movies.push(req.body);
  res.send("I am POST and I received your request!");
});

// Full Name
app.post("/fullname", (req, res) => {
  fullNames.push(req.body);
});

// GET
// Hello
app.get("/hello", (req, res) => {
  res.json({
    name: "Angelo"
  });
});

// Activity: Full Name
app.get("/fullname", (req, res) => {
  res.json(fullNames);
});

// Activity: Movies

app.get("/movies", (req, res) => {
  /*
  const movies = [
    {
      title: "Hereditary",
      year: 2018
    },
    {
      title: "The Exorcist",
      year: 1973
    },
    {
      title: "Uncut Gems",
      year: 2019
    }
  ];
  const response = {
    totalResults: 100,
    search: movies
  };
  */
  res.json(movies);
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on PORT 30000");
});
