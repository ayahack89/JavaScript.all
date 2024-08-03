
//Class 
// In JavaScript Class are three types => 1.Declaration, 2.Anonyms Expression, 3.Name Expression
//Declaration
class Rectangle{
     constructor(height, width){
       this.height = height;
       this.width = width;
   
     }
     area(){
       return this.height * this.width;
     }
   }
   console.log(`Declaration=> ${new Rectangle(2,4).area()}`);
   
   //Anonyms Expression
   let AnonymsExp = class{
     constructor(height, width){
       this.height = height;
       this.width = width;
     }
     area(){
       return this.height * this.width;
     }
   } 
   console.log(`Anonyms Expression=> ${new AnonymsExp(2,4).area()}`);
   
   //Name Expression
   let nameExp = class RectangleOperation{
     constructor(height, width){
       this.height = height;
       this.width = width;
     }
     area(){
       return this.height * this.width;
     }
   }
   console.log(`Name Expression=> ${new nameExp(2,4).area()}`);