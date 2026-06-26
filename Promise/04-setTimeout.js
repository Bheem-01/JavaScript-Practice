let promise = new Promise((resolve, reject)=>{
    setTimeout(() =>{
        resolve("Resolved after 3 second");
    }, 3000);
});
promise.then((result)=>{
    console.log(result);
});

/* STEP BY STEP EXECUTION
=========================

1. Promise is created

   State = pending

2. setTimeout() starts a timer

   Time remaining = 3 seconds

3. JavaScript does NOT wait here

   It continues executing the rest of the code

4. .then() is attached to the Promise

   Promise is still pending

   JavaScript stores the callback function
   and waits for the Promise to settle

5. After 3 seconds

   setTimeout callback runs

6. resolve("Resolved after 3 second")

   State changes:

   pending -> fulfilled

   Stored Value:

   "Resolved after 3 second"

7. Since a .then() handler is attached

   JavaScript automatically executes it

8. The resolved value is passed to result

   result = "Resolved after 3 second"

9. console.log(result) runs */