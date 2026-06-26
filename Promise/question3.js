// Use .then() to print a resolved value.
let promise = new Promise((resolve, reject)=>{
    resolve("Hello world");
});

promise.then((result) => {
    console.log(result);
});
