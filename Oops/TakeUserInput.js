const readline = require("readline");
const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
});

rl.question("Enter your name: ", function(name) {
     console.log(`My name is ${name}`);
     rl.close();
});

