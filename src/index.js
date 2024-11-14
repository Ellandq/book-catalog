import React from 'react';
import ReactDOM from 'react-dom';
import BookCatalog from './components/book-catalog';
import './styles.css';

const books = [
  { title: '1984', author: 'George Orwell', category: 'Fiction', description: 'Dystopian novel.' },
  { title: 'A Brief History of Time', author: 'Stephen Hawking', category: 'Science', description: 'A journey through space and time.' },
];

ReactDOM.render(<BookCatalog books={books} />, document.getElementById('root'));
