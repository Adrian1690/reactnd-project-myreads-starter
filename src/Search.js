import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BooksGrid from './BooksGrid';
import * as API from './BooksAPI';
class Search extends Component {

    state = {
        query: '',
        booksFinded: []
    }

    searchBooks = ({target}) => {

        this.setState(currentState => ({
            query: target.value
        }))

        if(!target.value) return;

        API.search(target.value.trim())
            .then(books => {
                const booksFinded = !books.error ? books : [];

                // Filtering books without thumbnail
                this.setState({
                    booksFinded: booksFinded.filter(book => !!book.imageLinks === true)
                })
        })
    }

    render(){

        const books = this.state.query !== ''? this.state.booksFinded : [];

        return <div className="search-books">
        <div className="search-books-bar">
            <Link to='/' className="close-search" >Close</Link>
            <div className="search-books-input-wrapper">
                {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input
                    value={this.state.query}
                    onChange={this.searchBooks}
                    type="text"
                    placeholder="Search by title or author"/>

            </div>
            </div>
            <div className="search-books-results">
                <BooksGrid
                    onAddBook={this.props.onAddBook}
                    books={books}
                    booksShelf={this.props.booksShelf}
                />
            </div>
        </div>
    }
}

export default Search;
