let mainTitle = document.getElementById("main-title");
console.log(mainTitle);
console.log(mainTitle.textContent);

// Let's change its color so we can see we've selected it correctly
mainTitle.style.color = 'blue';

// Try selecting a non-existent ID
let nonExistent = document.getElementById('non-existent');
console.log(nonExistent); // null

// getElementsByClassName
// This method selects all elements with a specific class. Add this to your script:
let boxes = document.getElementsByClassName('box');
console.log(boxes);

// Let's modify all boxes to prove we selected them
// getElementsByClassName returns an HTMLCollection (array-like object)
// You need to loop through the collection to modify all elements
// The collection is "live" (automatically updates if elements are added/removed)
for (let box of boxes) {
    box.style.backgroundColor = 'lightblue';
}

let specialElements = document.getElementsByClassName('special');
for (let element of specialElements) {
    element.style.border = '2px solid black';
}

// getElementsByTagName
// This method selects all elements of a specific HTML tag. Add this
let paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);

// Change all paragraphs
for (let paragraph of paragraphs) {
    paragraph.style.fontSize = '32px';
}


// Select by ID
let container = document.querySelector('#container');
container.style.padding = '100px';

// Select by class
let firstBox = document.querySelector('.box');
firstBox.style.backgroundColor = 'lightblue';

// More complex selections
let specialItem = document.querySelector('li.special');
specialItem.style.color = 'red';

// First paragraph inside container
let boxParagraph = document.querySelector('#container p');


// querySelectorAll
// Similar to querySelector but returns all matching elements:

let allBoxes = Document.querySelectorAll('.box');
allBoxes.forEach(box => {
    box.style.margin = '100px';
})

// Select all special elements inside the list
let specialListItems = document.querySelectorAll('#list .special');
specialListItems.forEach(item => {
    item.style.fontWeight = 'bold';
});


// Select all elements with class 'special' inside elements with class 'box'
let specialBoxes = document.querySelectorAll('.box .special');
specialBoxes.forEach(box => {
    box.style.backgroundColor = "red";
});

// Select the first paragraph that has both 'text' and 'special' classes
let specialText = document.querySelector('p.text.special');
specialText.style.textDecoration = 'underline';

// Select all list items except the special one
let regularItems = document.querySelectorAll('li.item:not(.special)');
regularItems.forEach(item => {
    item.style.color = 'gray';
});