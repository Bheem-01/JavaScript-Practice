// .then(): Used when Promise succeeds.
// Syntax: promise.then((result) => { });

// When JavaScript sees new Promise(), it automatically provides two functions to you:
// let resolve = someFunction;
// let reject = someFunction;
// You don't create them. JavaScript creates them.

let promise = new Promise((resolve, reject) =>{
    resolve("Promise resolved");  //This means:"My work is successful. Store this value inside the promise."
});
promise.then((result) =>{  //Here you're telling JavaScript:"When this promise gets fulfilled, run this function."
   //JavaScript sees the Promise is fulfilled. So it automatically passes the stored value:
   
    console.log(result);
});