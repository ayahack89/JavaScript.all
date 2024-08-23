/* Static Method */
class SMethod{

     static displayInfo(){
          return `This is a static method.`;
          
     }
     displayString(){
          return `This is a non-static method.`;
     }
}

console.log(SMethod.displayInfo());
// console.log(SMethod.displayString()); // Error: displayString is not a function

const obg = new SMethod();
// console.log(obg.displayInfo()); // Error: displayInfo is not a function (Static method can't be called by object)
console.log(obg.displayString());

 
