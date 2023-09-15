// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// src/setupTests.js

import { setupServer } from 'msw/node';
import { handlers } from './mocks/handlers';

// Create a server instance and configure it with your handlers
const server = setupServer(...handlers);

// Enable API mocking before tests run
beforeAll(() => server.listen());

// Reset any request handlers that are declared as a part of your tests
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done
afterAll(() => server.close());
