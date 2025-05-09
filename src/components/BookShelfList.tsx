import React from 'react';
import Book from './Book';

interface BookData {
  id: string;
  title: string;
  imageUrl: string;
  url?: string;
}

interface BookshelfListProps {
  books: BookData[];
  description?: string;
}

const BookshelfList: React.FC<BookshelfListProps> = ({
  books,
  description = "This is a short list of books that I've recently read and that has taught me so much. I hope you like it, and if possible, send me your book recommendations."
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-0">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-gray-600">{description}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10">
        {books.map((book) => (
          <div key={book.id} className="flex justify-center">
            <Book
              imageUrl={book.imageUrl}
              title={book.title}
              url={book.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookshelfList;
