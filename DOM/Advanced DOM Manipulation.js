// Working with classes
element.classList.add('my-class');
element.classList.remove('old-class');
element.classList.toggle('active');
element.classList.contains('my-class');

// Working with attributes
element.setAttribute('data-id', '123');
element.getAttribute('data-id');
element.hasAttribute('data-id');
element.removeAttribute('data-id');

// Working with styles
element.style.backgroundColor = 'red';
element.style.color = 'white';
element.style.cssText = 'color: blue; font-size: 16px;';
getComputedStyle(element).getPropertyValue('color');
