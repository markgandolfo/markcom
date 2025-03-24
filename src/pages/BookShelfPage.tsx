import React from 'react';
import BookshelfList from '../components/BookShelfList.tsx';
import BackToHome from '../components/BackToHome.tsx';
import booksData from '../data/books.json';

const BookShelfPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <BookshelfList 
        books={booksData.books} 
        title="MY SMALL BOOKSHELF"
        description="This is a short list of books that I've recently read and that has taught me so much. I hope you like it, and if possible, send me your book recommendations."
      />
      
      <div className="max-w-7xl mx-auto px-4 pb-12 flex justify-center">
        <BackToHome />
      </div>
    </div>
  );
};

export default BookShelfPage;