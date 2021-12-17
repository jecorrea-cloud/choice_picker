const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

//To automatically type when in page type use .focus()
textarea.focus();

textarea.addEventListener("keyup", (event) => {
  createTags(event.target.value);
});

function createTags(input) {
  //Split the input by a comma and then put them into an array
  const tags = input.split(",");
  console.log(tags);
}
