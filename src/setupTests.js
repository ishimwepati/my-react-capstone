// eslint-disable-next-line
import '@testing-library/jest-dom';
// eslint-disable-next-line
import { setupServer } from 'msw/node';
import { handlers } from './mocks/handlers';

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
