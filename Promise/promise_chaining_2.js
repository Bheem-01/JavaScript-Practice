// Create three .then() methods that print 1, 2, 3.
let promise = new Promise((resolve, reject)=>{
    resolve (1);
})
promise.then((result)=>{
    console.log(result);
    return result + 1;
})

.then((result)=>{
    console.log(result);
    return result + 1;
})
.then((result)=>{
    console.log(result);
});
/*/*
=========================================
WHY THE PREVIOUS CODE FAILED
=========================================

1. ${} can only be used inside template
   literals (backticks).

   Wrong:
   console.log(${result});

   Correct:
   console.log(`${result}`);

   or simply:
   console.log(result);

2. The first .then() did not return a value.

3. If a .then() does not return anything,
   JavaScript automatically returns undefined.

4. Therefore the next .then() receives
   undefined as its result.

5. undefined + 1 becomes NaN.

=========================================
IMPORTANT RULE
=========================================

If the next .then() needs a value,
always return it from the previous .then().
*/ 

/*Why doesn't it run?

Because of this line:

return 1;

You are returning 1 from the executor function, not resolving the Promise.

Very Important Concept ⭐

When you write

new Promise((resolve, reject) => {

});

the function inside is called the executor function.

Its job is NOT to return a value.

Its job is only to call either:

resolve(value);

or

reject(error);
What happened in your code?
Step 1

JavaScript creates the Promise.

Promise State

Pending
Step 2

It executes

return 1;

Where does this 1 go?

It simply returns from the executor function.

JavaScript ignores it.

Think of it like this:

Executor Function

↓

return 1

↓

Value thrown away ❌

↓

Promise is still Pending

The Promise never becomes fulfilled.

Step 3

Now JavaScript reaches

promise.then(...)

.then() only runs when the Promise is

Fulfilled

But your Promise is still

Pending

So .then() never executes.*/ 