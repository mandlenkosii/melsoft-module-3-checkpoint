// ========================================
// CHALLENGE 3 - OPERATOR PRECEDENCE
// ========================================

// 1
// Prediction: 13 because multiplication happens before addition/subtraction.
console.log(2 + 3 * 4 - 1);

// 2
// Prediction: 15 because it will start with the brackets first then multiply
console.log((2 + 3) * (4 - 1));

// 3
// Prediction: 4 because it only substraction only it will start where the equation starts.
console.log(10 - 4 - 2);

// 4
// Prediction: 64, the power of 2**3 is 8 and then 8**2 is 64.
// Output was 512
console.log(2 ** 3 ** 2);

// 5
// Prediction: 3 because 10 % 3 is 1, then 1 * 2 is 2, and finally 2 + 1 is 3.
console.log(10 % 3 * 2 + 1);

// 6
// Prediction: 5 because division is evaluated from left to right.
console.log(100 / 4 / 5);

// 7
// Prediction: true because 5 + 2 is 7, which is greater than 6, and 3 is less than 4, so both conditions are true.
console.log(5 + 2 > 6 && 3 < 4);

// 8
// Prediction: true because the first part of the expression (true && false) evaluates to false, but the second part (true && true) evaluates to true. Since it's an OR operation, the overall result is true.
console.log(true && false || true && true);

// 9
// Prediction: true because !false is true, and !!0 is false, so the overall expression evaluates to true.
// Output was false
console.log(!false && !!0);

// 10
// Prediction: true because 5 > 3 is true, 10 < 20 is true, and !(2 === "2") is true.
console.log(5 > 3 && 10 < 20 || !(2 === "2"));

// 11
// Prediction: 1035 because it multiplies 1000 by 1.15 and then by 0.9.
console.log(1000 * 1.15 * 0.9);

// 12
// Prediction: "number"
// Output was "number1" because the typeof operator returns a string, and then the + operator concatenates the string "number" with the number 1.
console.log(typeof 5 + 1);

// 13
// Prediction: "number"
console.log(typeof (5 + 1));

// 14
// Prediction: "56"
console.log("5" + 3 * 2);

// 15
// Prediction: 4    
console.log("5" - 3 + 2);

/*I use parentheses to make my code easier to read and to show which operations should happen first, even when JavaScript can understand the code without them. This helps avoid confusion and makes the logic clearer to other developers.*/

