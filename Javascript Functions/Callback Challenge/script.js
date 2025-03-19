// 1
// Define a custom map function that takes an array and a callback function as arguments
function customMap(array, callback) {
    // Initialize an empty array to store the results
    let result = [];
    // Loop through each element in the input array
    for (let i = 0; i < array.length; i++) {
        // Apply the callback function to the current element and push the result to the result array
        result.push(callback(array[i]));
    }
    // Return the result array
    return result;
}
// Define an array of numbers
let numbers = [1, 2, 3];
// Use the custom map function to double each number in the array
let doubled = customMap(numbers, function(num) { return num * 2; });
// Log the result to the console
console.log(doubled); // Should output: [2, 4, 6]

// 2
// // Define a custom filter function that takes an array and a callback function as arguments
// function customFilter(array, callback) {
//     // Initialize an empty array to store the results
//     let result = [];
//     // Loop through each element in the input array
//     for (let i = 0; i < array.length; i++) {
//         // Apply the callback function to the current element
//         // If the callback returns true, push the element to the result array
//         if (callback(array[i])) {
//             result.push(array[i]);
//         }
//     }
//     // Return the result array
//     return result;
// }
// // Use the custom filter function to filter elements less than 10
// let result = customFilter([1, 2, 3, 4, 15], function(val) { return val < 10; });
// console.log(result); // Should output: [1, 2, 3, 4]

// 3
// // Define a custom some function that takes an array and a callback function as arguments
// function customSome(array, callback) {
//     // Loop through each element in the input array
//     for (let i = 0; i < array.length; i++) {
//         // Apply the callback function to the current element
//         // If the callback returns true, return true
//         if (callback(array[i])) {
//             return true;
//         }
//     }
//     // If no elements meet the condition, return false
//     return false;
// }

// // Use the custom some function to check if any element is greater than 5
// let result = customSome([1, 2, 3, 4], function(val) { return val > 5; });
// console.log(result); // Should output: false

// 4
// // Define a custom every function that takes an array and a callback function as arguments
// function customEvery(array, callback) {
//     // Loop through each element in the input array
//     for (let i = 0; i < array.length; i++) {
//         // Apply the callback function to the current element
//         // If the callback returns false, return false
//         if (!callback(array[i])) {
//             return false;
//         }
//     }
//     // If all elements meet the condition, return true
//     return true;
// }

// // Use the custom every function to check if all elements are greater than 0
// let result = customEvery([1, 2, 3], function(val) { return val > 0; });
// console.log(result); // Should output: true

// 5
// Define a custom reduce function that takes an array, a callback function, and an initial value as arguments
function customReduce(array, callback, initialValue) {
    // Initialize the accumulator with the initial value
    let accumulator = initialValue;
    // Loop through each element in the input array
    for (let i = 0; i < array.length; i++) {
        // Apply the callback function to the accumulator and the current element
        accumulator = callback(accumulator, array[i]);
    }
    // Return the accumulated result
    return accumulator;
}

// Use the custom reduce function to sum the elements in the array
let sum = customReduce([1, 2, 3], function(acc, num) { return acc + num; }, 0);
console.log(sum); // Should output: 6

// 6
// Define a custom includes function that takes an array and a callback function as arguments
function customIncludes(array, callback) {
    // Loop through each element in the input array
    for (let i = 0; i < array.length; i++) {
        // Apply the callback function to the current element
        // If the callback returns true, return true
        if (callback(array[i])) {
            return true;
        }
    }
    // If no elements meet the condition, return false
    return false;
}

// Use the custom includes function to check if any element equals 2
let result = customIncludes([1, 2, 3], function(val) { return val === 2; });
console.log(result); // Should output: true