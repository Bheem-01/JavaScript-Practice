// Return your age using an async function and print it using await.
async function getAge(){
    return (`My age is 25`);
}

async function main(){
    let result = await getAge();
    console.log(result);
}
main();
/**Line-by-Line Execution
Step 1: JavaScript reads the getAge() function
async function getAge(){
    return ("My age is 25");
}
What happens?
JavaScript creates the function.
It stores the function in memory.
The function is not executed yet.

Memory:

getAge() → Function
Step 2: JavaScript reads the main() function
async function main(){
    let result = await getAge();
    console.log(result);
}

Again,

JavaScript creates another function.
It stores it in memory.
It does not execute it.

Memory:

getAge() → Function

main() → Function
Step 3: JavaScript reaches
main();

Now JavaScript calls the main() function.

Execution enters main().

main()

↓

Starts executing
Step 4: JavaScript executes
let result = await getAge();

Before assigning anything to result, JavaScript must execute:

getAge();
Step 5: getAge() starts executing
async function getAge(){
    return ("My age is 25");
}

It reaches:

return "My age is 25";

Since this is an async function, JavaScript automatically converts it internally into:

return Promise.resolve("My age is 25");

So getAge() actually returns:

Promise { "My age is 25" }
Step 6: await receives the Promise

Now JavaScript sees:

await getAge();

await says:

"I'll pause only the main() function until this Promise is resolved."

The Promise resolves with:

"My age is 25"
Step 7: Store the resolved value

After the Promise resolves,

JavaScript does:

let result = "My age is 25";

Memory becomes:

result → "My age is 25"
Step 8: Print the result

JavaScript executes:

console.log(result);

Output:

My age is 25
Step 9: main() finishes

The function ends and the program exits.*/ 