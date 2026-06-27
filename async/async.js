/*The async keyword is used before a function to make it
 asynchronous. An asynchronous function always returns a 
 Promise, regardless of what value you return inside it.
 
 How does async work?
Whenever JavaScript sees the async keyword:

It creates an asynchronous function.
The function automatically returns a Promise.
Any value returned from the function is wrapped inside Promise.resolve().
Any error thrown inside the function becomes Promise.reject(). */
