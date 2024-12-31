// Basic event handling
const button = document.querySelector('button');
button.addEventListener('click', function(e) {
    console.log('Button clicked!');
    console.log(e);  // Event object contains details about the event
});

// Event delegation
container.addEventListener('click', function(e) {
    if (e.target.matches('button')) {
        console.log('Button clicked through delegation');
    }
});
