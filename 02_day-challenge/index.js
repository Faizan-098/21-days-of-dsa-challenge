//* 1.Find the Maximum of Three Numbers
// function findMaxNum(num1, num2, num3) {
//   if (num1 >= num2 && num1 > num3) return num1;
//   if (num2 > num3) return num2;
//   return num3;
// }
// console.log(findMaxNum(4, 4, 2));

//* 2.Check if a Number is Positive, Negative, or Zero
// function isNum_Pos_Neg_Zero(n) {
//   if (n > 0) return "positive";
//   if (n < 0) return "negative";
//   return "zero";
// }
// console.log(isNum_Pos_Neg_Zero(-6));

//* 3.Calculate Electricity Bill (solution 1)
// function calculate_electricity_bill(u) {
//   let unites = u;
//   let sum = 0;
//   if (unites > 300) {
//     // extract number that comes after 300
//     const desiredNum = unites - 300;
//     // add unites after adding 12 per unit
//     sum += desiredNum * 12;
//     // update unites
//     unites = unites - desiredNum;
//   }

//   if (unites > 200) {
//    // extract number that comes after 300
//     const desiredNum = unites - 200;
//     // add unites after adding 12 per unit
//     sum += desiredNum * 10;
//     // update unites
//     unites = unites - desiredNum;
//   }

//     if (unites > 100) {
//    // extract number that comes after 300
//     const desiredNum = unites - 100;
//     // add unites after adding 12 per unit
//     sum += desiredNum * 7;
//     // update unites
//     unites = unites - desiredNum;
//   }

//    if (unites > 0) {
//    // extract number that comes after 300
//     const desiredNum = unites
//     // add unites after adding 12 per unit
//     sum += desiredNum * 5;
//     // update unites
//     unites = unites - desiredNum;
//   }

//   return sum;
// }
// console.log(calculate_electricity_bill(100));

//* 3.Calculate Electricity Bil (solution 2)
// function calElecBill(units) {
//   if (units < 0) return "negative is not allowed";

//   if (units <= 100) return units * 5;
//   else if (units <= 200) return (units % 100) * 7 + 100 * 5;
//   else if (units <= 300) return (units % 100) * 10 + 100 * 7 + 100 * 5;

//   return (units % 100) * 12 + 100 * 10 + 100 * 7 + 100 * 5;
// }
// console.log(calElecBill(5));


//* 4.Check if a Character is a Vowel or Consonant (solution 1)
// function checkVowelOrConsonant(char) {
//   const lowerChar = char.toLowerCase();
//   if ("aeiou".includes(lowerChar) && lowerChar !== "") return "vowel";
//   else if (/[a-z]/.test(lowerChar)) return "consonant";
//   return "Invalid input";
// }
// console.log(checkVowelOrConsonant("Z"));


//* 4.Check if a Character is a Vowel or Consonant (solution 2)
// function checkVowelOrConsonant(char) {
//   const lowerChar = char.toLowerCase();
//   if ("aeiou".includes(lowerChar) && lowerChar !== "") return "vowel";
//  else if (lowerChar.charCodeAt() > 96 &&  lowerChar.charCodeAt() < 123) return "consonant";
//   return "Invalid input";
// }
// console.log(checkVowelOrConsonant("Z"));


//* 5.Check if a Year is a Leap Year
// function isLeapYear(year) {
//   if (
//     (year % 4 === 0 && year % 100 !== 0) ||
//     (year % 400 === 0 && year % 100 === 0)
//   ) {
//     return `${year} is leap year!`;
//   }
//   return `${year} is no leap year!`;
// }
// console.log(isLeapYear(2002));


//* 6.Check if a Character is Uppercase, Lowercase, Digit, or Special
// function checkCharType(char) {
//   if (/[0-9]/.test(char)) return "Digit";

//   if (char && /[a-z]/.test(char)) return "Lowercase Letter";

//   if (/[A-Z]/.test(char)) return "Uppercase Letter";

//   if (/[!-/]/.test(char)) return "Special Character";

//   return "Invalid Input";
// }
// console.log(checkCharType());


//* 7.Check Triangle Type Using Sides and Angles
// function checkTriangleType(a, b, c) {
//   if (!a || !b || !c) return "Invalid Input";
//   if (a * a + b * b === c * c) return "Right-angled";
//   if (a === b && b === c && a === c) return "Equilateral";
//   if (a === b || b === c || a === c) return " Isosceles";
//   if (a !== b && b !== c && a !== c) return "  Scalene";
// }
// console.log(checkTriangleType(2,4,5));


//* 8.Calculate Income Tax Based on Slabs
// function calculateIncomeTax(income) {
//   if (income < 0) return "Negative is not allowed!";
//   if (income <= 250000) return "No tax";
//   if (income <= 500000) return (income - 250000) * 0.05;
//   if (income <= 1000000) return 250000 * 0.05 + (income - 500000) * 0.2;
//   if (income > 1000000)
//     return 250000 * 0.05 + 500000 * 0.2 + (income - 1000000) * 0.3;
//   return "Invalid Input!";
// }
// console.log(calculateIncomeTax(750000));

