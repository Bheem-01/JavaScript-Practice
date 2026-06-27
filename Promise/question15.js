// Simulate login success/failure using Promise.

function login(name, password){
  const correctUserName = "Bravo Echo 1";
  const correctPassword = 9842;
//   let enterUser = input("Enter user name: ");
//   let enterPass = input("Enter password: ");
  return new Promise((resolve, reject)=>{
    if(name === correctUserName && name === correctPassword){
        resolve("LOGIN SUCCESSFUL");
    }
    else{
        reject("DENIED");
    }
});
}
login("Aplha", "Tango1")
 .then((result) =>{
    console.log(result);
})
 .catch((error) =>{
    console.log(error);
 });

/* A simple rule to remember

Whenever a function contains:

return new Promise(...);

you can always use it in either of these ways:

let promise = myFunction();
promise.then(...).catch(...);

or simply:

myFunction().then(...).catch(...);

Both are correct because myFunction() returns a Promise object.
// login() returns a Promise because
// it contains:

return new Promise(...);

// Since the function returns a Promise,
// we can directly call .then() and .catch()
// on the function call.

// JavaScript internally treats this like:

// let promise = login("Alpha", "Tango1");

// promise
//     .then(...)
//     .catch(...);

// Therefore, both approaches are equivalent.

// 1. Store the Promise in a variable
//    and then call .then()

// 2. Directly call .then() on the function
//    because the function already returns a Promise.*/