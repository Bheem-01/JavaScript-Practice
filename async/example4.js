// Create a Promise that resolves after 2 seconds with "Welcome" and 
// print it using await.

async function welcome(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("Welcome");
        },2000);
    })
}
async function main(){
    let result = await welcome();
    console.log(result);
}
main();

/*=========================
FLOW OF EXECUTION
=========================

1. JavaScript creates the welcome() function.

2. JavaScript creates the main() function.

3. main() is called.

4. welcome() creates a Promise.

5. Promise state = Pending.

6. setTimeout() starts a 2-second timer.

7. await pauses only the main() function
   until the Promise is fulfilled.

8. After 2 seconds,
   resolve("Welcome") is called.

9. Promise state changes:

   Pending → Fulfilled

10. await receives the resolved value.

11. result = "Welcome"

12. console.log(result) prints:

Welcome

=========================
IMPORTANT RULES
=========================

1. resolve(value) fulfills the Promise
   and sends 'value' to await or .then().

2. await waits until the Promise is fulfilled.

3. await pauses only the current async function,
   not the entire JavaScript program.

4. setTimeout() creates the delay,
   while resolve() completes the Promise.
*/ 