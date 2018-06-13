import React from 'react';
import { connect } from 'react-redux'
import { fetchFeaturedBooks } from '../redux/modules/featured'
import PropTypes from 'prop-types'

import './FeaturedList.css'
import Book from './Book'

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
      <div className="FeaturedList">
        <ul className="FeaturedList-list">
          {this.props.featuredBooks.map(book => {
            return <li className="FeaturedList-list-item" key={book.id}><Book {...book}/></li>
          })}
        </ul>
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
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedList);
