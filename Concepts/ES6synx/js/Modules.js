/*Calculator.Mod Import */
import { Calculate } from "./modules/Mod";
let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let selectOp = document.getElementById('op');
let resultBtn = document.getElementById("Btn");
let retrieveData = document.getElementById('retrieve');

function allCalculate() {
     switch (selectOp) {
          case 'null':
               console.error("Err: Invalid option");
               retrieveData.innerHTML = "Please select a valid option";
               break;
          case '+':
               var add = new Calculate.Calculate(firstNumber + secondNumber).Addition();
               retrieveData.innerHTML = add;
               console.log(`Addition successful: ${add}`);
               break;
          case '-':
               var sub = new Calculate.Calculate(firstNumber - secondNumber).substraction();
               retrieveData.innerHTML = sub;
               console.log(`Addition successful: ${mul}`);
               break
          case '*':
               var mul = new Calculate.Calculate(firstNumber * secondNumber).Multiplication();
               retrieveData.innerHTML = mul;
               console.log(`Addition successful: ${mul}`);
               break;
          case '/':
               var div = new Calculate.Calculate(firstNumber / secondNumber).Divide();
               retrieveData.innerHTML = div;
               console.log(`Addition successful: ${div}`);
               break;
          case '%':
               var mod = new Calculate.Calculate(firstNumber % secondNumber).Module();
               retrieveData.innerHTML = mod;
               console.log(`Addition successful: ${mod}`);
               break;

          default:
               console.error("Err: Invalid option");
               retrieveData.innerHTML = "Please choose a valid option";
               break;
     }

}

resultBtn.addEventListener('click', allCalculate());


