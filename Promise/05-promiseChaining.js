let promise = new Promise ((resolve, reject) => {
    resolve(2);
});
promise 
 .then((result) =>{
    return result*2;

 })
 .then((result) =>{
    return result*3;
 })

 .then((result) =>{
    console.log(result);
});

// // Create a new Promise

let promise = new Promise((resolve, reject) => {

    // Immediately resolve the Promise with value 2

    resolve(2);
});

promise

    // First .then() receives the resolved value

    .then((result) => {

        // result = 2

        // Multiply the value by 2

        // 2 * 2 = 4

        // Returning a value from .then()
        // passes it to the next .then()

        return result * 2;

    })

    // Receives the value returned
    // from the previous .then()

    .then((result) => {

        // result = 4

        // Multiply the value by 3

        // 4 * 3 = 12

        // Return 12 to the next .then()

        return result * 3;

    })

    // Receives the value returned
    // from the previous .then()

    .then((result) => {

        // result = 12

        // Print the final value

        console.log(result);

    });

/*
=========================
FLOW OF EXECUTION
=========================

1. Promise is created

2. resolve(2) is called

   State = fulfilled
   Value = 2

3. First .then() runs

   result = 2

   return 2 * 2

   returns 4

4. Second .then() runs

   result = 4

   return 4 * 3

   returns 12

5. Third .then() runs

   result = 12

   console.log(12)

OUTPUT:
12

=========================
IMPORTANT RULE
=========================

Whatever is returned from one .then()
becomes the 'result' of the next .then()

Example:

.then((result) => {
    return 4;
})

↓

.then((result) => {

    // result = 4

})

*/