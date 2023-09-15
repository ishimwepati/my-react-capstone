import axios from 'axios';
import {
  render, screen, act, waitFor,
} from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import GameDetails from '../components/GameDetails';

jest.mock('axios');

test('renders game details component with loading message', async () => {
  axios.get.mockResolvedValueOnce({ data: null });

  render(
    <MemoryRouter initialEntries={['/game/123']}>
      <Route path="/game/:gameID">
        <GameDetails />
      </Route>
    </MemoryRouter>,
  );

  act(() => {
    const loadingMessage = screen.getByText(/Loading game details.../i);
    expect(loadingMessage).toBeInTheDocument();
  });
});

test('renders game details component with loaded data', async () => {
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

  render(
    <MemoryRouter initialEntries={['/game/123']}>
      <Route path="/game/:gameID">
        <GameDetails />
      </Route>
    </MemoryRouter>,
  );

  await waitFor(() => {
    const title = screen.getByText(/Sample Game/i);
    const steamAppID = screen.getByText(/Steam App ID:/);
    const thumb = screen.getByAltText(/Sample Game/i);
    const price = screen.getByTestId('price');
    const retailPrice = screen.getByTestId('retail-price');
    const savings = screen.getByText(/Savings:/i);

    expect(title).toBeInTheDocument();
    expect(steamAppID).toBeInTheDocument();
    expect(thumb).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(retailPrice).toBeInTheDocument();
    expect(savings).toBeInTheDocument();
  });
});
