function greet(name, time) {
    console.log('Good ' + time + ', ' + name + '!');
}

greet('Alice', 'morning'); // Good morning, Alice!
greet('Bob', 'afternoon'); // Good afternoon, Bob!

function greetWithDefault(name='Guest') {
    console.log('Hello, ' + name + '!');
}

greetWithDefault(); // Hello, Guest!
greetWithDefault('Alice'); // Hello, Alice!