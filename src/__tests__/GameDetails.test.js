import axios from 'axios';
import {
  render, screen, act, waitFor,
} from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import GameDetails from '../components/GameDetails';

// Mock Axios for the test
jest.mock('axios');

test('renders game details component with loading message', async () => {
  // Mock Axios response for the loading state
  axios.get.mockResolvedValueOnce({ data: null });

  // Render the component within a MemoryRouter and with a gameID param
  render(
    <MemoryRouter initialEntries={['/game/123']}>
      <Route path="/game/:gameID">
        <GameDetails />
      </Route>
    </MemoryRouter>,
  );

  // Check if loading message is displayed within an act block
  act(() => {
    const loadingMessage = screen.getByText(/Loading game details.../i);
    expect(loadingMessage).toBeInTheDocument();
  });
});

test('renders game details component with loaded data', async () => {
  // Mock Axios response for the loaded state
  const mockData = {
    info: {
      title: 'Sample Game',
      steamAppID: '12345',
      thumb: 'sample.jpg',
    },
    deals: [
      {
        dealID: 'deal123',
        price: 19.99,
        retailPrice: 29.99,
        savings: 33,
      },
    ],
  };

  axios.get.mockResolvedValueOnce({ data: mockData });

  // Render the component within a MemoryRouter and with a gameID param
  render(
    <MemoryRouter initialEntries={['/game/123']}>
      <Route path="/game/:gameID">
        <GameDetails />
      </Route>
    </MemoryRouter>,
  );

  // Wait for the component to finish rendering with the data
  await waitFor(() => {
    const title = screen.getByText(/Sample Game/i);
    const steamAppID = screen.getByText(/Steam App ID:/);
    const thumb = screen.getByAltText(/Sample Game/i);
    const price = screen.getByTestId('price'); // Use data-testid
    const retailPrice = screen.getByTestId('retail-price'); // Use data-testid
    const savings = screen.getByText(/Savings:/i);

    expect(title).toBeInTheDocument();
    expect(steamAppID).toBeInTheDocument();
    expect(thumb).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(retailPrice).toBeInTheDocument();
    expect(savings).toBeInTheDocument();
  });
});
