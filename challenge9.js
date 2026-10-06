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

