// Print all prime numbers between 1 and 100.

for (let i = 2; i <= 100; i++) {

    let isPrime = true;

    for (let j = 2; j < i; j++) {

        if (i % j === 0) {
            isPrime = false;
            break;
        }

    }

    if (isPrime) {
        console.log(i);
    }

}
/*First Iteration

Outer loop

i = 2

We assume

let isPrime = true;

Meaning

"Let's assume 2 is prime."

Inner loop

for(let j = 2; j < i; j++)

Substitute i = 2

for(let j = 2; j < 2; j++)

Question:

Is

2 < 2 ?

No.

So the inner loop does not execute even once.

Now JavaScript reaches

if(isPrime){
    console.log(i);
}

Is

isPrime == true ?

Yes.

Print

2
Second Iteration

Outer loop

i = 3

Again

let isPrime = true;

Meaning

Assume 3 is prime.

Inner loop

j = 2

Check

3 % 2

Result

1

Not divisible.

No changes.

Inner loop ends.

Now

if(isPrime)

Still true.

Print

3
Third Iteration
i = 4

Assume

Prime

So

isPrime = true;

Inner loop

j = 2

Check

4 % 2

Answer

0

Meaning

4 is divisible by 2.

Therefore

isPrime = false;

Now our assumption changed.

Earlier

Prime

Now

Not Prime

Then

break;

Break means

Stop checking.

No need to check

3

because we already know

4 is not prime.

Now

if(isPrime)

Question

Is false true?

No.

Nothing prints.

Fourth Iteration
i = 5

Assume

Prime

Inner loop

5 % 2 = 1

5 % 3 = 2

5 % 4 = 1

No divisor found.

So

isPrime

remains

true

Print

5
Fifth Iteration
i = 6

Assume

Prime

Check

6 % 2 = 0

Immediately

isPrime = false;

Then

break;

Don't print.

Visual Flow
Pick a Number

↓

Assume it is Prime

↓

Check every smaller number

↓

Found a divisor?

      │
  YES │ NO
      │
      ▼
isPrime = false

      │
      ▼
Leave Loop

      │
      ▼
Is isPrime true?

YES -------------> Print Number

NO --------------> Skip Number
Why do we write
let isPrime = true;

Because we don't know yet whether the number is prime.

We start by saying

"I believe it is prime."

If we later find

i % j == 0

our belief becomes wrong.

So we change

isPrime = false;
Why is break used?

Suppose

i = 100

You already found

100 % 2 == 0

Question:

Should we still check

100 % 3

100 % 4

100 % 5

...

100 % 99

No.

We already know

100 is not prime.

So

break;

saves time.*/ 