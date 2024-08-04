import { consoleLog } from './js/Utility.js';
import { Calculator } from './js/JsCal.js';
//Package: Utility.js
const obg = consoleLog();
console.log(obg);

//Package:JsCal.js
function Calculate() {
     let result = true;
     if (result) {
          var obg = {
               Add: () => {
                    console.log(Calculator().Addition(5, 3));

               },
               Sub: () => {
                    console.log(Calculator().Subtraction(5, 3));

               },
               Mul: () => {
                    console.log(Calculator().Multiplication(5, 3));

               },
               Div: () => {
                    console.log(parseInt(Calculator().Division(5, 3)));

               },
               Mod: () => {
                    console.log(Calculator().Modulo(5, 3));

               }
          }

     }
     return obg;

}

const finalObg = Calculate();

finalObg.Add();
finalObg.Sub();
finalObg.Mul();
finalObg.Div();
finalObg.Mod()



