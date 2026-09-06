// foreach, map

// forEach: executes a provided function once for each array element

const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

let fruitList = fruits.forEach((fruit, index) => {
    // console.log(`${index + 1} -> ${fruit}`);
    return `${index + 1} -> ${fruit}`;
});

console.log(fruitList);