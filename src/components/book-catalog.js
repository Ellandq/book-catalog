import React from 'react';

const BookCatalog = ({ books }) => {
  let filteredBooks = books;

  const handleFilterChange = (event) => {
    const category = event.target.value;
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    filteredBooks = category
      ? books.filter(book => book.category === category)
      : books;

    filteredBooks.forEach(book => {
      const bookItem = document.createElement('li');
      bookItem.textContent = `${book.title} - ${book.author} (${book.category}): ${book.description}`;
      bookList.appendChild(bookItem);
    });
  };

  const handleAddBook = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const author = event.target.author.value;
    const category = event.target.category.value;
    const description = event.target.description.value;

    const bookItem = document.createElement('li');
    bookItem.textContent = `${title} - ${author} (${category}): ${description}`;
    document.getElementById('book-list').appendChild(bookItem);

    event.target.reset();
  };

  return (
    <div>
      <h1>Book Catalog</h1>
      <select onChange={handleFilterChange}>
        <option value="">All Categories</option>
        <option value="Fiction">Fiction</option>
        <option value="Non-fiction">Non-fiction</option>
        <option value="Science">Science</option>
        <option value="History">History</option>
      </select>
      <ul id="book-list">
        {filteredBooks.map((book, index) => (
          <li key={index}>{book.title} - {book.author} ({book.category}): {book.description}</li>
        ))}
      </ul>
      <form onSubmit={handleAddBook}>
        <input name="title" placeholder="Title" required />
        <input name="author" placeholder="Author" required />
        <input name="category" placeholder="Category" required />
        <input name="description" placeholder="Description" required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BookCatalog;
