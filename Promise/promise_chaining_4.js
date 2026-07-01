/*Resolve "JS".

Return "Node"
Return "Express"
Return "MongoDB"*/ 

let promise = new Promise((resolve, reject)=>{
    resolve("JS");
})
promise.then((result)=>{
    console.log(result);
    return "Node";
})
.then((result)=>{
    console.log(result);
    return "Express";
})
.then((result)=>{
    console.log(result);
    return "MongoDB"
})
.then((result)=>{
    console.log(result);
})

/*/*
=========================================
PROGRAM FLOW
=========================================

1. A Promise is created.

2. resolve("JS") fulfills the Promise.

3. The first .then() receives "JS" as result.

4. return "Node" sends "Node" to the next .then().

5. The second .then() receives "Node".

6. return "Express" sends "Express" to the next .then().

7. The third .then() receives "Express".

8. return "MongoDB" sends "MongoDB" to the next Promise.

9. Since there is no fourth .then(),
   "MongoDB" is never used.

=========================================
IMPORTANT CONCEPTS
=========================================

1. return does NOT print anything.

2. return only passes the value
   to the next .then().

3. To display a value, use console.log().

4. The last returned value is lost
   if there is no next .then() to receive it.
*/ 