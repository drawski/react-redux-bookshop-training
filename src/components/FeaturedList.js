import React from 'react';
import { connect } from 'react-redux'
import { fetchFeaturedBooks } from '../redux/modules/featured'
import PropTypes from 'prop-types'

import BookList from './BookList'

const mapStateToProps = state => {
  return {
    featuredBooks: state.featuredBooks
  }
}

const mapDispatchToProps = {
  fetchFeaturedBooks
}

class FeaturedList extends React.Component {
  componentDidMount() {
    this.props.fetchFeaturedBooks()
  }

  render() {
    return (
      <div className="BookList">
        <h2>Featured books</h2>
        <BookList books={this.props.featuredBooks}/>
      </div>
    );
  }
}

FeaturedList.propTypes = {
  featuredBooks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string
    })
  ),
  fetchFeaturedBooks: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedList);
