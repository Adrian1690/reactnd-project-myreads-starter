import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks';
import Search from './Search';
import { Route } from 'react-router-dom';
class BooksApp extends React.Component {


    render() {
    return (
        <div className="app">
            <Route exact path='/' render={(props)=> (
                <ListBooks {...props} />
            )} />


            <Route exact path='/search' render={() => (
                <Search />
            )} />

        </div>
    )
    }
}

export default BooksApp;
