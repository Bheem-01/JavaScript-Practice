// Create a Promise that rejects with "Something Went Wrong".
let promise = new Promise((resolved, reject) =>{
    reject("Something went wrong");
});

promise.catch((error) =>{
    console.log(error);
});

// Create a new Promise
// The Promise constructor automatically provides
// two functions in this order:
//
// 1. resolve() -> marks the Promise as fulfilled
// 2. reject()  -> marks the Promise as rejected

// let promise = new Promise((resolve, reject) => {

//     // Calling reject() changes the Promise state:
//     // pending -> rejected

//     // The value "Something went wrong"
//     // is stored as the rejection reason

//     reject("Something went wrong");
// });

// .catch() executes only if the Promise
// is rejected or an error occurs

// promise.catch((error) => {

    // JavaScript automatically passes the
    // rejection reason to the parameter 'error'

    // Internally:
    // error = "Something went wrong"

//     console.log(error);
// });

/*
=========================
FLOW OF EXECUTION
=========================

1. Promise is created

   State = pending

2. reject("Something went wrong") is called

   State changes:

   pending -> rejected

3. The rejection reason is stored:

   "Something went wrong"

4. JavaScript finds a .catch() attached
   to the Promise

5. It automatically passes the rejection
   reason to the 'error' parameter

   error = "Something went wrong"

6. console.log(error) executes

OUTPUT:

Something went wrong

=========================
COMMON MISTAKE
=========================

Wrong:

new Promise((reject) => {
    reject("Error");
});

Here, 'reject' is actually the first parameter,
which is resolve().

So this becomes:

resolve("Error");

The Promise is fulfilled, not rejected.

Always write:

new Promise((resolve, reject) => {

// });
*/