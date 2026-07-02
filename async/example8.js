/*Create a Promise that resolves after 2 seconds and consume it using await.*/
let promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved");
    },2000);
}); 
async function main(){
    let output = await promise
    console.log(output);
}
main();

/*
=========================================
PROGRAM FLOW
=========================================

1. A new Promise is created.

2. The Promise starts in the Pending state.

3. setTimeout() schedules resolve()
   to execute after 2 seconds.

4. JavaScript continues executing
   without waiting.

5. main() is called.

6. await promise pauses only the
   main() function until the Promise
   is fulfilled.

7. After 2 seconds, resolve() is called.

8. Promise state changes:
   Pending -> Fulfilled

9. The resolved value
   ("Promise Resolved") is returned
   by await and stored in output.

10. console.log(output) prints:

    Promise Resolved

=========================================
IMPORTANT CONCEPTS
=========================================

1. await works only inside an async function.

2. await pauses only the current async function,
   not the entire JavaScript program.

3. await returns the resolved value,
   not the Promise object.

4. A Promise starts as Pending and becomes
   Fulfilled after resolve() is called.
*/