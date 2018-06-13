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
  constructor() {
    super()
    this.state = {
      search: ''
    }
    this.onSearchChange = this.onSearchChange.bind(this)
  }

  onSearchChange(e) {
    this.setState({
      ...this.state,
      search: e.target.value
    })
    if (e.target.value.length >= 2) {
      this.props.searchBooks(this.state.search)
    }
  }

  render() {
    return (
      <div className="Search">
        <input value={this.state.search} onChange={this.onSearchChange}/>
        <div className="BookList">
          <BookList books={this.props.books}/>
        </div>
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
