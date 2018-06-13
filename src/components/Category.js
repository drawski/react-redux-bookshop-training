import React from 'react';
import { cat } from '../backend/data'

const Category = () => (
  <ul>
    { Object.values(cat).map(category => (
      <li key={category}>{category}</li>
    )) }
  </ul>
)

export default Category;
