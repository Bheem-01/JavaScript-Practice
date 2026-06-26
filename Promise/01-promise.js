// Promise: A Promise is an object that represents a value
//  that may be available:
 // now
 // later
 // or never
// A Promise is an object that represents the eventual
//  completion or failure of an asynchronous operation.

// SYNTAX: let promise = new Promise((resolve, reject) => {


// });
// JavaScript automatically provides:

// resolve
// reject

// These are functions. You call one of them.

let promise = new Promise((resolve, reject) =>{
    resolve("Promise completed");
});
console.log(promise);

let pro = new Promise((resolve, reject) =>{
    reject("Promise rejected");
});
console.log(pro);


