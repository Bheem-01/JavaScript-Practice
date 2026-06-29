/*Program Started : (wait 2 sec), Program Finished*/
async function start(){
    console.log("Program started");
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Program finished");
        },2000);
    });
}

async function main(){
    let result = await start();
    console.log(result);
}
main();

/*A Promise is resolved only once.
If you want multiple messages at different times, print one immediately
and resolve the Promise at the appropriate time so that the second message
can be printed after await resumes.*/ 
/*
Program Flow

1. main() is called.

2. await start() executes.

3. start() prints:
   "Program started"

4. start() creates a new Promise.

5. Promise state = Pending.

6. setTimeout() starts a 2-second timer.

7. await pauses the execution of main()
   until the Promise is fulfilled.

8. After 2 seconds, we must call resolve()
   to fulfill the Promise.

9. In this code, Promise.resolve() is used
   instead of resolve().

10. Promise.resolve() creates a NEW Promise.
    It does NOT resolve the Promise created
    by new Promise().

11. Since the original Promise is never
    resolved, await keeps waiting forever.

12. Therefore, console.log(result) never
    executes.

=========================
IMPORTANT
=========================

resolve(value)
✔ Resolves the current Promise.

Promise.resolve(value)
✔ Creates a new resolved Promise.

These two are completely different.
*/