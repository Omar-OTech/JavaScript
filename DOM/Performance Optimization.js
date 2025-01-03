// Document Fragment for batch DOM updates
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
    const div = document.createElement('div');
    div.textContent = `Item ${i}`;
    fragment.appendChild(div);
}
container.appendChild(fragment); // Only one reflow/repaint

// Efficient DOM queries
const elements = document.getElementsByClassName('item'); // Live collection
const elementsAll = document.querySelectorAll('.item');     // Static NodeList

// Debouncing DOM updates
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const debouncedUpdate = debounce(() => {
    // DOM update code here
}, 250);