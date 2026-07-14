let n = 5;

// Pattern 1
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    process.stdout.write("* ");
  }
  process.stdout.write("\n");
}

console.log("\n================ Pattern 2 ================\n");

// Pattern 2
for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write("* ");
  }
  process.stdout.write("\n");
}

console.log("\n================ Pattern 3 ================\n");

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(`${j}`);
  }
  process.stdout.write("\n");
}

console.log("\n================ Pattern 4 ================\n");

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(`${i}`);
  }
  process.stdout.write("\n");
}

console.log("\n================ Pattern 5 ================\n");

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - i; j++) {
    process.stdout.write("* ");
  }
  process.stdout.write("\n");
}

console.log("\n================ Pattern 6 ================\n");

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    process.stdout.write(`${j}`);
  }
  process.stdout.write("\n");
}

console.log("\n================ Pattern 7 ================\n");

for (let i = 0; i < n; i++) {
  // spaces
  for (let j = 0; j < n - i - 1; j++) {
    process.stdout.write(" ");
  }

  // stars
  for (let j = 0; j < 2 * i + 1; j++) {
    process.stdout.write("*");
  }

  // spaces
  for (let k = 0; k < n - i - 1; k++) {
    process.stdout.write(" ");
  }

  process.stdout.write("\n");
}

console.log("\n================ Pattern 8 ================\n");

for (let i = n; i >= 0; i--) {
  // spaces
  for (let j = 0; j < n - i - 1; j++) {
    process.stdout.write(" ");
  }

  // stars
  for (let j = 0; j < 2 * i + 1; j++) {
    process.stdout.write("*");
  }

  // spaces
  for (let k = 0; k < n - i - 1; k++) {
    process.stdout.write(" ");
  }

  process.stdout.write("\n");
}

console.log("\n================ Pattern 9 ================\n");

for (let i = 0; i < n; i++) {
  // spaces
  for (let j = 0; j < n - i - 1; j++) {
    process.stdout.write(" ");
  }

  // stars
  for (let j = 0; j < 2 * i + 1; j++) {
    process.stdout.write("*");
  }

  // spaces
  for (let k = 0; k < n - i - 1; k++) {
    process.stdout.write(" ");
  }

  process.stdout.write("\n");
}
for (let i = n - 1; i >= 0; i--) {
  // spaces
  for (let j = 0; j < n - i - 1; j++) {
    process.stdout.write(" ");
  }

  // stars
  for (let j = 0; j < 2 * i + 1; j++) {
    process.stdout.write("*");
  }

  // spaces
  for (let j = 0; j < n - i - 1; j++) {
    process.stdout.write(" ");
  }

  process.stdout.write("\n");
}

console.log("\n================ Pattern 10 ================\n");

for (let i = 0; i < 2 * n; i++) {
  let row = i;
  if (i > n) {
    row = 2 * n - i;
  }
  for (let j = 0; j < row; j++) {
    process.stdout.write("*");
  }

  process.stdout.write("\n");
}

console.log("\n================ Pattern 11 ================\n");

let start = 1;
for (let i = 0; i < n; i++) {
  if (i % 2 === 0) start = 1;
  else start = 0;
  for (let j = 0; j <= i; j++) {
    process.stdout.write(`${start}`);
    start = 1 - start;
  }
  process.stdout.write("\n");
}
