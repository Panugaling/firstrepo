<!-- Task 1: Inventory Tracker -->

Code:

function trackInventory(items) {
    let inventory = {};
    items.forEach(item => {
        inventory[item] = (inventory[item] || 0) + 1;
    });
    return inventory;
}

console.log(trackInventory(["apple", "banana", "apple", "orange", "banana", "apple"]));

Expected Output:

{ "apple": 3, "banana": 2, "orange": 1 }

Explanation:

The function counts occurrences of each item in the array and stores them in an object.

<!-- Task 2: Alphabetical Sorting -->

Code:

let words = ["zebra", "apple", "mango", "banana"];
words.sort();
console.log(words);

Expected Output:

[ "apple", "banana", "mango", "zebra" ]

Explanation:

The sort() method sorts the words alphabetically in ascending order.

<!-- Task 3: Unique Array Builder -->

Code:

function uniqueArray(arr) {
    return [...new Set(arr)];
}

console.log(uniqueArray([1, 2, 2, 3, 4, 4, 5]));

Expected Output:

[1, 2, 3, 4, 5]

Explanation:

The function uses Set to remove duplicates and returns a unique array.

<!-- Task 4: Triangle Checker -->

Code:

function isValidTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}

console.log(isValidTriangle(3, 4, 5));
console.log(isValidTriangle(1, 1, 3));

Expected Output:

true
false

Explanation:

A valid triangle satisfies the triangle inequality theorem: the sum of any two sides must be greater than the third side.