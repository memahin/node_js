// Spread Operator - three dots (...) is used to expand an iterable (like an array or string) into individual elements. It can be used in various contexts, such as function calls, array literals, and object literals.

// Example 1: Using spread operator with arrays
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers); // Output: [1, 2, 3, 4, 5]

// Example 2: Using spread operator with objects
const person = {
    name: "Alice",
    age: 30
};

const updatedPerson = {
    ...person,
    age: 31 // Overriding the age property
};

console.log(updatedPerson); // Output: { name: 'Alice', age: 31 }

// Example 3: Using spread operator in function calls
function sum(a, b, c) {
    return a + b + c;
}

const nums = [1, 2, 3];
console.log(sum(...nums)); // Output: 6

// Example 4: Combining arrays using spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// Example 5: Cloning an object using spread operator
const originalObject = { a: 1, b: 2 };
const clonedObject = { ...originalObject };
console.log(clonedObject); // Output: { a: 1, b: 2 }    