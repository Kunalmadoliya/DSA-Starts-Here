import readline from "node:readline";
import Stack from "./stack.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const stack = new Stack();

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  let exit = false;

  while (!exit) {
    const input = await askQuestion(`
========== STACK MENU ==========

1. Push
2. Pop
3. Peek
4. isEmpty
5. Exit

Choose an option: `);

    const userInput = Number(input);

    switch (userInput) {
      case 1: {
        const domainName = await askQuestion("Enter a domain name: ");
        stack.push(domainName);
        console.log(`Added: ${domainName}`);
        break;
      }

      case 2: {
        console.log("Removed:", stack.pop());
        break;
      }

      case 3: {
        console.log("Top Element:", stack.peek());
        break;
      }

      case 4: {
        console.log("Is Empty:", stack.isEmpty());
        break;
      }

      case 5: {
        console.log("Goodbye!");
        exit = true;
        break;
      }

      default:
        console.log("Invalid option!");
    }

    console.log();
  }

  rl.close();
}

main();
