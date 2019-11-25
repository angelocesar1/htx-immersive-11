let darkModeButton = document.getElementById("darkModeButton");
let lightModeButton = document.getElementById("lightModeButton");

darkModeButton.addEventListener("click", function() {
  document.body.style.backgroundColor = "black";
});

lightModeButton.addEventListener("click", function() {
  document.body.style.backgroundColor = "white";
});
