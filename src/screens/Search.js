import React from 'react';
import { connect } from 'react-redux'
import { searchBooks } from '../redux/modules/search/index'
import PropTypes from 'prop-types'

import BookList from '../components/BookList'

const mapStateToProps = state => {
  return {
    books: state.books
  }
}

const mapDispatchToProps = {
  searchBooks
}

class Search extends React.Component {
  render() {
    return (
      <div className="Search">
        <input onChange={(e) => this.props.searchBooks(e.target.value)}/>
        <BookList books={this.props.books}/>
      </div>
    );
  }
}

Search.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string
    })
  ),
  searchBooks: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
