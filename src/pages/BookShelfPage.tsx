import React from 'react';
import Subheading from '../components/Subheading';
import BookshelfList from '../components/BookShelfList.tsx';
import booksData from '../data/books.json';

const BookShelfPage: React.FC = () => {
  return (
    <div className="min-h-screen py-8">
      <Subheading text="MY BOOKSHELF" />
      <BookshelfList 
        books={booksData.books} 
        description="This is a short list of books that I've recently read that i've found valuable. I hope you like it, and if possible, send me your book recommendations."
      />
    </div>
  );
};

export default BookShelfPage;