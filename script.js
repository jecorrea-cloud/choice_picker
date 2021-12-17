const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

//To automatically type when in page type use .focus()
textarea.focus();

textarea.addEventListener("keyup", (event) => {
  createTags(event.target.value);

  //To check if the user hit enter
  if (event.key === "Enter") {
    //Clear the value in the textarea
    setTimeout(() => {
      event.target.value = "";
    }, 10);

    randomSelect();
  }
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

function randomSelect() {
  //   console.log("Partially working!");

  //  Number of times we want each box to be highlighted
  const times = 30;

  //  This interval will fire up every 100 milisecondss
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    if (randomTag !== undefined) {
      highlightTag(randomTag);

      // Wait 100 miliseconds to unhighlight
      setTimeout(() => {
        unHighlightTag(randomTag);
      }, 100);
    }
  }, 100);

  // To stop highlight/unhilight going on forever
  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();

      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  //Return the index of tags
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
