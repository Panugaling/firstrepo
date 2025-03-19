// task 1
// Define a custom filter function that takes an array and a callback function
function customFilter(arr, callback) {
    var result = [];
    // Iterate over each element in the array
    for (var i = 0; i < arr.length; i++) {
        // If the callback function returns true for the current element, add it to the result array
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    // Return the filtered array
    return result;
}

// Define a callback function that checks if a number is even
function isEven(num) {
    return num % 2 === 0;
}

// Create an array of numbers
var numbers = [1, 2, 3, 4, 5, 6];
// Use the custom filter function to get only the even numbers from the array
var evenNumbers = customFilter(numbers, isEven);
// Log the result to the console
console.log(evenNumbers); // Output: [2, 4, 6]

// task 2
// Define a countdown function that takes a starting number and a callback function
function countdown(start, callback) {
    function count() {
        if (start >= 0) {
            // Call the callback function with the current number
            callback(start);
            start--;
            // Call the count function again after 1 second
            setTimeout(count, 1000);
        }
    }
    // Start the countdown
    count();
}

// Define a callback function that logs the number to the console
function displayNumber(num) {
    console.log(num);
}

// Start the countdown from 5 and display each number
countdown(5, displayNumber); // Output: 5 4 3 2 1 0 (with 1-second delay between each)

// Task 3
function createButton(buttonText, callback) {
    // Create a new button element
    var button = document.createElement("button");
    // Set the button's text
    button.innerText = buttonText;
    // Attach the event listener to the button
    button.addEventListener("click", callback);
    // Append the button to the body of the document
    document.body.appendChild(button);
}

function buttonClicked() {
    console.log("Button Clicked!");
}

createButton("Click Me", buttonClicked);

// Task 4:
function runTasks(tasks) {
    function runNextTask(index) {
        if (index < tasks.length) {
            tasks[index]();
            setTimeout(function() {
                runNextTask(index + 1);
            }, 1000);
        }
    }
    runNextTask(0);
}

function task1() {
    console.log("Task 1 completed");
}

function task2() {
    console.log("Task 2 completed");
}

function task3() {
    console.log("Task 3 completed");
}

runTasks([task1, task2, task3]);

//task 5:
function askQuestion(question, choices, correctAnswer, callback) {
    // Display the question
    console.log(question);
    // Display the choices
    for (var i = 0; i < choices.length; i++) {
        console.log((i + 1) + ": " + choices[i]);
    }
    // Prompt the user for their answer
    var userAnswer = prompt("Please enter the number of your answer:");
    // Check if the user's answer is correct
    var isCorrect = choices[userAnswer - 1] === correctAnswer;
    // Call the callback function with the result
    callback(isCorrect);
}

function checkAnswer(isCorrect) {
    if (isCorrect) {
        console.log("Correct!");
    } else {
        console.log("Wrong!");
    }
}

askQuestion("What is 2 + 2?", ["1", "2", "3", "4"], "4", checkAnswer);