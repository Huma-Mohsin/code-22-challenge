// //Question 65: Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing them using the % sign. For example, remainder(5, 2) should give 1.

// Explain & TIP: The % (modulus) operator finds what's left after one number is divided by another. It's handy for figuring out if numbers are even, odd, and more.

function get_remainder(dividend:number,divisor:number):number{
    return (dividend % divisor);
}
//calling function on log
console.log("Leftover from dividing dividend & divisor:",get_remainder(3,2));
console.log("\n");
console.log("Leftover from dividing dividend & divisor:",get_remainder(13,4));
console.log("\n");
console.log("Leftover from dividing dividend & divisor:",get_remainder(18,9));
//Author-HUMA MOHSIN

