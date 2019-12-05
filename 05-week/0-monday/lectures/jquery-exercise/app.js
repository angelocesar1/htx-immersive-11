$(document).ready(function() {
  $("#div1").click(function() {
    alert("Hello World");
  });
});

// $('#div1') // access by id #
// $('.li-item') // access by class

$("#div1")
  .css("background-color", "yellow")
  .addClass("foo")
  .append("<p>Para</p>");
