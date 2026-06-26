// Create a Promise that rejects with "Something Went Wrong".

let promise = new Promise((resolved, reject) =>{
    reject("Something went wrong");
});
console.log(promise);
promise.catch((error) => {
    console.log(error);
});
/*
This Promise is immediately rejected with the message
"Something went wrong". The Promise state changes from
Pending to Rejected.

When console.log() is used, it prints the Promise object
itself, not the rejection message. Since the rejection is
not handled using catch(), JavaScript may show an
Unhandled Promise Rejection error.

To access the rejection reason properly, use the catch()
method and handle the error.
*/
