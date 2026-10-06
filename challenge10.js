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


