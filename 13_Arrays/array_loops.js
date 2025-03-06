let fruits = ['apple', 'banana', 'orange', 'grape'];

// Basic forward iteration
for (i = 0; i < fruits.length; i++) {
    console.log(`fruit ${i + 1}: ${fruits[i]}`);
}

console.log('----------------------------------');

// Backward iteration
for (i = fruits.length -1; i >= 0; i--) {
    console.log(`fruit ${i + 1}: ${fruits[i]}`);
}

console.log('----------------------------------');

// Skipping elements (every second element)
for (i = 0; i < fruits.length; i += 2) {
    console.log(`fruit ${i + 1}: ${fruits[i]}`);
}

console.log('----------------------------------');

let numbers = [1, 2, 3, 4, 5];

// Breaking out of a loop
for (i = 0; i < numbers.length; i++) {
    if (numbers[i] == 3) {
        break;
    }
    console.log(numbers[i]); // Outputs: 1, 2
}

console.log('----------------------------------');
// Skipping elements with continue
for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        continue;
    }
    console.log(numbers[i]); // Outputs: 1, 3, 5
}

// Modifying array elements
for (i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 2;
}
console.log(numbers); // Outputs: [2, 4, 6, 8, 10]

console.log('----------------------------------');

let colors = ['red', 'green', 'blue'];
let k = 0;
while (k < colors.length) {
    console.log(colors[k]);
    k++;
}

console.log('----------------------------------');

// Another pattern using while
let j = colors.length
while (j--) {
    console.log(colors[j]);
}

console.log('----------------------------------');
// Note: You can't easily access the index in for...of
// If you need both element and index, use for loop or forEach

let nums = [1, 2, 3, 4, 5];
for (let num of nums) {
    console.log(num);
}

console.log('----------------------------------');

let nums2 = [1, 2, 3, 4, 5];
let searchValue = 3;

for (i = 0; i < nums2.length; i++) {
    if (nums2[i] == searchValue) {
        console.log(`Found ${searchValue} at index ${i}`);
        break;
    }
}

console.log('----------------------------------');

let prices = [10, 20, 30, 40]
for (i = 0; i < prices.length; i++) {
    prices[i] = prices[i] * 1.2; // Adding 20% tax
}
console.log(prices); // Outputs: [20, 40, 60, 80]

console.log('----------------------------------');
let scores = [75, 90, 85, 65, 95];
let highScores = [];
for (i = 0; i < scores.length; i++) {
    if (scores[i] >= 90) {
        highScores.push(scores[i]);
    }
}
console.log(highScores); // Outputs: [90, 95]

console.log('----------------------------------');

let largeArray = new Array(1000000).fill(1);
// Caching the length can improve performance in very large arrays
let len = largeArray.length;
for (i = 0; i < len; i++) {
    // Operations on largeArray
}

// Versus recalculating length each time
for (i = 0; i < largeArray.length; i++) {
    // Operations on largeArray
}

console.log('----------------------------------');

// Off-by-one errors:
let arr = [1, 2, 3];

// Wrong
for (let i = 1; i <= arr.length; i++) { // Starts from 1 and includes length
    console.log(arr[i]); // Will give undefined for last iteration
}

// Correct
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
