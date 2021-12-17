const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

//To automatically type when in page type use .focus()
textarea.focus();

textarea.addEventListener("keyup", (event) => {
  createTags(event.target.value);
});

function createTags(input) {
  //Split the input by a comma and then put them into an array
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  //   console.log(tags);

  // Create the tags
  tagsEl.innerHTML = "";

  /* Now to create span elements for the tags
        <span class="tag">Choice 1</span>
        <span class="tag">Choice 2</span>
        <span class="tag">Choice 3</span>
  */

  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}
