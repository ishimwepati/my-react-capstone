import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../actions/categoryActions';

const Home = () => {
  const dispatch = useDispatch();
  // Access the categories property from the categoryReducer slice of the state
  const categories = useSelector((state) => state.categoryReducer.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.gameID}>
            <Link to={`/category/${category.gameID}`}>
              <img
                src={category.thumb} // Use the 'thumb' property for the image URL
                alt={category.external}
                style={{ width: '200px', height: '100px' }} // Set the image size as needed
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
