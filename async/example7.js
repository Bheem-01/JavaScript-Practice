// Return 50, multiply it by 2 using .then().
async function num(){
    return 50;
}
num()
 .then((result)=>{
    console.log(result*2);
 });

/*/*
=========================================
PROGRAM FLOW
=========================================

1. num() is an async function.

2. Every async function automatically
   returns a Promise.

3. Calling num() returns:

   Promise {50}

4. .then() waits for the Promise
   to be fulfilled.

5. The resolved value (50) is passed
   into the result parameter.

6. result is multiplied by 2.

7. The final output is 100.

=========================================
IMPORTANT CONCEPTS
=========================================

1. num is a function.

2. num() is a Promise.

3. .then() can only be used on a Promise,
   not on the function itself.

Wrong:
num.then(...)

Correct:
num().then(...)
*/