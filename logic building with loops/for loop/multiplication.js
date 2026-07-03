// Print multiplication table of given number:
function mul(n){
    for(let i = 1; i <= 10; i++){
        console.log(`${n} * ${i} = ${n*i}`);
    }
}
mul(5);

/*
=========================================
PROGRAM EXPLANATION
=========================================

1. The function mul(n) prints the
   multiplication table of the number
   passed as an argument.

2. The parameter 'n' stores the number
   whose multiplication table is required.

3. The for loop starts from 1 because
   every multiplication table begins with 1.

4. The condition (i <= 10) ensures that
   the table is printed up to 10.

5. During each iteration, JavaScript
   calculates the product of n and i.

6. A template literal is used to display
   the multiplication in a readable format.

7. After each iteration, i is incremented
   by 1 using i++.

8. The loop continues until i becomes 11.

9. When the condition becomes false,
   the loop terminates.

=========================================
LOOP EXECUTION ORDER
=========================================

Function Call
      ↓
Parameter Receives Value
      ↓
Initialization (i = 1)
      ↓
Condition (i <= 10)
      ↓
Calculate n * i
      ↓
Print Result
      ↓
Update (i++)
      ↓
Back to Condition

=========================================
OUTPUT FOR mul(5)
=========================================

5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50
*/