// Resolve "Hello", then return "Hello World".
let promise = new Promise((resolve, reject)=>{
    resolve("Hello");
})
promise.then((result)=>{
    console.log(result);
    return (`Hello World`);
})

.then((result)=>{
    console.log(result);
});

/*A new Promise is created.

Initially the Promise state is

Pending

Step 2

JavaScript executes

resolve("Hello");

Now the Promise changes its state.

Pending
      ↓
Fulfilled

The Promise now stores

"Hello"
Step 3

JavaScript reaches

promise.then(...)

Since the Promise is already fulfilled,

.then() starts executing immediately.

Step 4

The resolved value

"Hello"

is automatically passed into

(result)

So JavaScript internally does something like

result = "Hello";

Now

console.log(result);

prints

Hello
Step 5

Now this line executes

return "Hello World";

Many beginners think this changes the original Promise.

❌ It doesn't.

Instead, it creates a new Promise behind the scenes.

Think of it like this:

Original Promise

↓

Hello

↓

First .then()

↓

return "Hello World"

↓

New Promise

↓

Hello World

So the returned value is passed to the next .then().

Step 6

Now the next .then() runs.

.then((result)=>{

This time,

result is

Hello World

because the previous .then() returned it.

Step 7
console.log(result);

prints

Hello World

Program ends.

Visual Flow Diagram
Promise Created
       │
       ▼
resolve("Hello")
       │
       ▼
Promise Fulfilled
       │
       ▼
First .then()
       │
       ▼
result = "Hello"
       │
       ▼
Print:
Hello
       │
       ▼
return "Hello World"
       │
       ▼
New Promise Created
       │
       ▼
Second .then()
       │
       ▼
result = "Hello World"
       │
       ▼
Print:
Hello World
       │
       ▼
Program Ends
One Important Concept ⭐

When you write: return "Hello World";

JavaScript internally treats it like this:

return Promise.resolve("Hello World");

That's why Promise chaining works so smoothly.*/ 