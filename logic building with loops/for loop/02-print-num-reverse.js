// Print all numbers in reverse from 10 to 1:

for(let i=10; i>=1; i--){
    console.log(i);
}

/*
=========================================
PROGRAM EXPLANATION
=========================================

1. The for loop is used to print numbers
   from 10 to 1 in reverse order.

2. The initialization (let i = 10)
   executes only once before the loop starts.

3. The condition (i >= 1) is checked
   before every iteration.

4. If the condition is true,
   the loop body executes.

5. console.log(i) prints the current
   value of the loop variable.

6. After printing, the update expression
   (i--) decreases the value of i by 1.

7. JavaScript then returns to the condition
   and repeats the process.

8. When i becomes 0, the condition
   (0 >= 1) becomes false and the loop
   terminates.

=========================================
LOOP EXECUTION ORDER
=========================================

Initialization
      ↓
Condition
      ↓
Loop Body
      ↓
Update
      ↓
Back to Condition

=========================================
OUTPUT
=========================================

10
9
8
7
6
5
4
3
2
1
*/