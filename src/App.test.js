import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Categories header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Categories/i);
  expect(headerElement).toBeInTheDocument();
});
