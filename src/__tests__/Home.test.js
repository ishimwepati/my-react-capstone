import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Home from '../components/Home';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

test('renders Home component with search input and categories', () => {
  const mockCategories = [
    { gameID: 1, thumb: 'category1.jpg', external: 'Category 1' },
    { gameID: 2, thumb: 'category2.jpg', external: 'Category 2' },

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
    </Provider>,
  );

  const category1Element = screen.getByText('Category 1');
  expect(category1Element).toBeInTheDocument();

  const category2Element = screen.getByText('Category 2');
  expect(category2Element).toBeInTheDocument();
});
