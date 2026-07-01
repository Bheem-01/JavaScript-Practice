/* Resolve 10: 
Add 5
Multiply by 2
Subtract 4
Print the final answer.*/

let promise = new Promise((resolve, reject)=>{
    resolve(10);
})

promise.then((result)=>{
    return result + 5;
})

.then((result) =>{
    return result * 2;
})

.then((result)=>{
    return result - 4;
})

.then((result)=>{
    console.log(result);
});