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

//4. Logical operators

const isLoggedIn = true;
const isEmailVerified = true;
const isAdmin = true;

const canAccessDashboard = (isLoggedIn && isEmailVerified ) || isAdmin; // User can access dashboard if they are logged in, email verified, or they are an admin
console.log("Can access dashboard:", canAccessDashboard);


//5. Unary operator

const ageInput = "30";
const ageNumber = +ageInput; // Convert string to number using unary plus operator
console.log("Age as number:", ageNumber);

let isDarkMode = false;
isDarkMode = !isDarkMode;
console.log("Dark mode:", isDarkMode);

//6. Ternary operator



//7. String concatenation

const firstName = "Mandla";
const lastName = "Sikhosana";
let age1 = 25;

const greeting = "Hello, my name is " + firstName + " " + lastName + " and I am " + age1                
+ " years old.";
console.log(greeting);

/* I understand that ++x increases the value before it is used, while x++ uses the current value first and then increases it. For example, console.log(++x) gives the increased value, while console.log(x++) gives the original value.*/

/* I would use % to check if a number is even or odd, to perform something at regular intervals such as every 5 items, and to cycle through a fixed range like days of the week.
Nested ternary: I don't think nested ternaries are always bad, but I would avoid them when they make the code difficult to read. If there are several or complicated conditions, I would rather use if...else or switch because it is easier to understand and maintain.*/

// ========================================
// CHALLENGE 2 - EQUALITY DEEP DIVE
// ========================================

// Part A

// 1.
// My prediction: true
console.log(0 == false);

// 2
// My prediction: false
console.log(0 === false);

// 3
// My prediction: true
console.log("" == 0);

// 4
// My prediction: false
console.log("" === 0);

// 5
// My prediction: true
console.log("0" == 0);

// 6
// My prediction: false
console.log("0" === 0);

// 7
// My prediction: true
console.log(null == undefined);

// 8
// My prediction: false
console.log(null === undefined);

// 9
// My prediction: false
console.log(null == 0);

// 10
// My prediction: true
console.log(null >= 0);

// 11
// My prediction: false
console.log(null > 0);

// 12
// My prediction: true
console.log(NaN == NaN);

// 13
// Prediction: true
console.log(NaN === NaN);

// 14
// Prediction: true
console.log(Object.is(NaN, NaN));

// 15
// Prediction: true
console.log(+0 === -0);

// 16
// Prediction: false
console.log(Object.is(+0, -0));

// 17
// Prediction: true
console.log([1, 2, 3] == "1,2,3");

// 18
// Prediction: true
console.log([] == false);

// 19
// Prediction: true
console.log([] == 0);

// 20
// Prediction: true
console.log([0] == false);


// ========================================
// PART B - PASSWORD RESET VALIDATION
// ========================================

const newPassword = "Junior@123";
const confirmPassword = "Juniors@123";

const currentEmail1 = "junior@example.com";
const confirmEmail1 = "juniors@example.com";

// Check that both passwords are exactly the same.
const passwordsMatch = newPassword === confirmPassword;

// Check that both emails are exactly the same.
const emailsMatch = currentEmail === confirmEmail;

// The password should not be the same as the email.
const passwordIsDifferent = newPassword !== currentEmail;

// Check that the password has at least 8 characters.
const passwordIsLongEnough = newPassword.length >= 8;

console.log("Passwords match:", passwordsMatch);
console.log("Emails match:", emailsMatch);
console.log("Password is different:", passwordIsDifferent);
console.log("Password is long enough:", passwordIsLongEnough);

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

// CHALLENGE 4
// PART A - GRADE CONVERSION
// ========================================

let marks = 34; // Example marks

let grade = marks >= 90 ? "A" :
            marks >= 80 ? "B" :
            marks >= 70 ? "C" :
            marks >= 60 ? "D" : 
            marks <= 50 ? "F" : "Invalid Marks";

console.log("Grade:", grade); // Output the grade

// PART B -  Short-circuit defaults in user profile
// ========================================

let userProfile = {
    displayName: "",
    theme: "",
    maxResults: null,
    lastLogin: null,
    notificationCount: 0
};

// Use short-circuit evaluation to provide default values
let displayName = userProfile.displayName || "Guest User";
let theme = userProfile.theme || "light";
let maxResults = userProfile.maxResults ?? 10; // Use nullish coalescing operator for null or undefined

let lastLogin = userProfile.lastLogin ?? "Never";   // Use nullish coalescing operator for null or undefined
let notificationCount = userProfile.notificationCount ?? 0; // Use nullish coalescing operator for null or undefined

console.log("Display Name:", displayName);
console.log("Theme:", theme);
console.log("Max Results:", maxResults);
console.log("Last Login:", lastLogin);
console.log("Notification Count:", notificationCount);


/* So basically, short-circuit evaluation allows us to provide default values for properties that might be empty strings, null, or undefined. The nullish coalescing operator (??) is more specific and only provides the default value when the operand is null or undefined. */
/* || uses the default value for any falsy value (like empty string, 0, null, undefined, false), while ?? only uses the default for null or undefined. */


// PART C - Guard clauses with && and ?
// ========================================

let person = { 
    address: {
        city: "Cape Town"
    }
};

// Using && guards
console.log(
    person &&
    person.address &&
    person.address.city
);

// Using optional chaining
console.log(person?.address?.city);

// Using optional chaining with a default
console.log(person?.address?.city ?? "Unknown city");


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

// ========================================
// CHALLENGE 6 - BITWISE PERMISSIONS
// ========================================

const READ = 1;      // 0001
const WRITE = 2;     // 0010
const DELETE = 4;    // 0100
const ADMIN = 8;     // 1000

// Give a user READ and WRITE permissions.
let userPermissions = READ | WRITE;

console.log("User permissions:", userPermissions);

// Check READ permission.
const canRead = (userPermissions & READ) !== 0;

console.log("Can read:", canRead);

// Check DELETE permission.
const canDelete = (userPermissions & DELETE) !== 0;

console.log("Can delete:", canDelete);

// Give the user DELETE permission.
userPermissions |= DELETE;

console.log("After adding DELETE:", userPermissions);

// Removing WRITE permission.
userPermissions &= ~WRITE;

console.log("After removing WRITE:", userPermissions);

// Toggle ADMIN on.
userPermissions ^= ADMIN;

console.log("After ADMIN toggle:", userPermissions);

// Toggle ADMIN off.
userPermissions ^= ADMIN;

console.log("After second ADMIN toggle:", userPermissions);

// Create the next permission using left shift.
const SUPER_ADMIN = ADMIN << 1;

console.log("SUPER_ADMIN:", SUPER_ADMIN);

/* In this challenge, I learned how to use bitwise operators to manage user permissions. I used the OR operator (|) to combine permissions, the AND operator (&) to check for specific permissions, and the NOT operator (~) to remove permissions. I also learned how to toggle permissions using the XOR operator (^). Finally, I created a new permission by left-shifting an existing permission. This approach allows for efficient permission management using a single integer value.*/

/* I would use bitwise flags because I can store several permissions in one number, and it makes checking and combining permissions quick. It can also save space. */

/* The main problem is that bitwise flags can be confusing to read and change, especially when there are many permissions. I would rather use an array or a Set when I want my code to be simpler and easier to manage.*/

/* I understand that & and | work with individual bits, while && and || check conditions. If I use & instead of && by mistake, my code might give an unexpected result because the two operators work differently.*/


// CHALLENGE 7 : BANKING CALCULATOR 
//PART 1 :  Savings interest

let depositAmount = 25000; //  deposited amount
let annualRate = 0.075; //  interest rate (7.5%)
let monthlyCompound = 12; //  monthly compounding
let years = 3; //  number of years

// Calculating the interest earned using the formula: A = P(1 + r/n)^(nt)

let finalAmount = depositAmount * (1 + annualRate / monthlyCompound) ** (monthlyCompound * years);
let interestEarned = finalAmount - depositAmount;

console.log("Final amount: R", finalAmount.toFixed(2));
console.log("Interest earned: R", interestEarned.toFixed(2));


// PART 2 :  Tiered account fees

let accountBalance = 10000; //  account balance

let accountFee = 
  accountBalance >= 25000 ? 0  :
  accountBalance >= 5000  ? 75 :
  accountBalance >= 1000  ? 50 :
    25;

let yearlyFee = accountFee * 12; //  yearly fee

console.log("Account fee: R", accountFee);
console.log("Yearly fee: R", yearlyFee);

// PART 3 :  Multi-currency transfer with floating-point care 
//=========================================

let amountInZAR = 15750.33;
let exchangeRate = 18.42; // 1 USD = 18.42 ZAR
let commissionRate = 0.025; // 2.5% commission

let commission = amountInZAR * commissionRate;

let remainingAmount = amountInZAR - commission;

let amountInUSD = remainingAmount / exchangeRate;

console.log("Commission: R", commission.toFixed(2));
console.log("Amount after commission: R", remainingAmount.toFixed(2));
console.log("Amount received in USD: $", amountInUSD.toFixed(2));

/* In this challenge, I learned how to calculate savings interest using the compound interest formula, 
how to implement tiered account fees based on account balance, and how to handle multi-currency transfers while considering floating-point precision. I also learned how to use the ternary operator for conditional logic and how to format numbers to two decimal places using the toFixed() method. */

/* Also , I learned that when dealing with floating-point numbers in JavaScript, 
it's important to be cautious of precision issues. Using methods like toFixed() can help present the results in a more user-friendly format. Additionally, understanding how to apply exchange rates and commission fees is crucial for accurate financial calculations.*/

/*Also saw how JavaScript can sometimes give slightly inaccurate results when working with decimals,
 like 0.1 + 0.2 giving 0.30000000000000004 instead of 0.3. To avoid problems, especially when working with money, I can round the result to the required number of decimal places or work with whole cents instead of decimals.*/


 // CHALLENGE 9 : BUG HUNT

// 1. BUG FIND:
// var item1Price = "199.99"; 
// The problem with this line is that the price is stored as a string instead of a number. And also they have used var instead of const or let.

// 2. BUG FIND:
// var item2Price = "49.50";
// This is the same bug/problem as the first one, the price is stored as a string instead of a number. And also they have used var instead of const or let.

// 3. BUG FIND:
// var quantity = "2";
// The same bug as the first two.

// 4. BUG FIND:
// var customerAge = null;
// customerAge > 18 
// The problem with this line is that customerAge is null, and comparing null to a number will always return false. It should be initialized to a number instead of null.

// 5. BUG FIND: 
// var customerAge = null;
// customerAge >= 60
// The same bug as the previous one, customerAge is null, and comparing null to a number will always return false. It should be initialized to a number instead of null.

// 6. BUG FIND:
//var isLoggedIn = "true";
// The problem with this line is that isLoggedIn is a string instead of a boolean. It should be initialized to a boolean value (true or false) instead of a string.

// 7. BUG FIND:
// var discountCode = "SAVE10";
// discountCode == "SAVE10"
// The problem with this line is that discountCode is a string, and comparing it to another string using == will always return true. It should be compared using === instead of == to ensure strict equality.\

// 8. BUG FIND:
// item1Price + item2Price * quantity;
// The problem with this line is that the order of operations is incorrect. The multiplication should be done before the addition, so parentheses should be used to ensure the correct order of operations: (item1Price + item2Price) * quantity;


// 9. BUG FIND:
// total - seniorDiscount;
// The problem with this line is that total and seniorDiscount are not defined, so this line will throw a ReferenceError. They should be defined before this line is executed.

// CHALLENGE 10 : SELF REFLECTION


/* 1. Difference between &, |, &&, and || 
So with this it mainly having to understand & and | work with bits while && and || check conditions. If I use & instead of && by mistake, my code might give an unexpected result because the two operators work differently.*/

/*2. Difference between ?? and ||
With I had a problem understanding how it works but I think by definition I am supposed to use ?? when I only give a default value if something is like null or undefined.
While the || operator is supposed to be used when replacing a value like 0.
e.g if a bank balance is R0.00 then using || could replace it with another amount while if I used ?? it would still be the same and in case 0.*/

/* 3. Why does typeof null return "object"?
I am not sure but probably initialy when Javascript has created is that null was/is a object but I think the safest to check is to use vallue === null.*/

/* 4. Floating-point numbers in the bank calculator 
I learned that 0.1 + 0.2 does not give exactly 0.3 because JavaScript cannot store some decimal numbers perfectly. To handle money correctly.
So I would store amounts in cents instead of decimals to avoid these small errors.*/

/* 5. Hardest part 
I really struggled with understanding unary oparators and what was worse is working with bitwise operator as I understood that they are in a sense conditional operator but did not fully understand how you use them in the practical sense.*/


