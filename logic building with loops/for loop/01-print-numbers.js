// Print all numbers from 1 to 10
for(let i = 1; i<=10; i++){
    console.log(i);
}

/*
=========================================
PROGRAM EXPLANATION
=========================================

1. The for loop is used to execute a block
   of code multiple times.

2. The initialization (let i = 1) runs only once
   before the loop starts.

3. The condition (i <= 10) is checked before
   every iteration.

4. If the condition is true, the loop body
   executes.

5. console.log(i) prints the current value
   of the loop variable.

6. After the loop body executes, the update
   expression (i++) increments the value of i by 1.

7. JavaScript then checks the condition again.

8. This process repeats until the condition
   becomes false.

9. When i becomes 11, the condition
   (11 <= 10) is false, so the loop terminates.

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

1
2
3
4
5
6
7
8
9
10
*/