// Resolve with number 10, multiply by 2 in first then(),
//  then by 3

let promise = new Promise((resolved, reject) =>{
    resolved(10);
});
promise
 .then((result) =>{
    return result * 2;
 })
 .then((result) =>{
    // return result * 3;
    console.log(result * 3);
 }); 
// //  Remember these two Promise rules:
// No semicolon (;) until the Promise chain is completely
//  finished.
// return immediately exits the current callback, so any code 
// after it in the same function is unreachable.
//  --------------------------------------------------------------------------------------------
// Create a new Promise

// let promise = new Promise((resolve, reject) => {

    // Immediately resolve the Promise with value 10

//     resolve(10);

// });

// promise

//     // First .then() receives the resolved value

//     .then((result) => {

        // result = 10

        // Multiply by 2

        // 10 * 2 = 20

        // Returning the value automatically
        // passes it to the next .then()

    //     return result * 2;

    // })

    // Second .then() receives the value
    // returned from the previous .then()

    // .then((result) => {

        // result = 20

    //     console.log(result);

    //     // Multiply by 3

    //     // 20 * 3 = 60

    //     // Return 60 to the next .then()

    //     return result * 3;

    // })

    // Third .then() receives the returned value

    // .then((result) => {

    //     // result = 60

    //     console.log(result);

    // });

/*
=========================
FLOW OF EXECUTION
=========================

1. Promise is created

2. resolve(10)

   State = fulfilled
   Value = 10

3. First .then()

   result = 10

   return 20

4. Second .then()

   result = 20

   console.log(20)

   return 60

5. Third .then()

   result = 60

   console.log(60)

OUTPUT:

20
60

=========================
IMPORTANT RULES
=========================

1. Do NOT put a semicolon (;) in the middle
   of a Promise chain.

Wrong:

.then(...);
.then(...);

Correct:

.then(...)
.then(...)

2. Anything written after 'return'
   inside the same function will never execute.

Wrong:

return result * 3;
console.log(result); // Never run */