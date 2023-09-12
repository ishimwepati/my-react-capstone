// store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import categoryReducer from './reducers/categoryReducer'; // Import your categoryReducer

const rootReducer = combineReducers({
  categoryReducer, // Make sure to include it in your rootReducer
  // other reducers can be added here if you have more
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
