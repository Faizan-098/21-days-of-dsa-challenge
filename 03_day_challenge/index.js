//* 1.Print Right-Angled Star Triangle
// const n = 5;
// for (let row = 1; row <= n; row++) {
//   let star = "";
//   for (let col = 1; col <= row; col++) {
//     star += "*";
//   }
//   console.log(star);
// }

//* 2.Print Inverted Right-Angled Triangle
// const n = 5;
// for (let row = n; row >= 1; row--) {
//   let star = "";
//   for (let col = 1; col <= row; col++) {
//     star += "*";
//   }
//   console.log(star);
// }

//* 3.Print Pyramid Pattern
// const n = 5;
// for (let row = 1; row <= 2 * n - 1; row += 2) {
//   let space = (2 * n - row - 1) / 2;
//   let star = "";
//   for (let col = 1; col <= row + space; col++) {
//     if (space >= col) star += " ";
//     else star += "*";
//   }
//   console.log(star);
// }

//* 4.Print Inverted Pyramid Pattern
// const n = 10;
// for (let row = 2 * n - 1 ; row >=1; row -= 2) {
//   let space = (2 * n - row - 1) / 2;
//   let star = "";
//   for (let col = 1; col <= row + space; col++) {
//     if (space >= col) star += " ";
//     else star += "*";
//   }
//   console.log(star);
// }

//* 5.Print Hollow Square Pattern
// const n = 5;
// for (let row = 1; row <= n; row++) {
//   let star = "";
//   for (let col = 1; col <= 5; col++) {
//     if (row === 1 || row === 5 || col === 1 || col === 5) {
//       star += "*";
//     } else {
//       star += " ";
//     }
//   }
//   console.log(star);
// }
//
//* 6.Print Hollow Pyramid Pattern
// const n = 5;

// for (let row = 1; row <= 2 * n - 1; row += 2) {
//   let str = "";
//   const currentRow = (row + 1) / 2;

//   for (let col = 1; col <= row + n - currentRow; col++) {
//     if (
//       col <= n - currentRow ||
//       (col > n - currentRow + 1 &&
//         col < row + n - currentRow &&
//         row !== 2 * n - 1)
//     ) {
//       str += " ";
//     } else {
//       str += "*";
//     }
//   }

//   console.log(str);
// }

//* 7.Print Alternating Binary Triangle
// const n = 5;
// for (let row = 1; row <= n; row++) {
//   let binary = "";
//   for (col = row; col >=1; col--) {
//      if(col%2 ===0 ) binary+=0;
//      else binary+=1;
//   }
//   console.log(binary);
// }

//* 8.Print Butterfly Pattern
// const n = 10;
// for (row = 1; row <= n; row++) {
//   let star1 = "";
//   let space1 = n - row;
//   for (let col = 1; col <= row + space1; col++) {
//     if (col <= row) {
//       star1 += "*";
//     } else {
//       star1 += " ";
//     }
//   }
//   process.stdout.write(star1);

//   let star2 = "";
//   let space2 = n - row-1;
//   for (let col = 1; col <= row + space2; col++) {
//     if (col <= space2) {
//       star2 += " ";
//     } else {
//       star2 += "*";
//     }
//   }
//   process.stdout.write(star2);
//   console.log("");
// }
// for (row = n-1; row >=1; row--) {
//   let star1 = "";
//   let space1 = n - row;
//   for (let col = 1; col <= row + space1; col++) {
//     if (col <= row) {
//       star1 += "*";
//     } else {
//       star1 += " ";
//     }
//   }
//   process.stdout.write(star1);

//   let star2 = "";
//   let space2 = n - row-1;
//   for (let col = 1; col <= row + space2; col++) {
//     if (col <= space2) {
//       star2 += " ";
//     } else {
//       star2 += "*";
//     }
//   }
//   process.stdout.write(star2);
//   console.log("");
// }

//* 9.Print Diamond Pattern
// const n = 6;
// for (let row = 1; row <= 2 * n - 1; row += 2) {
//   let star = "";
//   let space = n - (row + 1) / 2;
//   for (let col = 1; col <= row + space; col++) {
//     if (col <= space) {
//       star += " ";
//     } else {
//       star += "*";
//     }
//   }
  
//   console.log(star);
// }

// for (let row = 2*n-3; row >=1; row -= 2) {
//   let star = "";
//   let space = n - (row + 1) / 2;
//   for (let col = 1; col <= row + space; col++) {
//     if (col <= space) {
//       star += " ";
//     } else {
//       star += "*";
//     }
//   }
//   console.log(star);
// }

//* 10.Print Hourglass Patter
// const n = 7; 
// for (let row = 2 * n - 1; row >= 1; row -= 2) {
//   let star = "";
//   let space = n - (row + 1) / 2;
//   for (let col = 1; col <= row + space; col++) {
//     if (col <= space) {
//       star += " ";
//     } else {
//       star += "*";
//     }
//   }
//   console.log(star);
// }

// for (let row =3; row <= 2 * n - 1; row += 2) {
//   let star = "";
//   let space = n - (row + 1) / 2;
//   for (let col = 1; col <= row + space; col++) {
//     if (col <= space) {
//       star += " ";
//     } else {
//       star += "*";
//     }
//   }
//   console.log(star);
// }

//* 11.Print Hollow Diamond Pattern
// const n = 3; // 0 1 2 3 4
// for (let row = 1; row <= 2 * n - 1; row += 2) {
//   let star = "";
//   let space = n - (row + 1) / 2;
//   for (let col = 1; col <= row + space; col++) {
//     if (col <= space || (col > space + 1 && col < row + space)) {
//       star += " ";
//     } else {
//       star += "*";
//     }
//   }
//   process.stdout.write(star);
//   console.log("");
// }
// for (let row = 2 * n - 3; row >= 1; row -= 2) {
//   let star = "";
//   let space = n - (row + 1) / 2;
//   for (let col = 1; col <= row + space; col++) {
//     if (col <= space || (col > space + 1 && col < row + space)) {
//       star += " ";
//     } else {
//       star += "*";
//     }
//   }
//   process.stdout.write(star);
//   console.log("");
// }

//* 12.Print Rhombus Pattern // 4,3,2,1,0
// const n = 5;
// for (row = 1; row <= n; row++) {
//   let star = "";
//   let space = n - row; // 4 3 2 1 0
//   for (let col = 1; col <= n + space; col++) {
//     if (col <= space) {
//       star += " ";
//     } else {
//       star += "*";
//     }
//   }
//   console.log(star);
// }

//* 13.Print Multiplication Table (Single and Upto N)
// const n = 2;
// for (let i = 1; i <= 10; i++) {
//   console.log(`${n} x ${i} = ${n * i}`);
// }

// for (let i = 1; i <= n; i++) {
//   console.log(`${n} x ${i} = ${n * i}`);
// }
