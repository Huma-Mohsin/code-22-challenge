// //Question 66: Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.
// Explain & TIP: The && operator in JavaScript checks if both sides are true. It's great for confirming several things are true all at once.
function And_Operator(Is_Enrolled, Has_Admit_Card) {
    if (Is_Enrolled && Has_Admit_Card === true) {
        console.log("Student Is Allowed To Enter In GOVERNOR HOUSE If Both Conditions True");
    }
    else {
        console.log("Student Is Not Allowed To Enter In Governor House If any Condition False");
    }
}
console.log("\n");
And_Operator(true, true);
console.log("\n");
And_Operator(true, false);
console.log("\n");
And_Operator(false, true);
console.log("\n");
And_Operator(false, false);
//Author-HUMA MOHSIN
