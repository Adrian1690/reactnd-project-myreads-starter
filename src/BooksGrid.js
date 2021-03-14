import React, { Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class BooksGrid extends Component {

    render() {
        const { books, onUpdateBook, onAddBook, booksShelf } = this.props
        if (!books || books.length === 0) return null;
        return (
            <ol className="books-grid">
                {
                    books.map(book => (
                        <Book
                            key={book.id}
                            book={book}
                            onUpdateBook={onUpdateBook}
                            onAddBook={onAddBook}
                            booksShelf={booksShelf}
                        />
                    ))
                }
            </ol>
        )
    }
}

BooksGrid.propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func,
    onAddBook: PropTypes.func,
    booksShelf: PropTypes.object
}

export default BooksGrid;