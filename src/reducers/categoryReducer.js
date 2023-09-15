// reducers/categoryReducer.js

import { FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORY_DETAILS_SUCCESS } from '../actions/categoryActions';

const initialState = {
  categories: [],
  categoryDetails: null,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
      };
    case FETCH_CATEGORY_DETAILS_SUCCESS:
      return {
        ...state,
        categoryDetails: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
