const readline = require("readline");
let rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout,
});

let start = 0;
let end = -1;
let queue = [];
let max = 5;

function enQueue(data) {
     if (end - start + 1 === max) {
          console.log("Overflow");
          return;
     }
     end += 1;
     queue[end] = data;
     console.log("Data inserted.");
     console.log(`Queue status: ${queue.slice(start, end + 1)}`);
}

function deQueue() {
     if (start > end) {
          console.log("Underflow");
          return;
     }
     console.log(`Removing: ${queue[start]}`);
     start += 1; 
}

function displayInfo() {
     if (start > end) {
          console.log("Queue is empty");
     } else {
          console.log("Current Queue: ", queue.slice(start, end + 1));
     }
}

function queueOperations() {
     rl.question("Enter a choice: a) Push b) Pop c) Display d) Exit: ", (choice) => {
          switch (choice) {
               case 'a':
                    rl.question("Enter the data: ", (data) => {
                         enQueue(data);
                         queueOperations();
                    });
                    break;
               case 'b':
                    deQueue();
                    queueOperations();
                    break;
               case 'c':
                    displayInfo();
                    queueOperations();
                    break;
               case 'd':
                    console.log("Exiting.....");
                    rl.close();
                    break;
               default:
                    console.log("Invalid choice, try again.");
                    queueOperations();
                    break;
          }
     });
}

queueOperations();
