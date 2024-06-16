// For Loop
console.log("For Loop Example:");
for (let i = 0; i < 5; i++) {
    console.log("This is iteration number " + i);
}
console.log("\n");

// While Loop
console.log("While Loop Example:");
let i = 0;
while (i < 5) {
    console.log("This is iteration number " + i);
    i++;
}
console.log("\n");

// Do...While Loop
console.log("Do...While Loop Example:");
i = 0;
do {
    console.log("This is iteration number " + i);
    i++;
} while (i < 5);
console.log("\n");

// For...In Loop
console.log("For...In Loop Example:");
const person = { name: "John", age: 30, city: "New York" };

for (let key in person) {
    console.log(key + ": " + person[key]);
}
console.log("\n");

// For...Of Loop
console.log("For...Of Loop Example:");
const numbers = [10, 20, 30, 40, 50];

for (let number of numbers) {
    console.log(number);
}
console.log("\n");

// Sum of Numbers Using a For Loop
console.log("Sum of Numbers Using a For Loop:");
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Sum of first 10 natural numbers is " + sum);
console.log("\n");

// Finding an Element Using a While Loop
console.log("Finding an Element Using a While Loop:");
const fruits = ["apple", "banana", "mango", "orange"];
i = 0;
while (i < fruits.length) {
    if (fruits[i] === "mango") {
        console.log("Mango found at index " + i);
        break;
    }
    i++;
}
console.log("\n");

// Repeating a Message Using a Do...While Loop
console.log("Repeating a Message Using a Do...While Loop:");
let count = 0;
do {
    console.log("Hello, World!");
    count++;
} while (count < 3);
console.log("\n");
