let textElement = document.getElementById("text-content")

// Reading the current text
console.log(textElement.textContent)

// Changing the text
textElement.textContent = "This text has been changed!"
console.log(textElement.textContent)

// Adding to existing text
textElement.textContent += " This text has been added!"
console.log(textElement.textContent)



let htmlElement = document.getElementById('html-content');

// Reading HTML content
console.log(htmlElement.innerHTML);  // Shows the HTML including the <span> tag

// Changing HTML content
htmlElement.innerHTML = "This text is <strong>bold</strong> and this is <em>italic</em>.";
// You should see formatted text with bold and italic parts

// Adding HTML content
htmlElement.innerHTML += " <span style='color: blue;'>Blue text added!</span>";
// New blue text should appear

// Modifying Attributes
// Elements can have various attributes (src, href, id, class, etc.). Let's manipulate them, add the following code line by line and see the changes happening:
let imgElement = document.getElementById('demo-img');
let linkElement = document.getElementById('demo-link');

// Getting attribute values
console.log(imgElement.getAttribute('src'));  // Shows the current image source
console.log(linkElement.getAttribute('href'));  // Shows the current link

// Setting attribute values
linkElement.setAttribute('href', 'https://www.example.com');  // Changes the link to example.com
console.log(linkElement.getAttribute('href'));  // Shows the new link

// Checking if attribute exists
console.log(imgElement.hasAttribute('alt'));  // Checks if the image has an alt attribute

// Removing attributes
linkElement.removeAttribute('href');  // Removes the href attribute from the link
console.log(linkElement.getAttribute('href'));  // Should show null or undefined

// Direct attribute access (when available):

imgElement.src = '<https://via.placeholder.com/250>';  // Another way to change src
imgElement.alt = 'A placeholder image';              // Change alt text

// Inline Styles
let styleBox = document.getElementById('style-box');

// Setting individual styles
styleBox.style.backgroundColor = 'lightblue';  // Changes background color
styleBox.style.border = '2px solid blue';  // Changes border
styleBox.style.borderRadius = '10px';  // Rounds the corners
styleBox.style.textAlign = 'center';  // Centers the text
styleBox.style.padding = '20px';  // Adds padding inside the box
// Box should now be light blue with rounded corners

// CSS properties with dashes are written in camelCase
styleBox.style.marginTop = '40px';  // insert margin-top

// Getting computed styles
let computedStyle = window.getComputedStyle(styleBox);  // Get all styles applied to the box
console.log(computedStyle.backgroundColor);  // Shows the background color

// Working with Classes
// The classList property provides methods to work with classes:
let classDemo = document.getElementById('class-demo');

// Adding a class
// Element should now have yellow background
classDemo.classList.add('highlight');  // Adds a class to the element

// Removing a class
classDemo.classList.remove('highlight');  // Removes the class from the element
// Element should now have no background color

// Toggling a class
classDemo.classList.toggle('highlight');  // Toggles the class on/off
// Element should now have yellow background again

// Checking if class exists
console.log(classDemo.classList.contains('highlight'));  // Returns true if class exists, false otherwise

// Multiple classes
classDemo.classList.add('success', 'highlight');  // Adds multiple classes at once

// Replacing one class with another
classDemo.classList.replace('success', 'error');  // Replaces 'success' with 'error'
// Element should now have red background