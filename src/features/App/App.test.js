import { render, screen } from '@testing-library/react';
import App from './App';

test('App rendering', () => {
  render(<App />);
  const linkElement = screen.getByText(Home);
  expect(linkElement).toBeInTheDocumenct();
});
