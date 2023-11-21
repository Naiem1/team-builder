import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Home', () => {
  test('Render Correctly', () => {
    render(<Home />);
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toBeInTheDocument();
  });
});
