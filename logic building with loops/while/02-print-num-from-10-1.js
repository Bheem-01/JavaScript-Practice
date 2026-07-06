// Print numbers from 10 to 1 using while loop:
let num = 10;
while(num>=1){
    console.log(num);
    num--;
}
/*
=========================================
PROGRAM EXPLANATION
=========================================

1. The variable 'num' is initialized with
   the value 10.

2. The while loop continues executing
   as long as the condition (num >= 1)
   remains true.

3. During each iteration, the current
   value of num is printed.

4. After printing, num is decremented
   using num--, which decreases its value
   by 1.

5. JavaScript then checks the condition
   again before starting the next iteration.

6. When num becomes 0, the condition
   (0 >= 1) becomes false and the loop
   terminates.

=========================================
EXECUTION FLOW
=========================================

Initialize num = 10
        ↓
Check Condition
(num >= 1)
        ↓
True → Print Current Value
        ↓
Decrease num by 1
        ↓
Go Back to Condition
        ↓
False → End Loop

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