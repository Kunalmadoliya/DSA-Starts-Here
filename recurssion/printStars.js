// function printStarsR(r, c) {
//   if (r === 0) return;

//   if (c < r) {
//     printStarsR(r, c + 1); // ← yeh "column" jaisa behavior hai (c badhta hai)
//     process.stdout.write("*");
//   } else {
//     printStarsR(r - 1, 0); // ← yeh "row" jaisa behavior hai (r ghatata hai)
//     process.stdout.write(" ");
//   }
// }

// printStarsR(4, 0);

function printStarsR(r, c) {
  if (r === 0) return;

  if (c <= r) {
    process.stdout.write("*");
    printStarsR(r, c + 1);
  } else {
    process.stdout.write("\n");  // space ki jagah newline
    printStarsR(r - 1, 1);       // c ko 1 se reset karo (0 se nahi, warna extra star aayega)
  }
}
printStarsR(4, 1);   // call bhi c=1 se shuru karo