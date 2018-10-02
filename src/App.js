import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  
  componentDidMount () {
    this.fetchBookDetails()
  }

  fetchBookDetails = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({ books })
      })
  }

  updateBookDetails = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        this.fetchBookDetails()
      })

  }

  render () {
    return (
      <div className='app'>
        <Route exact path='/' render={() => <ListBooks books={this.state.books} onBookUpdate={this.state.updateBookDetails} />}  />
        <Route path='/search' render={() => <SearchBooks books={this.state.books} onBookUpdate={this.state.updateBookDetails} />} />
      </div>
    )
  }
}

export default BooksApp
