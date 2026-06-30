//Resolve 5, then double it using Promise Chaining.
let promise = new Promise((resolve, reject)=>{
    resolve(5);
});

promise.then((result)=>{
    console.log(result);
    return result * 2;
})

 .then((result)=>{
    // resolve(result * 2);
    console.log(result);

}); /*The moment you write a semicolon (;) in the middle,
 it's like putting a full stop in the sentence.
  The chain ends there, so the next .then() has nothing to attach to,
   which causes the syntax error. */

