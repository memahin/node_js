// feel the power of the literals

// math expessions

let price = 500;
let quantity = 3;

// console.log(`Total price is: ${price * quantity} taka. \nPay the price to get it as your own.`);

// Function Call

function getDiscount(price) {
    return price * 0.1;
}

// console.log(`You save ${getDiscount(price)} taka on this purchase.\nYour total price is: ${price * quantity - getDiscount(price)} taka.`);

let stock = 1;

console.log(`Stock is: ${stock > 0 ? "Available Stock: " + stock : "Out of Stock"}`);
