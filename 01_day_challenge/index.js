//* 1. Print Numbers from 1 to N
//^ Time complexity - O(n)
// const n = 5;
// for (let i = 1; i <= n; i++) {
//   console.log(i);
// }

//* 2.Print Numbers from N to 1 without changing the loop condition of above
//^ Time complexity - O(n)
// const n = 5;
// for (let i = 1; i <= n; i++) {
//   console.log(i);
// }

//* 3.Print All Even Numbers from 1 to N
//^ Time complexity - O(n)
// const n = 10;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 0) console.log(i);
// }

//* 4.Sum of First N Natural Numbers
//^ Optimized solution -> Time complexity - O(1)
// console.time();
// const n = 6769769079709609089890998090n;
// console.log((n * (n + 1n)) / 2n);

//^ Brute force solution -> Time complexity - O(n)
// console.time();
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum+=i;
// }
// console.log(`sum of ${n} natural number is ${sum}`);
// console.timeEnd();

//* 5.Product (Factorial) of N
//^ Time complexity - O(n)
// const n = 5;
// let fact = 1;
// for (let i = 1; i <= n; i++) {
//   fact*=i;
// }
// console.log(`factorial of ${n} n is ${fact}`);

//* 6.Sum of All Even Numbers up to N
//^ Optimized solution -> Time complexity - O(1)
// const n = 10;
// console.log((n/2)*(n/2+1));

//^ Brute force solution -> Time complexity - O(n)
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 0) sum += i;
// }
// console.log(sum);

//* 7.Print Squares of Numbers from 1 to N
//^ Time complexity - O(n)
// const n = 10;
// for (let i = 1; i <= n; i++) {
//    console.log(i*i);
// }

//* 8.Print all numbers divisible by 3 and 5 up to N
//^ Time complexity - O(n)
// const n = 55;
// for (let i = 1; i <= n; i++) {
//   if ((i % 3 === 0) && (i % 5 === 0)) {
//     console.log(`numbers divisible by 3 and 5 are ${i}`);
//   }
// }

//* 9.Find the sum of all odd numbers up to N
//^ Time complexity - O(n)
// const n = 10;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 1) {
//     sum += i;
//   }
// }
// console.log(sum);

//* 10.Print the cubes of numbers from 1 to N
//^ Time complexity - O(n)
// const n = 5;
// for (let i = 1; i <= n; i++) {
//    console.log(i*i*i);
// }

//* 11.Print only the numbers that are both even and perfect squares
//^ Time complexity - O(n)
// const n = 100;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 0 && Number.isInteger(Math.sqrt(i))) {
//     console.log(i);
//   }
// }


