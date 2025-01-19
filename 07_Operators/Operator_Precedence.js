let result = 2 + 3 * 4;
console.log(result); // 14 (not 20)

// The result is 14, not 20, because the multiplication operator (*) has a higher precedence than the addition operator (+).
// The multiplication is done first, then the addition.
// Use parentheses to change the order of operations
result = (2 + 3) * 4;  // 20
console.log(result);