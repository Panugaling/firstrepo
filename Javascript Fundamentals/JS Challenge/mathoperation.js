// math_operations.js

// Task 1: Calculate the Total Cost of Items
let price1 = 12;
let price2 = 18;
let price3 = 25;
let totalCost = price1 + price2 + price3;

console.log(`The total cost of the items is: $${totalCost}`);

// Task 2: Calculate the Average of Three Numbers
let number1 = 8;
let number2 = 14;
let number3 = 22;
let average = (number1 + number2 + number3) / 3;

console.log(`The average is: ${average.toFixed(2)}`);

// Task 3: Odd or Even Checker
let checkNumber = 28;
if (checkNumber % 2 === 0) {
    console.log(`${checkNumber} is an even number.`);
} else {
    console.log(`${checkNumber} is an odd number.`);
}

// Task 4: Calculate Discounts
let initialPrice = 120;
let discountRate = 15;
let discountValue = (initialPrice * discountRate) / 100;
let finalPrice = initialPrice - discountValue;

console.log(`The discounted price is: $${finalPrice}`);

// Bonus Task: Reverse Percentage Calculation
let discountedFinalPrice = 90;
let discountPercent = 10;
let originalPrice = discountedFinalPrice / (1 - discountPercent / 100);


console.log(`The original price before the discount was: $${originalPrice}`);