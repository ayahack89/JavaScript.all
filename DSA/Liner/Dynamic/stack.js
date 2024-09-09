const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let top = -1;
let stack = [];
const max = 5;

function push(data) {
    top += 1;
    stack[top] = data;
    console.log("Data inserted.");
    console.log(`Stack status: ${stack}`);
}

function pop() {
        console.log(`Popped ${stack[top]} from the stack.`);
        top -= 1;
}

function displayInfo() {
    if (top === -1) {
        console.log("Stack is empty.");
    } else {
        console.log("Stack contents: ", stack.slice(0, top + 1));
    }
}

function stackOperations() {
    rl.question("Enter a choice: a) Push b) Pop c) Display d) Exit: ", (choice) => {
        switch (choice) {
            case 'a':
                if (stack.length === max) {
                    console.log("Stack Overflow.");
                    stackOperations(); 
                } else {
                    rl.question("Enter data to push: ", (data) => {
                        push(data);
                        stackOperations(); 
                    });
                }
                break;

            case 'b':
               if(stack[top] === undefined){
                    console.log("Stack Underflow");
                    break;
               }else{
                pop();
                stackOperations(); 
                break;
               }
            case 'c':
                displayInfo();
                stackOperations(); 
                break;

            case 'd':
                console.log("Exiting...");
                rl.close();
                break;

            default:
                console.log("Invalid choice, try again.");
                stackOperations();
                break;
        }
    });
}

stackOperations();
