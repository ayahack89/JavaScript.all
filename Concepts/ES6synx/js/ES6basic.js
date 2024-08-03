/*
ES6 Concepts:-
Let & Const ✅
Arrow functions ✅
Template literals ✅
Default parameters ✅
Rest & Sprade ✅
Destructuring ✅
Classes ✅
Modules ✅
*/

// 1) Let & Const
//var
var a = 12;
var b = 13;
console.log("Addition: ",a+b);

//let
let c = 200;
let u = 39;
console.log("Subtraction: ", c-u);

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
// w = "xxix";
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
let OldFormat = "Two + Two => "+(2+2)+" & "+"Three - Three => "+(3-3);
console.log(OldFormat);

let NewFormat = `Two + Two => ${2+2} & Three - Three => ${3-3}`;
console.log(NewFormat);


// 4) Default parameters
function exVar(a,b,c){
  console.log(a,b,c);
  
}
exVar(12,16,18);
exVar(12);
exVar(16,18);

function defaultFun(a=0,b=0,c=0){
  console.log(a,b,c);
}
defaultFun(2,6,8);
defaultFun(2);
defaultFun(6,8);

// 5) Sprade & Rest operator
var arr = [1,2,3,4,5,6,7,8,9];
var brr = arr;
console.log("Reference => ",brr); //That is not the correct way to copy an array.

//Sprade operator 
//Use sprade operator this is the correct way to copy an array.
var arrNew = [23,4,56,88.123, 1];
var nun = [...arrNew];
console.log("Copy =>",nun);

//Rest operator
function badBoy(sx, lol, lamo, ...skibidi){
  console.log(sx, lol, lamo, skibidi);
  
}
badBoy(1223, 5687, 9089, 2534, 7879, 1233, 7856);

// Destructuring 
//array
var myArr = [2,3,5,6];
var [v,b,,o] = myArr; 
console.log([v,b,o]);

//Object
var obg = {
  name: "John Deo",
  age: 26,
  gender: "Male",
}
var {age} = obg;
console.log({age});


                                  










