// Task 1

let score = 85;
let grade;
switch (true) {
    case (score >= 90):
        grade = "A";
        break;
    case (score >= 80):
        grade = "B";
        break;
    case (score >= 70):
        grade = "C";
        break;
    case (score >= 60):
        grade = "D";
        break;
    default:
        grade = "F";
}
console.log("Grade:", grade);

// Task 2

let temperature = 18;
switch (true) {
    case (temperature < 0):
        console.log("It's freezing outside! Bundle up!");
        break;
    case (temperature <= 15):
        console.log("It's cold outside. Wear a jacket.");
        break;
    case (temperature <= 30):
        console.log("The weather is nice. Enjoy your day!");
        break;
    default:
        console.log("It's hot outside. Stay hydrated!");
}

// Task 3

let age = 16;
switch (true) {
    case (age < 13):
        console.log("You are too young for this activity.");
        break;
    case (age <= 17):
        console.log("You need parental permission.");
        break;
    default:
        console.log("You are eligible for this activity.");
}

// Task 4

let isMember = true;
let ticketPrice;
if (age < 12) {
    ticketPrice = "Free";
} else if (isMember) {
    ticketPrice = "$10";
} else {
    ticketPrice = "$15";
}
console.log("Ticket Price:", ticketPrice);

// Task 5

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log("Is 2024 a leap year?", isLeapYear(2024));
console.log("Is 1900 a leap year?", isLeapYear(1900));
console.log("Is 2000 a leap year?", isLeapYear(2000));