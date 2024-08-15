/* Inheritance */
class Student{
     constructor(name, age, stdCode, section, dept){
          this.name = name;
          this.age = age;
          this.stdCode = stdCode;
          this.section = section;
          this.dept = dept;

     }
     StdDetails(){
          return `Name: ${this.name}\n Age: ${this.age}`;
     }

}
class Department extends Student{

     StdDetails(){
          return `\n Name: ${this.name}\n Age: ${this.age}\n Std Code: ${this.stdCode}\n Section: ${this.section}\n Department: ${this.dept}`;
     }
}
const obg = new Department("Ayanabha Chatterjee", 20, "BWU/BCA/22/411", "G", "CSS" );
console.log(obg.StdDetails());