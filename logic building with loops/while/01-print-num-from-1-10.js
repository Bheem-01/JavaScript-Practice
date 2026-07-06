// Print all numbers from 1 to 10 using while loop
let num = 1;
while(num <= 10){
    console.log(num);
    num ++;
}
/*
=========================================
PROGRAM EXPLANATION
=========================================

1. A while loop repeatedly executes a block
   of code as long as its condition is true.

2. The variable 'num' is initialized with
   the value 1 before the loop starts.

3. Before every iteration, JavaScript checks
   the condition (num <= 10).

4. If the condition is true, the loop body
   executes.

5. console.log(num) prints the current value
   of num.

6. The statement num++ increases the value
   of num by 1 after each iteration.

7. JavaScript then goes back and checks
   the condition again.

8. When num becomes 11, the condition
   (11 <= 10) becomes false and the loop
   terminates.

=========================================
EXECUTION FLOW
=========================================

Initialize num = 1
        ↓
Check Condition
(num <= 10)
        ↓
True → Execute Loop Body
        ↓
Print Current Value
        ↓
Increment num
        ↓
Go Back to Condition
        ↓
False → End Loop

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
