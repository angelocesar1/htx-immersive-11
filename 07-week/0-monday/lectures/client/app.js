let addMovieButton = document.getElementById("addMovieButton");
let titleTextBox = document.getElementById("titleTextBox");
let yearTextBox = document.getElementById("yearTextBox");

addMovieButton.addEventListener("click", () => {
  let title = titleTextBox.value;
  let year = yearTextBox.value;

  // post it to the server
  let url = "http://localhost:3000/movies";

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title,
      year
    })
  });
});

const url = "http://localhost:3000/movies";

// get all movies and display on the console
fetch(url)
  .then(response => response.json())
  .then(json => console.log(json));
