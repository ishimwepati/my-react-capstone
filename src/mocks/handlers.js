// src/mocks/handlers.js

import { rest } from 'msw';

// Define your mock API responses here
const handlers = [
  rest.get('https://www.cheapshark.com/api/1.0/games', (req, res, ctx) => {
    // Mock response data
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

    return res(ctx.json(mockData));
  }),
];

export { handlers };
