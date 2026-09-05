function isValidPrice(price) {
    return typeof price === 'number' && price > 0;
}

function isValidEmail(email) {
    return email.includes('@') && email.includes('.');
}

function calculateDiscount(price, discount) {
    if (!isValidPrice(price)) {
        return "Invalid price";
    }
    let discountAmount = (price * discount) / 100;
    return price - discountAmount;
}

function calculateFinalBill(price, vatRatePercentage=15) {
    let vatAmount = (price * vatRatePercentage) / 100;
    return price + vatAmount;
} 

function formatBDT(amount) {
    return "৳" + amount.toFixed(2);
}

function capitalizedString(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function processOrder(user, itemPrice, discountCode) {
    console.log(`--- Processing order for ${capitalizedString(user.name)} ---`);
    if (!isValidEmail(user.email)) {
        console.log("Invalid email address");
        return;
    }

    let currentPrice = itemPrice;

    if (discountCode == "NLB") {
        currentPrice = calculateDiscount(itemPrice, 20); // Apply 20% discount
        console.log("Discount applied: 20%");
    }

    let finalBill = calculateFinalBill(currentPrice);

    console.log("Final Bill (including VAT): ", formatBDT(finalBill));
    console.log("Thank you For Shopping with us!");

}
let user1 = { name: "mahin", email: "rafiul.mahin1@gmail.com" };

processOrder(user1, 18665, "NLB");
