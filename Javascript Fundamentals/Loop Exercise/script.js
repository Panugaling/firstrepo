// 1. Multiplication Table Generator
let number = 7; // Assign a value between 1 and 10
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

// 2. Sum of First N Natural Numbers
let n = 6; // Assign a value greater than 0
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log(`The sum of the first ${n} numbers is: ${sum}`);

// 3. Array Elements Printer
let array = [10, 20, 30, 40, 50]; // Array with at least 5 elements
for (let i = 0; i < array.length; i++) {
    console.log(`Array Element: ${array[i]}`);
}

// 4. Pattern Printer
let rows = 5;
for (let i = 1; i <= rows; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += '*';
    }
    console.log(pattern);
}

// 5. Reverse Array Elements
let reverseArray = [3, 6, 9, 12, 15]; // Array with at least 5 elements
for (let i = reverseArray.length - 1; i >= 0; i--) {
    console.log(`Reversed Element: ${reverseArray[i]}`);
}