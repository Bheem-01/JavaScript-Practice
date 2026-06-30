let balance = 500;
let promise = new Promise((resolve,reject)=>{
    if(balance >= 1000){
        resolve("Sufficient balance, you can withdraw");
    }
    else{
        reject("Insufficient balance, you can not withdraw");
    }
    
});

   promise
     .then((result)=>{
        console.log(result);
     })
     .catch((error)=>{
        console.log(error);
     });
    /*// Promise Constructor
// -------------------
// The function inside new Promise() executes immediately when the Promise is created.
// Its only responsibility is to PRODUCE a result by either:
// 1. Calling resolve() -> Success (Promise becomes Fulfilled)
// 2. Calling reject()  -> Failure (Promise becomes Rejected)
//
// Think of the Promise constructor as the "Producer" of data.

// Consumer (.then() / .catch())
// -----------------------------
// .then() and .catch() are NOT written inside the Promise constructor.
// They are attached AFTER the Promise object is created.
//
// Their responsibility is to CONSUME (receive) the result produced by the Promise.
//
// .then()  -> Executes when the Promise is fulfilled (resolve is called)
// .catch() -> Executes when the Promise is rejected (reject is called)
//
// This separation of Producer and Consumer makes Promises:
// ✔ Readable
// ✔ Reusable
// ✔ Chainable

let balance = 500;

let promise = new Promise((resolve, reject) => {

    // Producer Logic
    // Check the balance and produce either a success or failure result.

    if (balance >= 1000) {
        resolve("Sufficient balance, you can withdraw");
    } else {
        reject("Insufficient balance, you cannot withdraw");
    }

});

// Consumer
// Attach handlers to receive the result produced by the Promise.

promise
    .then((result) => {
        // Runs only if resolve() is called.
        console.log(result);
    })
    .catch((error) => {
        // Runs only if reject() is called.
        console.log(error);
    });

/*
=========================
Execution Flow
=========================

1. JavaScript creates the Promise object.
2. The Promise constructor executes immediately.
3. The balance is checked.
4. Since balance = 500, reject() is called.
5. Promise state changes:
      Pending --> Rejected
6. JavaScript finishes executing the synchronous code.
7. The .catch() callback is placed in the Microtask Queue.
8. Once the Call Stack becomes empty, the Event Loop executes the .catch() callback.
9. Console Output:
      "Insufficient balance, you cannot withdraw"

Note:
resolve() and reject() only PRODUCE the result.
.then() and .catch() CONSUME the result.
*/  