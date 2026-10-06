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