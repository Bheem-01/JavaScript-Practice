//Print all even numbers between 1-100:
for (let i = 1; i<=100; i+=1 ){
    if(i % 2 == 0){
    console.log(i);

    }
}

/*
=========================================
PROGRAM EXPLANATION
=========================================

1. The loop starts from 2 because 2 is the
   first even number.

2. The condition (i <= 100) ensures the
   loop continues until 100.

3. console.log(i) prints the current
   even number.

4. The update expression (i += 2)
   increases the value of i by 2 after
   each iteration.

5. Since every even number is exactly
   2 greater than the previous even number,
   the loop prints only even numbers.

6. The loop terminates when i becomes 102,
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

2
4
6
8
10
...
100
*/