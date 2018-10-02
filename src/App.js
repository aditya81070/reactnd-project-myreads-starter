import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './Utils/BooksAPI'
import ListBooks from './Components/ListBooks'
import SearchBooks from './Components/SearchBooks'
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
        <Route exact path='/' render={() => <ListBooks books={this.state.books} onBookUpdate={this.updateBookDetails} />}  />
        <Route path='/search' render={() => <SearchBooks myBooks={this.state.books} onBookUpdate={this.updateBookDetails} />} />
      </div>
    )
  }
}

export default BooksApp
