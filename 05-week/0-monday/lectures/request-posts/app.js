let postsUL = document.getElementById("postsUL");
const url = "https://jsonplaceholder.typicode.com/posts";

// create an object of XMLHttpRequest
let request = new XMLHttpRequest();

request.addEventListener("load", function() {
  // this is XMLHttpRequest object
  // console.log(this.responseText);

  // parse request text into a JS object
  let posts = JSON.parse(this.responseText);
});

posts.map(post => {
  return `<li>${post.title}</li>`;
});

// assign to the ul
postsUL.innerHTML = postItems.join(" ");
/*
request.addEventListener('load',(e) => {

}) */

request.open("GET", url);
request.send();
