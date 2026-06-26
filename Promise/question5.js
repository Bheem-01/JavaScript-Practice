// Create a Promise that resolves after 5 seconds using 
// setTimeout(

let promise = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve("Promise resolved after 5 seconds");
    }, 5000);
});
promise.then((result) =>{
console.log(result);
});