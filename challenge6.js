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