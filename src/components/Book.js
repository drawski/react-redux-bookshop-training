import React from 'react';
import PropTypes from 'prop-types';

import './Book.css';

const defaultImage = 'https://pngimg.com/uploads/book/book_PNG2116.png';

const Book = ({ title, author, price, image = defaultImage }) => {
  return (
    <div className="Book">
      <img className="Book-image" src={image} alt="book" />
        <div className="Book-info">
            <div className="Book-info-title">{title}</div>
            <div className="Book-info-author">{author}</div>
            <div className="Book-info-price">{price}</div>
        </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string
};

export default Book;
