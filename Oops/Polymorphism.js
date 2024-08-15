/* Polymerism  */
class Person{
     constructor(name, age, occupation){
          this.name = name;
          this.age = age;
          this.occupation = occupation;
     }
     PDetails(){
          return `\n Name: ${this.name} \n Age: ${this.age}`;
     }
}
class Emp extends Person{

     PDetails(){
          return `\n Name: ${this.name} \n Age: ${this.age} \n Occupation: ${this.occupation}`;
     }

}
class Father extends Person{

     PDetails(){
          return `\n Name: ${this.name}`;
     }

}

const personOne = [
     new Emp("John Deo", 36, "Software engineer"), 
     new Father("John Deo")
];
const obg = personOne.map((person) => {
     return person.PDetails();
});
console.log(obg.join("\n"));

