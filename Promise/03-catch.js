// catch():  Used when Promise fails.
// Syntax: promise.catch((error)=>{ 
//  });
let promise = new Promise((resolve, reject) =>{
    reject("Error");
});
promise.catch((result) =>{
    console.log("Promise rejected");
});

// Promise Failure -> reject() -> catch() -> error received
// Creating a new Promise
// JavaScript automatically provides two functions:
// resolve() -> called when the operation is successful
// reject()  -> called when the operation fails

let pro = new Promise((resolve, reject) =>{
    resolve("Success");

    // Calling resolve() changes the Promise state from:
    // pending -> fulfilled

    // The value "Success" gets stored inside the Promise
});

// Since the Promise is fulfilled,
// JavaScript executes the .then() block

pro
 .then((result)=>{
    console.log("Resolved");

    // JavaScript automatically passes the value
    // given to resolve() into the parameter 'result'

    // Internally:
    // resolve("Success")
    //          ↓
    // result = "Success"

    // We are not printing result here,
    // we are simply printing a custom message
 })
 .catch((error) =>{
    console.log("Rejected");
     // .catch() runs only when:
    // 1. reject() is called
    // OR
    // 2. an error occurs inside .then()

    // Since resolve() was called above,
    // this block will be skipped

 });
/*
 1. Promise is created
   State = pending

2. resolve("Success") is called
   State = fulfilled
   Value = "Success"

3. JavaScript sees the Promise is fulfilled
   and executes .then()

4. 'result' receives the value "Success"

   result = "Success"

5. console.log("Resolved") executes

OUTPUT:
Resolved

6. .catch() is skipped because
   the Promise was not rejected
*/