import React from 'react';

const BookCatalog = ({ books }) => {
  const bookList = document.getElementById("book-list");
  const filterBooks = (category) => {
    bookList.innerHTML = "";
    books
      .filter(book => category === "All" || book.category === category)
      .forEach(book => createBookElement(book, bookList));
  };

  const addBook = (event) => {
    event.preventDefault();
    const newBook = {
      title: event.target.title.value,
      author: event.target.author.value,
      category: event.target.category.value,
      description: event.target.description.value,
    };
    createBookElement(newBook, bookList);
    event.target.reset();
  };

  const createBookElement = (book, container) => {
    const bookItem = document.createElement("div");
    bookItem.className = "book-item";
    bookItem.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Category: ${book.category}</p>
      <p>${book.description}</p>
    `;
    container.appendChild(bookItem);
  };

  return (
    <div>
      <h1>Book Catalog</h1>
      <form onSubmit={addBook}>
        <input name="title" placeholder="Title" required />
        <input name="author" placeholder="Author" required />
        <select name="category" required>
          <option>Fiction</option>
          <option>Non-Fiction</option>
        </select>
        <textarea name="description" placeholder="Description" required></textarea>
        <button type="submit">Add Book</button>
      </form>

      <select onChange={(e) => filterBooks(e.target.value)}>
        <option>All</option>
        <option>Fiction</option>
        <option>Non-Fiction</option>
      </select>

      <div id="book-list">
        {books.map((book) => (
          <div key={book.title} className="book-item">
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Category: {book.category}</p>
            <p>{book.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCatalog;
