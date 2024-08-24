/* Create a class “Room” which will hold the “height”, “width” and “breadth” of the room in three fields. This class also has a method “volume()” to calculate the volume of this room. Create another class “RoomDemo” which will use the earlier class, create instances of rooms, and display the volume of room. */
class Room{
     constructor(height, width, breadth){
         this.height = height;
         this.width = width;
         this.breadth = breadth;
     }
     
     volume(){
         return this.height * this.width * this.breadth;
     }
 }
 
 class RoomDemo{
     constructor(){
     const room = new Room(6,5,9);
     console.log(`Volume: ${room.volume()}`);
     }
 }
 
 const roomdemo = new RoomDemo();