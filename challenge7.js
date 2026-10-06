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

/* In this challenge, I learned how to calculate savings interest using the compound interest formula, how to implement tiered account fees based on account balance, and how to handle multi-currency transfers while considering floating-point precision. I also learned how to use the ternary operator for conditional logic and how to format numbers to two decimal places using the toFixed() method. */

/* Also , I learned that when dealing with floating-point numbers in JavaScript, it's important to be cautious of precision issues. Using methods like toFixed() can help present the results in a more user-friendly format. Additionally, understanding how to apply exchange rates and commission fees is crucial for accurate financial calculations.*/

/*Also saw how JavaScript can sometimes give slightly inaccurate results when working with decimals, like 0.1 + 0.2 giving 0.30000000000000004 instead of 0.3. To avoid problems, especially when working with money, I can round the result to the required number of decimal places or work with whole cents instead of decimals.*/