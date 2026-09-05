
let name = "Mahin";

console.log("Hello, " + name + "! Welcome to the shopping cart. ");

let cart = [
    {name: "Apple", price: 1.00, quantity: 3},
    {name: "Banana", price: 0.50, quantity: 5},
    {name: "Orange", price: 0.75, quantity: 2}
];

let totalPrice = 0;
let totalQuantity = 0;

for (let item of cart) {
    totalPrice += item.price * item.quantity;
    totalQuantity += item.quantity;
}

console.log(`Total Price: $${totalPrice.toFixed(2)}`);
console.log(`Total Quantity: ${totalQuantity}`);