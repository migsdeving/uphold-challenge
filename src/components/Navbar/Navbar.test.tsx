import { render, screen } from '@testing-library/react';
import { Navbar } from './Navbar';

it('Renders navbar correctly', () => {
	render(<Navbar />);

	const logo = screen.getByAltText('logo');
	expect(logo).toBeVisible();

	const loginButton = screen.getByTestId('login-button');
	expect(loginButton).toBeVisible();

	const navigationLinks = screen.getByTestId('navigation-links');
	expect(navigationLinks).toBeVisible();
});
