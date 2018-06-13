import React from 'react';
import { connect } from 'react-redux'
import { fetchCategoryBooks } from '../redux/modules/category/index'
import PropTypes from 'prop-types'

import BookList from '../components/BookList'

const mapStateToProps = (state, { match }) => {
  return {
    categoryBooks: state.categoryBooks,
    category: match.params.category
  }
}

const mapDispatchToProps = {
  fetchCategoryBooks
}

class CategoryList extends React.Component {
  componentDidMount() {
    this.props.fetchCategoryBooks(this.props.category)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.category !== this.props.category) {
      this.props.fetchCategoryBooks(this.props.category)
    }
  }

  render() {
    return (
      <div className="BookList">
        <h2>Books by category</h2>
        <BookList books={this.props.categoryBooks}/>
      </div>
    );
  }
}

CategoryList.propTypes = {
  categoryBooks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string
    })
  ),
  category: PropTypes.string,
  fetchCategoryBooks: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
