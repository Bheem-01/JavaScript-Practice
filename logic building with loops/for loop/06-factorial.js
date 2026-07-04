// Print factorial of a given number:
function fact(n){
    let answer = 1;
    for(let i = n; i>=1; i--){
        answer = answer * i;
        // console.log(`The factorial of ${n} is: ${n*i}`);
      
    }
console.log(answer);

}
fact(5);

/*
=========================================
PROGRAM EXPLANATION
=========================================

1. The function fact(n) calculates the
   factorial of the given number.

2. A variable named 'answer' is initialized
   to 1 because 1 is the multiplicative identity.

3. The for loop starts from n and decreases
   the value of i until it reaches 1.

4. During each iteration, the current value
   of answer is multiplied by i.

5. The updated result is stored back in
   the answer variable.

6. The loop continues until all numbers
   from n to 1 have been multiplied.

7. After the loop completes, the final
   factorial value is printed.

=========================================
EXECUTION FLOW
=========================================

Initialize answer = 1
        ↓
Start loop from n to 1
        ↓
Multiply answer by i
        ↓
Store updated answer
        ↓
Repeat until i becomes 1
        ↓
Loop Ends
        ↓
Print Final Factorial

=========================================
OUTPUT FOR fact(5)
=========================================

The factorial of 5 is 120
⭐ Logic Building Tip

Whenever you're solving a loop problem, ask yourself:

Do I need every intermediate result? → Print inside the loop.
Do I need only the final result? → Print after the loop.

In the factorial problem, you're interested only in the
 final product, so console.log() belongs outside the loop.*/