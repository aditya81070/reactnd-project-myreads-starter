import React from 'react'
import PropTypes from 'prop-types'

const Book = ({ book, onUpdate }) => {
  const changeBookShelf = (shelf) => {
    onUpdate(shelf)
  }

  return (
    <li>
      <div className='book'>
        <div className='book-top'>
          <div className='book-cover'
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})` }} />
          <div className='book-shelf-changer'>
            <select onChange={(e) => changeBookShelf(e.target.value)} value={book.shelf}>
              <option value='move' disabled>Move to...</option>
              <option value='currentlyReading'>Currently Reading</option>
              <option value='wantToRead'>Want to Read</option>
              <option value='read'>Read</option>
              <option value='none'>None</option>
            </select>
          </div>
        </div>
        <div className='book-title'>{book.title}</div>
        <div className='book-authors'>{book.authors}</div>
      </div>
    </li>
  )
}
Book.propTypes = {
  book: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired
}

export default Book
