import React, { Component} from 'react';
import PropTypes from 'prop-types';

class Book extends Component {

    updateBook = ({target}) => {
        const { book, onUpdateBook, onAddBook } = this.props

        if(onAddBook){
            onAddBook(book, target.value)
        }else{
            onUpdateBook(book, target.value)
        }
    }

    render(){

        const { book, booksShelf } = this.props

        //console.log(book);
        return <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select
                value={book.shelf || booksShelf[book.id] || 'none'}
                onChange={this.updateBook}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors? book.authors.join(', ') : 'No Author'}</div>
        </div>
      </li>
    }
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onUpdateBook: PropTypes.func,
    onAddBook: PropTypes.func,
    booksShelf: PropTypes.object
}
export default Book;


