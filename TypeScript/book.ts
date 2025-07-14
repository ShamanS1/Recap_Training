export class Book {
  bookID: number;
  title:string;
  author:string;

  // Define required properties
 
  constructor(bookID:number,title:string,author:string) {
    // You need to initialize your variables
    this.bookID=bookID;
    this.title=title;
    this.author=author;
  }

  // Method:displayDetails(): This method should log the book's details to the console in the format: "Book ID: [bookID], Title: [title], Author: [author]".
  displayDetails(){
    console.log(`Book ID: ${this.bookID}, Title: ${this.title}, Author: ${this.author}`)
  }
}

// You need to create a new Book object and call displayDetails method
const books = new Book(1,"new","me");
books.displayDetails();
