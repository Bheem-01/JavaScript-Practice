// Create an async function that returns an object.
async function data(){
    return {
    name: "Bheem",
    degree: "MCA",
    role: "Software Developer"
    };
}
async function main(){
    let result = await data()
    console.log(result);
}
main();

/*/*
=========================================
PROGRAM FLOW
=========================================

1. data() is an async function.

2. Every async function automatically
   returns a Promise.

3. The object is returned using
   the return keyword.

4. JavaScript internally converts:

   return { ... }

   into

   Promise.resolve({ ... })

5. await waits for the Promise
   to be fulfilled.

6. After the Promise resolves,
   the object is stored in result.

7. console.log(result) prints
   the complete object.

=========================================
IMPORTANT CONCEPTS
=========================================

1. Curly braces after a function
   represent the function body,
   not an object.

2. To return an object, always use:

   return {
      ...
   };

3. Without return, an async function
   returns Promise { undefined }.
*/ 