// get the button using the id
let addTaskButton = document.getElementById("addTaskButton");

// get access to text-box
let taskNameTextBox = document.getElementById("taskNameTextBox");

// get access to ul
let taskListUL = document.getElementById("taskListUL");

// attach onclick event to the button
addTaskButton.addEventListener("click", function() {
  console.log("Button is clicked");
  // document.body.style.backgroundColor = "red";
  let taskName = taskNameTextBox.value;
  let btnRemove = document.createElement("button");
  btnRemove.innerHTML = "Remove";
  LiItem.appendChild(btnRemove);
  // create li element
  let liItem = document.createElement("li");
  // set inner html of LiItem
  liItem.innerHTML = taskName;
  console.log(liItem);

  textListUL.appendChild(LiItem);
  // adding the same liItem to document will remove it from the UL
  document.body.appendChild(liItem);
});
