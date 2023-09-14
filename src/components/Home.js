import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../actions/categoryActions';

const Home = () => {
  const dispatch = useDispatch();
  // Access the categories property from the categoryReducer slice of the state
  const categories = useSelector((state) => state.categoryReducer.categories);

  // State to store the search query
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // Function to handle changes in the search input
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to filter games based on the search query
  // eslint-disable-next-line
  const filteredCategories = categories.filter((category) => category.external.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div>
      <h1>Categories</h1>
      {/* Search input */}
      <input
        type="text"
        placeholder="Search games..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <ul>
        {filteredCategories.map((category) => (
          <li key={category.gameID}>
            <Link to={`/category/${category.gameID}`}>
              <img
                src={category.thumb}
                alt={category.external}
                style={{ width: '100px', height: '100px' }}
              />
              {category.external}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
