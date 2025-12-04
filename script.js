// basic For Loops 
// Parentheses on loops indidcate how the loop is to be executed 
// for (let i = 10; i > 0; i--){
    // console.log(i)
// }

// for (let i = 1; i <= 10; i+=2){
    // console.log(i);
// }

// for (let i=6; i<=60; i += 3) {
    // console.log(i);
// }

// for (let i=1; i<= 7; i++) {
    // console.log("#".repeat(i));
// }

// let pyramid = ""
// for (let i = 0; i < 7; i++){
    // pyramid = pyramid + "#";

// console.log(pyramid);}

// Now, write a for loop that iterates from 1 to 20. The loop should:
// while num is less than 20
    // always start with the one that has the most conditions first 
    // start with prime!
    // if prime print prime 
    // if else even print even 
    // else print odd 

// Print “prime” for all prime numbers. num % 2 != 0 && num % 3 != 0
// Print “even” for all even numbers. num % 2 -- 0 
// Print “odd” for all odd numbers. num % 2 !== 0
// Treat 2 as an even number and 1 & 3 as odd, rather than prime.
 

 for (let i = 1; i < 20; i++){
     if (i % 2  != 0 && i % 3 != 0) {
         console.log(`${i} is Prime`);
     }
     else if (i % 2 == 1){
        console.log(`${i} is odd`);
     } else {
        console.log(`${i} is even`);
     }
 }