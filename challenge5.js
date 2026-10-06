// ========================================
// CHALLENGE 5
// ========================================

// typeof
console.log(typeof 42);
console.log(typeof "hello");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);
console.log(typeof function () {});
console.log(typeof NaN);

// Array check
const values = [1, 2, 3];

console.log(Array.isArray(values));


// instanceof
console.log([] instanceof Array);
console.log([] instanceof Object);
console.log({} instanceof Object);
console.log("hello" instanceof String);
console.log(new String("hello") instanceof String);
console.log(42 instanceof Number);
console.log(new Date() instanceof Date);
console.log(/abc/ instanceof RegExp);


// delete
const user = {
    name: "Lerato",
    age: 25,
    role: "student"
};

console.log("Before:", user);

delete user.role;

console.log("After:", user);


// Array delete experiment
const numbers = [1, 2, 3, 4];

delete numbers[1];

console.log(numbers);
console.log(numbers.length);
console.log(numbers[1]);

/* In this challenge, I learned how to check JavaScript data types using typeof, how to identify arrays using Array.isArray(), and how instanceof checks an object's relationship to a constructor. I also learned how delete removes a property from an object. When I tested it on an array, I discovered that it leaves an empty slot and does not change the array's length. If I want to remove an array element completely and shift the other elements, I can use splice() instead.*/
