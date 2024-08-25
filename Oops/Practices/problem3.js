/* Write a program to implement a class “student” with the following members. Name of the student. Marks of the student obtained in three subjects. Function to assign initial values. Function to compute total average. Function to display the student’s name and the total marks. Write an appropriate main() function to demonstrate the functioning of the above. */

class Student{
     constructor(name, math, physics, chemistry){
         this.name = name;
         this.marks = [math, physics, chemistry];
     }
     Init(){
         this.name = null;
         this.marks = [0,0,0];
     }
     avg(){
         let total = 0;
         for (let i = 0; i<=this.marks.length; i++){
             total = total + this.marks[i];
         }
         return total/this.marks.length;
     }
     displayInfo(){
         console.log(`Student Name: ${this.name}`);
         for (let i = 0; i< this.marks.length; i++){
             console.log(`Mark ${i + 1}: ${this.marks[i]}`);
         }
         return " ";
     }
     
 }
 
 const s = new Student("John", 89, 69, 90);
 console.log(s.displayInfo());