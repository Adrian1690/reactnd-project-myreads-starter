import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks';
import Search from './Search';
import { Route } from 'react-router-dom';
import * as API from './BooksAPI';
class BooksApp extends React.Component {

    state = {
        books: []
    }

    componentDidMount(){
        API.getAll().then(books => {

            this.setState(currentState => ({
                books: books
            }))
        })
    }

    booksShelf = () => {
        let booksShelf = {};

        for(const book of this.state.books){
            booksShelf[book.id] = book.shelf
        }

        return booksShelf
    }

    updateBook = (bookToUpdate, shelf) => {

        API.update(bookToUpdate, shelf)
            .then(() => {
                this.setState(currentState => ({
                    books: currentState.books.map(book => bookToUpdate.id === book.id ? {...bookToUpdate, shelf} : book)
                }))
        });
    }

    addBook = (bookToAdd, shelf) => {

        const booksShelf = this.booksShelf()

        // Updating book in server
        API.update(bookToAdd, shelf)
            .then(()=>{
                // Is book was shelf
                if(booksShelf[bookToAdd.id]){
                    this.setState(currentState => ({
                        books: currentState.books.map(book => bookToAdd.id === book.id ? {...bookToAdd, shelf} : book)
                    }))

                    return
                }

                bookToAdd.shelf = shelf;
                this.setState(currentState => ({
                    books: currentState.books.concat([bookToAdd])
                }))
            })

    }

    render() {
        //console.log(this.state.books);
        return (
            <div className="app">
                <Route exact path='/' render={(props)=> (
                    <ListBooks
                        {...props}
                        books={this.state.books}
                        onUpdateBook={this.updateBook}
                    />
                )} />

                <Route exact path='/search' render={() => (
                    <Search
                        books={this.state.books}
                        onAddBook={this.addBook}
                        booksShelf={this.booksShelf()}
                    />
                )} />

            </div>
        )
    }
}

export default BooksApp;
