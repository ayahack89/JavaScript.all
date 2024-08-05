import { consoleLog } from './js/Utility.js';
import { Calculator } from './js/JsCal.js';
import { Ascending, Descending } from './js/ArrShort.js';
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

//Package: ArrShort.js
let MyArray = [2,67,56,7,8,12,23,88,10,100,0,82];
console.log(Ascending(MyArray));
console.log(Descending(MyArray));







