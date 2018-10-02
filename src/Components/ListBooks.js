import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
// import PropTypes from 'prop-types'

class ListBooks extends Component {

  render () {
    const books = this.props.books
    return (
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>
        <div className='list-books-content'>
          <div>
            <BookShelf title='Currently Reading' onChangeShelf={this.props.onBookUpdate} books={books.filter((book) => (book.shelf === 'currentlyReading'))} />
            <BookShelf title='Want To Read' onChangeShelf={this.props.onBookUpdate} books={books.filter((book) => (book.shelf === 'wantToRead'))} />
            <BookShelf title='Read' onChangeShelf={this.props.onBookUpdate} books={books.filter((book) => (book.shelf === 'read'))} />
          </div>
        </div>
        <div className='open-search'>
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
