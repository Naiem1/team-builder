import { render, screen } from '@testing-library/react';
import SignUp from '../app/(auth)/signup/page';

describe('Signup', () => {
  it('should render correctly', () => {
    render(<SignUp />);
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

    const navigationMessage = screen.getByText(/Already have a account?/i);
    expect(navigationMessage).toBeInTheDocument();

    const pageNavigation = screen.getByText('Sign in');
    expect(pageNavigation).toBeInTheDocument();
  });
});
