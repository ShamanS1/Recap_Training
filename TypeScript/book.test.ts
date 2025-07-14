import { Book } from '../src/book'; // Adjust the import path accordingly

describe('BookClass', () => {
  it('should create a Book object with the correct properties', () => {
    const book = new Book(1, 'Sample Book', 'John Doe');
    
    expect(book).toHaveProperty('bookID', 1);
    expect(book).toHaveProperty('title', 'Sample Book');
    expect(book).toHaveProperty('author', 'John Doe');
  });

  it('should correctly display book details', () => {
    const book = new Book(1, 'Sample Book', 'John Doe');
    
    // Replace console.log with a custom mock function to capture output
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    book.displayDetails();

    // Expect the console.log to have been called with the expected output
    expect(consoleLogSpy).toHaveBeenCalledWith('Book ID: 1, Title: Sample Book, Author: John Doe');

    // Clean up the spy
    consoleLogSpy.mockRestore();
  });
});
