import React, { Component } from 'react';
import BooksGrid from './BooksGrid';
import PropTypes from 'prop-types'
class ListBooks extends Component{
    render(){
      const { books, history, onUpdateBook } = this.props;

      const currentlyReadingBooks = books.filter(book => book.shelf === "currentlyReading")
      const wantToReadBooks = books.filter(book => book.shelf === "wantToRead")
      const readBooks = books.filter(book => book.shelf === "read")

      return <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <BooksGrid
                books={currentlyReadingBooks}
                onUpdateBook={onUpdateBook}
              />
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <BooksGrid
                books={wantToReadBooks}
                onUpdateBook={onUpdateBook}
              />
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <BooksGrid
                books={readBooks}
                onUpdateBook={onUpdateBook}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="open-search">
        <button onClick={() => history.push('/search')}>Add a book</button>
      </div>
    </div>
  }

}

export default ListBooks;