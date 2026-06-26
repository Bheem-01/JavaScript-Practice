// Use .catch() to print a rejected value.
let promise = new Promise((resolve, reject) =>{
    reject("something went wrong");
});
promise.catch((error) =>{
    console.log(error);
});
/*
This Promise is created to demonstrate rejection.

The Promise immediately calls reject() with the message
"Something Went Wrong", which changes the Promise state
from Pending to Rejected.

Since the Promise is rejected, the catch() method executes.
The value passed to reject() is received in the catch()
callback and printed to the console.

Output:
Something Went Wrong
*/