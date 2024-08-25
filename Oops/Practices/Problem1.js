/* Problem 1: Print a factorial of a number using the concept of oops. */

class Factorial{
     constructor(number){
         this.number = number;
     }
     
     factorial(){
         const fact = (num)=>{
             if(num === 0 || num === 1){
                 return 1;
             }
             return num * fact(num - 1);
         }
         return fact(this.number);
       
     }
 }
 const obg = new Factorial(5);
 console.log(obg.factorial());
  
   



