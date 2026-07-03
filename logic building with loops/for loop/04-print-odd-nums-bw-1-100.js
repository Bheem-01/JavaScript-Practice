// Print all odd numbers between 1 and 100:
for (let i=1; i<=100; i+=2){
    console.log(i);
}

/*
=========================================================
PROGRAM EXPLANATION
=========================================================

1. The for loop is used to print all odd
   numbers between 1 and 100.

2. The initialization (let i = 1)
   executes only once before the loop starts.

3. The loop starts from 1 because it is
   the first odd number.

4. The condition (i <= 100) is checked
   before every iteration.

5. If the condition is true, the loop body
   executes and prints the current value of i.

6. The update expression (i += 2)
   increases the value of i by 2 after
   each iteration.

7. Since every odd number is exactly
   2 greater than the previous odd number,
   only odd numbers are printed.

8. The loop terminates when i becomes 101,
   making the condition false.

=========================================
LOOP EXECUTION ORDER
=========================================

Initialization
      ↓
Condition
      ↓
Loop Body
      ↓
Update (i += 2)
      ↓
Back to Condition

=========================================
OUTPUT
=========================================

1
3
5
7
9
11
...
97
99
*/