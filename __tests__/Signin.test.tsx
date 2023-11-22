import { render, screen } from '@testing-library/react';
import SignIn from '../app/(auth)/signin/page';

describe('Signin', () => {
  it('should render correctly', () => {
    render(<SignIn />);
    const imageElement = screen.getByRole('img');
    expect(imageElement).toBeInTheDocument();

    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toBeInTheDocument();

    const inputTextElement = screen.getByPlaceholderText(/Email address/i);
    expect(inputTextElement).toBeInTheDocument();

    const inputPasswordElement = screen.getByPlaceholderText('Password');
    expect(inputPasswordElement).toBeInTheDocument();

    const forgotPasswordElement = screen.getByText('Forgot password?');
    expect(forgotPasswordElement).toBeInTheDocument();

    const buttonElement = screen.getByRole('button', { name: 'Continue' });
    expect(buttonElement).toBeInTheDocument();

    const navigationMessage = screen.getByText(/Don't have an account?/i);
    expect(navigationMessage).toBeInTheDocument();

    const pageNavigation = screen.getByText('Sign up');
    expect(pageNavigation).toBeInTheDocument();
  });
});
