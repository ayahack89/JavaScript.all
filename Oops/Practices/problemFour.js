/* Write a class “Box” that with three member-variables “height”, “width” and “breadth”. Write suitable constructors to initialize them. Add functions like “getVolume” and “getArea” that will return volume and surface area respectively. Instantiate two arbitrary boxes and then print their volume and surface area. */

class Box{
     constructor(height, width, breadth){
         this.height = height;
         this.width = width;
         this.breadth = breadth;
     }
     getVolume(){
         return this.height * this.width * this.breadth;
     }
     getArea(){
         return this.width * this.height;
     }
     
     
 }
 const b = new Box(5,6,7);
 console.log(`Volume: ${b.getVolume()}`);
 console.log(`Area: ${b.getArea()}`);