// actions/categoryActions.js

import axios from 'axios';

export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORY_DETAILS_SUCCESS = 'FETCH_CATEGORY_DETAILS_SUCCESS';

export const fetchCategoriesSuccess = (categories) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: categories,
});

export const fetchCategoryDetailsSuccess = (categoryDetails) => ({
  type: FETCH_CATEGORY_DETAILS_SUCCESS,
  payload: categoryDetails,
});

export const fetchCategories = () => async (dispatch) => {
  try {
    const response = await axios.get('https://www.cheapshark.com/api/1.0/games?title=batman');
    dispatch(fetchCategoriesSuccess(response.data));
  } catch (error) {
    // My handle error
  }
};

export const fetchCategoryDetails = (categoryID) => async (dispatch) => {
  try {
    const response = await axios.get(`https://www.cheapshark.com/api/1.0/games/${categoryID}`);
    dispatch(fetchCategoryDetailsSuccess(response.data));
  } catch (error) {
    // My handle error
  }
};
