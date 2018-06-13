import React from 'react';
import { cat } from '../backend/data'
import { Link } from 'react-router-dom'

const Category = () => (
  <ul>
    { Object.values(cat).map(category => (
      <li key={category}><Link to={`/category/${category}`}>{category}</Link></li>
    )) }
  </ul>
)

export default Category;
