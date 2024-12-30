// Event capturing and bubbling
element.addEventListener('click', handler, true);  // Capturing phase
element.addEventListener('click', handler, false); // Bubbling phase (default)

// Custom events
const customEvent = new CustomEvent('myEvent', {
    detail: { message: 'Hello!' },
    bubbles: true,
    cancelable: true
});
element.dispatchEvent(customEvent);

// Event delegation with multiple handlers
container.addEventListener('click', function(e) {
    const target = e.target;
    if (target.matches('.btn-delete')) {
        handleDelete(target);
    } else if (target.matches('.btn-edit')) {
        handleEdit(target);
    }
});