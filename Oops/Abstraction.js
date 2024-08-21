/* Abstraction */
class Library{

     constructor(bookName, authorName, availableCopies){
          this.bookName = bookName;
          this.authorName = authorName;
          this.availableCopies = availableCopies;
     }
  
     #checkAvailability(){
          return this.availableCopies > 0;
     }

     #processBorrowing(){
          return this.availableCopies --;
     }

     borrowBook(){
          if(this.#checkAvailability()){
               this.#processBorrowing();
               console.log(`You have successfully borrowed "${this.bookName}" by ${this.authorName}.`);
     
          }else{
               console.log(`Sorry, "${this.bookName}" is currently not available.`);    
          }
     }
}

const book = new Library("JavaScript - Fundamentals", "John Smith", 6);
book.borrowBook();