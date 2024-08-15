/* Classes and Objects */

//Declaration 
class firstClass{
     constructor(name){
          this.name = name;
     }
     call(){
          console.log(`My name is ${this.name}`);
          
     }
}
const obg1 = new firstClass("Ayanabha");
obg1.call();


//Expression: Anonymous class
const secondClass = class{
     constructor(name){
          this.name = name;
     }
     call(){
          console.log(`My name is ${this.name}`);
          
     }
}
const obg2 = new secondClass("Agnik");
obg2.call();


//Expression: Class name
const thirdClass = class third{
     constructor(name){
          this.name = name;
     }
     call(){
          console.log(`My name is ${this.name}`);
          
     }
}
const obg3 = new thirdClass("Souvik");
obg3.call();