import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { fetchCategoryDetails } from '../actions/categoryActions';
import GameDetails from './GameDetails';

const CategoryDetails = () => {
  const { categoryID } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const categoryDetails = useSelector((state) => state.categoryReducer.categoryDetails);

  useEffect(() => {
    dispatch(fetchCategoryDetails(categoryID));
  }, [dispatch, categoryID]);

  const handleBackClick = () => {
    history.push('/');
  };
  return (
    <div>
      <h2>Category Details</h2>
      {categoryDetails ? (
        <div>
          {categoryDetails.map((game) => (
            <div key={game.gameID}>
              <h3>{game.external}</h3>
              <p>
                Cheapest Price:
                {game.cheapest}
              </p>
              {game.thumb ? (
                <img src={game.thumb} alt={game.external} />
              ) : (
                <p>No image available</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div>
          <GameDetails />
          {' '}
        </div>
      )}
      <button type="button" onClick={handleBackClick}>Back</button>
    </div>
  );
};

export default CategoryDetails;
