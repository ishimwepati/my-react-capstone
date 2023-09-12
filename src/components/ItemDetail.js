import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { fetchCategoryDetails } from '../actions/categoryActions';

const ItemDetail = () => {
  const { categoryID } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const categoryDetails = useSelector((state) => state.categoryReducer.categoryDetails);

  useEffect(() => {
    dispatch(fetchCategoryDetails(categoryID)); // Assuming your action fetches item details
  }, [dispatch, categoryID]);

  const handleBackClick = () => {
    history.push('/');
  };

  return (
    <div>
      <h2>Item Details</h2>
      {categoryDetails ? (
        <div>
          <h3>{categoryDetails.external}</h3>
          <p>
            Cheapest Price:
            {categoryDetails.cheapest}
          </p>
          {/* Display other item details */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={handleBackClick}>Back</button>
    </div>
  );
};

export default ItemDetail;
