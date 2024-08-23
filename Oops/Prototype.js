/* Prototype and Inheritance */

function Animal(name){
     this.name = name;
}

Animal.prototype.speak = function(){
     return`${this.name} makes a sound.`;
}

function Dog(name, bread){
     Animal.call(this, name);
     this.bread = bread;
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.constructor = Dog;

Dog.prototype.bark = function(){
     return `${this.name} barks.`;
}

const myDog = new Dog('Buddy', 'Golden Retriever');

console.log(myDog.speak());
console.log(myDog.bark());  


