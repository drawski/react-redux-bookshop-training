import React from 'react';
import PropTypes from 'prop-types';

import './BookList.css'

import Book from './Book.js'

const BookList = ({ books }) => (
  <ul className="BookList-list">
    {books.map(book => {
      return <li className="BookList-list-item" key={book.id}><Book {...book}/></li>
    })}
  </ul>
)

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string
    })
  )
}

export default BookList
