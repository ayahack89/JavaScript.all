/* Encapsulation */
class Rectangle{
     constructor(height, weight){
          this.height = height;
          this.weight = weight;
     }
     area(){
          console.log(`The are of rectangle is ${this.height * this.weight}`);
          
     }
}
const obg = new Rectangle(5,2);
obg.area();


class Person{
      #ssn;
     constructor(name, age, ssn){
          this.name = name;
          this.age = age;
          this.#ssn = ssn;

     }
     getSsn(){
          return this.#ssn;
     }
     getDetails(){
          return `Name: ${this.name} & Age: ${this.age}`;
     }
}
const PersonOne = new Person("John", 20, "123-45-6789");
console.log(PersonOne.getDetails());
console.log(PersonOne.getSsn());
console.log(PersonOne.name);
console.log(PersonOne.ssn); // Undefine


