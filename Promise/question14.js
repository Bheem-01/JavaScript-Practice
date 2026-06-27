// Create a Promise that checks whether a number is even or odd.

function eveOdd(n){
    return new Promise((resolve, reject) =>{
    if(n % 2 == 0){
        resolve("The number is even");
    }
    else{
        reject("The number is odd");
    }
});
}
eveOdd(153)
.then((result) => {
    console.log(result);
})
.catch((error) =>{
    console.log(error);
});


/* Rule to Remember

A function that returns a Promise does not return the final value immediately. It returns a Promise object.
 To get the actual value, you must use:

.then(...)   // for resolve
.catch(...)  // for reject
1. eveOdd(153) is called

2. A Promise is created

3. Check:

   153 % 2 == 0

4. Condition is false

5. reject("The number is odd") is called

6. Promise state changes:

   pending -> rejected

7. JavaScript skips .then()

8. .catch() executes

9. Output:

The number is odd

=========================
IMPORTANT RULE
=========================

Wrong:

eveOdd(153);
.then(...)

The semicolon ends the statement,
so .then() has no Promise to attach to.

Correct:

eveOdd(153)
.then(...)
.catch(...)
*/