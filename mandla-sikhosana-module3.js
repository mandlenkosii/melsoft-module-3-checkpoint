// CHALLENGE 1 : Calculating the employee's salary

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
