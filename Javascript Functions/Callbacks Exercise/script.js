// Function to perform a calculation based on the provided operation callback
function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

// Callback function to add two numbers
function add(a, b) {
    return a + b;
}

// Callback function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Callback function to subtract the second number from the first
function subtract(a, b) {
    return a - b;
}

// Callback function to divide the first number by the second
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

// Example usage of the calculate function with different operations
console.log(calculate(5, 3, add)); // Output: 8
console.log(calculate(4, 2, multiply)); // Output: 8
console.log(calculate(10, 4, subtract)); // Output: 6
console.log(calculate(20, 5, divide)); // Output: 4

// Function to display a message after a delay with before and after callbacks
function delayedMessage(message, delay, beforeDelayCallback, afterDelayCallback) {
    beforeDelayCallback();
    setTimeout(() => {
        afterDelayCallback(message);
    }, delay);
}

// Example usage of the delayedMessage function
delayedMessage("Hello, world!", 2000, function() {
    console.log("Delay started...");
}, function(msg) {
    console.log(msg);
});

// Function to repeat a task a specified number of times with a callback
function repeatTask(times, callback) {
    for (let i = 0; i < times; i++) {
        if (callback(i) === false) {
            break;
        }
    }
}

// Example usage of the repeatTask function
repeatTask(3, function(index) {
    console.log("Iteration:", index);
    if (index === 1) {
        return false; // Stop the loop when index is 1
    }
});