import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'

class SearchBooks extends Component {
  state = {
    query: '',
    searchResults: []
  }
  handleChange = (query) => {
    this.setState({ query })
    // this.bookSearch(query)
  }
  render () {
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link className='close-search' to='/'>Close</Link>
          <div className='search-books-input-wrapper'>
            <input type='text' 
              placeholder='Search by title or author'
              value={this.state.query}
              onChange={(e) => (this.handleChange(e.target.value))} />
          </div>
        </div>
        <div className='search-books-results'>
          <ol className='books-grid' />
        </div>
      </div>
    )
  }
}

export default SearchBooks
