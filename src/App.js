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
      .then((params) => {
        this.fetchBookDetails()
      })

  }
  
  render () {
    return (
      <div className='app'>
        <Route exact path='/' component={ListBooks} />
        <Route path='/search' component={SearchBooks} />
      </div>
    )
  }
}

export default BooksApp
