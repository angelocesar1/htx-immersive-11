// Get a reference to the database service
let database = firebase.database();
let root = database.ref();

// Create a post note under a child
let postsRef = root.child("posts");

let postTitleTextBox = document.getElementById("postTitleTextBox");
let postBodyTextBox = document.getElementById("postBodyTextBox");
let postListUl = document.getElementById("postListUl");

function displayPosts(posts) {
  let postItems = posts.map(posts => {
    return `<li>${post.title}</li>`;
  });

  postListUl.innerHTML = postItems.join("");
}

function setupObservers() {
  postsRef.on("child_added", snapshot => {
    let post = { key: snapshot.key, ...snapshot.val() };
    console.log(post);
  });

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
}

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

setupObservers();
// Blog
// POST and COMMENTS
