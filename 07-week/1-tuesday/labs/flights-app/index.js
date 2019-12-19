const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");

app.use(express.urlencoded());

flights = [];

// tell express to use mustache templating engine
app.engine("mustache", mustacheExpress());

// the pages are located in views directory
app.set("views", "./views");

// extension will be mustache
app.set("view engine", "mustache");

//POST
app.post("/", (req, res) => {
  let destinationName = req.body.destinationName;
  let dateOfDeparture = req.body.dateOfDeparture;
  let dateOfReturn = req.body.dateOfReturn;
  let trip = {
    title: destinationName,
    dateOfDeparture: dateOfDeparture,
    dateOfReturn: dateOfReturn
  };
  flights.push(req.body);
  res.redirect("/");
  console.log("Flight Posted");
});

app.post("/delete-trip", (req, res) => {
  let city = req.body.destinationName;
  // remove the trip based on the city name
  flights = flights.filter(trip => trip.destinationName != city);

  // re-render the trips list
  res.redirect("/");
});

// GET
app.get("/", (req, res) => {
  res.render("flights", { flights: flights });
  console.log(flights);
});

app.listen(3000, () => {
  console.log("Server is running");
});
