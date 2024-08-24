/* Constructor Function */

function init_const(name, age) {
    this.name = name;
    this.age = age;
}

init_const.prototype.merge = function(){
     return `My name is ${this.name} and I am ${this.age} years old.`;
}

const person = new init_const("John", 20);
console.log(person.merge());
console.log(`Name: ${person.name}`);
