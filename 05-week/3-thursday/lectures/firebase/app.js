// Get a reference to the database service
let database = firebase.database();
let root = database.ref();

// Create a post note under a child
let postsRef = root.child("posts");

let postTitleTextBox = document.getElementById("postTitleTextBox");
let postBodyTextBox = document.getElementById("postBodyTextBox");

let posts = [];

function displayPosts(posts) {
  let postItems = posts.map(posts => {
    return `<li>${posts.title}</li>`
  });

  postListUl.innerHTML = postItems.join('');
}

function setupObservers() {

postsRef.on('child_added',(snapshot) => {
    console.log(snapshot.val())
})


/*
  postsRef.on("value", snapshot => {
    let posts = [];

    let snapshotValue = snapshot.val();
    for (let key in snapshotValue) {
      console.log(key);
      let post = snapshotValue[key];
      posts.push(post);
    }

    displayPosts(posts);
  });
}
*/
let savePostButton = document.getElementById("savePostButton");
savePostButton.addEventListener("click", () => {
  let title = postTitleTextBox.value;
  let body = postBodyTextBox.value;

  // Save the post and creates a unique ID for the node
  postsRef.push({
    title: title,
    body: body
  });
});

// Blog
// POST and COMMENTS
