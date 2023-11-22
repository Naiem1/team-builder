import Welcome from "../app/(auth)/welcome/page";
import { render, screen } from '@testing-library/react';

describe('Welcome', () => { 
  it('should correctly render', () => {
    render(<Welcome />);
    const imageElement = screen.getByRole('img');
    expect(imageElement).toBeInTheDocument();

    const headingElement = screen.getAllByRole('heading', {level: 1});
    expect(headingElement).toHaveLength(2);

    const buttonElement = screen.getAllByRole('button')
    expect(buttonElement).toHaveLength(2);
  })
})