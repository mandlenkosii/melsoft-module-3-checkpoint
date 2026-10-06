// CHALLENGE 1 : Calculating the employee's salary
// 1. Arithemetic operations

let grossSalary = 45000; //  Gross salary
let taxRate = "25%"; //  tax rate (25%)
let uifRate = "1%"; //  UIF rate (1%)
let medicalAid = 2500; // R2500 medical aid 


let taxRateDecimal = parseFloat(taxRate) / 100; // Convert tax rate to decimal
let uifRateDecimal = parseFloat(uifRate) / 100; // Convert UIF rate to decimal

// Calculate the tax amount
let taxAmount = grossSalary * taxRateDecimal;

// Calculate the UIF amount
let uifAmount = grossSalary * uifRateDecimal;  

// Calculate the total deductions
let totalDeductions = taxAmount + uifAmount + medicalAid;

// Calculate the net salary
let netSalary = grossSalary - totalDeductions;

console.log("Net Salary: R" + netSalary); // Output the net salary

//2. Assignment operators

let cartTotal = 0;

cartTotal += 150;
cartTotal += 85;
cartTotal += 220;

// Apply discount
cartTotal *= 0.10;

// Apply VAT
cartTotal *= 1.15;

console.log("Cart total: R" + cartTotal);


//3. Comparison operators

let age = 25;
let password = "securePassword123";
let email = "junior@mam.com";
let confirmEmail = "junior@mam.com";

let validAge = age >= 25; // Check if age is 25 or older
let validPassword = password.length >= 8; // Check if password is at least 8 characters long
let matchingEmails = email === confirmEmail; // Check if emails match  


console.log("Valid age:", validAge);
console.log("Valid password:", validPassword);
console.log("Matching emails:", matchingEmails);

