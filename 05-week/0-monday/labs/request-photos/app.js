let postsUL = document.getElementById("postsUL");
const url = "https://jsonplaceholder.typicode.com/photos";

function getPhotos() {
  let photos = [];

  let request = new XMLHttpRequest();
  request.onload = function() {
    let photos = JSON.parse(this.responseText);
    completion(photos);
  };

  request.open("GET", url);
  request.send();
}

getPhotos(photos => {
  updateUI(photos);
});

function updateUI(photos) {
  let photoItems = photos.map(photo => {
    return `<li>
                  <label>${photo.title}</label>
                  <img src='${photo.thumbaiUrl}' />
                  </li>`;
  });

  postsUL.innerHTML = photoItems.join(" ");
}
