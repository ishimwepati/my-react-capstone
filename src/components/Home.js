// Home.js

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../actions/categoryActions';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoryReducer.categories);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  // eslint-disable-next-line
  const filteredCategories = categories.filter((category) => category.external.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="body-class">
      <h1>Gaming List</h1>
      <div className="filter-container">
        <input
          type="text"
          placeholder=""
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="filter"
        />
      </div>
      <div className="container">
        {filteredCategories.map((category) => (
          <div className="grid-item" key={category.gameID}>
            <Link to={`/category/${category.gameID}`}>
              <img
                src={category.thumb}
                alt={category.external}
              />
              <h3>{category.external}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
