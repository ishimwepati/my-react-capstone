import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'; // Import redux-thunk
import Home from '../components/Home';

const middlewares = [thunk]; // Add thunk middleware
const mockStore = configureStore(middlewares);

test('renders Home component with search input and categories', () => {
  // Define your mock data for categories
  const mockCategories = [
    { gameID: 1, thumb: 'category1.jpg', external: 'Category 1' },
    { gameID: 2, thumb: 'category2.jpg', external: 'Category 2' },
    // Add more categories as needed
  ];

  const initialState = {
    categoryReducer: {
      categories: mockCategories,
    },
  };

  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <Router>
        <Home />
      </Router>
    </Provider>
  );

  // Check for the presence of category elements based on the mock data
  const category1Element = screen.getByText('Category 1');
  expect(category1Element).toBeInTheDocument();

  const category2Element = screen.getByText('Category 2');
  expect(category2Element).toBeInTheDocument();

  // Add more assertions as needed for your specific use case
});
