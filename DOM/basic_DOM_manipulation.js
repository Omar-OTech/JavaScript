// Selecting elements
const container = document.getElementById("container");
const paragraph = document.querySelector(".text");
const heading = document.getElementsByTagName("h1")[0];

// Modifying content
heading.textContent = "Hello, World!";
paragraph.innerHTML = "Updated <strong>content</strong>";

// Creating and adding elements
const newDev = document.createElement("div");
newDev.textContent = "New content";
container.appendChild(newDev);

// Removing elements
paragraph.remove();