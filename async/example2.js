// Create an async function that returns the number 100.
async function num(){
    return 100;
}

async function main(){
    let result =  await num();
    console.log(result);
}
main();
/* ⭐ One important concept to remember

Many beginners think await stops the whole JavaScript program. It doesn't.

await only pauses the current async function (main() in your example).
Other independent JavaScript code can continue running while main() is
waiting for the Promise to resolve. This is one of the key reasons
async/await is so useful.*/ 

/* // Create an async function.

// Every async function automatically returns a Promise.

async function num(){

    // Returning a normal value.

    // JavaScript automatically converts this to:
    // Promise.resolve(100)

    return 100;

}

// Create another async function.

// await can be used because this function is async.

async function main(){

    // Call num().

    // num() returns a Promise.

    // await pauses the execution of main()
    // until the Promise is fulfilled.

    let result = await num();

    // After the Promise is resolved,
    // 'result' stores the resolved value (100).

    console.log(result);

}

// Start the execution of the program.

main();

/*
=========================
FLOW OF EXECUTION
=========================

1. JavaScript creates the async function num().

2. JavaScript creates the async function main().

3. main() is called.

4. Inside main(), await num() executes.

5. num() returns Promise.resolve(100).

6. await pauses the execution of main()
   until the Promise is fulfilled.

7. The Promise resolves with the value 100.

8. The resolved value is assigned to 'result'.

9. console.log(result) prints:

100

10. main() finishes execution.

=========================
IMPORTANT RULES
=========================

1. Every async function always returns a Promise.

2. await only works with Promises.

3. await pauses only the current async function,
   not the entire JavaScript program.

4. await extracts the resolved value from the Promise.

Without await:

result = Promise {100}

With await:

result = 100
*/