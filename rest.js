// Rest

// Function

function add(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
    }

// console.log(add(1, 2, 3, 4, 5, 4, 34, 654, 23, 4, 5, 6, 7, 8, 9));

// array destructuring with rest

const arr = [1, 2, 3, 4, 392, 291];

// const [, , , ...r1] = arr;

// console.log(r);


const [a, b, c, d, ...r1] = arr;

console.log(b, r1);    