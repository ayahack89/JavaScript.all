/*
ES6 Consepts:-
Let & Const ✅
Arrow functions ✅
Template literals ✅
Default parameters
Rest & Sprade
Destructuring
Classes
Modules
Async & Await
Try & Catch
*/

// 1) Let & Const
/*
In ES6, both `let` and `const` are used to declare variables, but they have key differences. `let`
allows you to store data in a variable and change it later, providing block-level scope. On the
other hand, `const` declares a variable whose value cannot be reassigned, making it a constant.
However, while `const` prevents reassignment of the variable itself, it does not make objects or
arrays immutable; their properties can still be changed. Additionally, unlike `var`, variables
declared with `let` and `const` are not added to the global `window` object in the browser.
*/
//var
var a = 12;
var b = 13;
console.log("Addition: ",a+b);

//let
let c = 200;
let u = 39;
console.log("Substraction: ", c-u);

//const
const d = 68;
const q = 5;
console.log("Multiplication: ", d*q);

//Different between `var` & `let`
function varScoping(){
  var m = 9;
  if(true){
    var m = 10;
    console.log("`var`=> Inner scope: ", m);
  }
  console.log("`var`=> Outer scope: ", m);
}
varScoping();

function letScoping(){
  let n = 6;
  if(true){
    let n = 7;
    console.log("`let`=> Inner Scope: ", n);
  }
  console.log("`let`=> Outer scope: ", n);
}
letScoping();

// Let see the difference between `let` & `const`
let e;
e = "John";
console.log(e);

//The both have different `x` value inner scope and outer scope
let x = 10;
if (true) {
  let x = 20;
  console.log("Inner scope: ",x);
}
console.log("Outer scope: ", x);


//const w;
// w = "xxnxx";
// console.log(w); /* Error: Uncaught SyntaxError: Missing initializer in const declaration */

//const y = 5;
//y = 10; /* Error: Assignment to constant variable. */


// 2) Arrow function
// 3 types of arrow functions
// A. Arrow function || Fat arrow function
let funOne = ()=>{
  console.log("This is a arrow function.");
}
funOne();

// B. Fat arrow function with parameters
let funTwo_1parameter = para=>{   // In this case you can use (para) || para
  console.log("Arrow function with parameter: ", para);
}
funTwo_1parameter(32543);

let funTow_2parameter = (para1, para2) =>{
  console.log("Arrow function with double parameter: ","Addition ",para1,"+",para2,"=>", para1+para2);
}
funTow_2parameter(20, 60);

// C. Arrow function with implicit return
let funThree = ()=>89;
console.log("The arrow function with implicit return: "+funThree());



// 3) Template literals
// This is a old formant to calculate numbers in a string.
let oldformat = "Two + Two => "+(2+2)+" & "+"Three - Three => "+(3-3);
console.log(oldformat);

let newformat = `Two + Two => ${2+2} & Three - Three => ${3-3}`;
console.log(newformat);
