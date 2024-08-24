const tagsElement = document.getElementById("tags");
const textArea = document.getElementById("textarea");

textArea.focus();

textArea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
});

function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  tagsElement.innerHTML = "";
  tags.forEach((tag) => {
    const createElement = document.createElement("span");
    tagsElement.classList.add("tag");
    tagsElement.innerHTML = tag;
    tagsElement.appendChild(tagsElement);
  });
}
