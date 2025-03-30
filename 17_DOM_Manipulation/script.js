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
