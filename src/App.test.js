import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header element with "Your Logo"', () => {
  render(<App />);
  const headerElement = screen.getByAltText('Your Logo');
  expect(headerElement).toBeInTheDocument();
});
