import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../../mocks/mock-store';
import { mockSupportedCurrencies } from '../../../mocks/mocks';
import { SupportedCurrency } from '../../slices/supportedCurrencies';
import { CurrencySelector } from './CurrencySelector';

it('Should show USD by default', () => {
	renderWithProviders(<CurrencySelector />, {
		preloadedState: {
			selectedCurrency: {
				currency: mockSupportedCurrencies.find(
					({ code }) => code === 'USD'
				) as SupportedCurrency,
			},
			supportedCurrencies: {
				currencies: mockSupportedCurrencies as SupportedCurrency[],
			},
		},
	});
	const selectButton = screen.getByRole('button');
	expect(selectButton).toBeVisible();
	expect(selectButton.textContent).toBe('USD');
});
it('Should open/close the select menu when clicking the button', () => {
	renderWithProviders(<CurrencySelector />, {
		preloadedState: {
			selectedCurrency: {
				currency: mockSupportedCurrencies.find(
					({ code }) => code === 'USD'
				) as SupportedCurrency,
			},
			supportedCurrencies: {
				currencies: mockSupportedCurrencies as SupportedCurrency[],
			},
		},
	});

	const selectButton = screen.getByRole('button');
	expect(selectButton).toBeVisible();

	userEvent.click(selectButton);

	const selectMenu = screen.getByRole('menu');
	expect(selectMenu).toBeVisible();

	userEvent.click(selectButton);

	expect(selectMenu).not.toBeInTheDocument();
});
it('Should close the select menu when clicking outside it', () => {
	renderWithProviders(<CurrencySelector />, {
		preloadedState: {
			selectedCurrency: {
				currency: mockSupportedCurrencies.find(
					({ code }) => code === 'USD'
				) as SupportedCurrency,
			},
			supportedCurrencies: {
				currencies: mockSupportedCurrencies as SupportedCurrency[],
			},
		},
	});

	const selectButton = screen.getByRole('button');
	expect(selectButton).toBeVisible();

	userEvent.click(selectButton);

	const selectMenu = screen.getByRole('menu');
	expect(selectMenu).toBeVisible();

	userEvent.click(document.body);

	expect(selectMenu).not.toBeInTheDocument();
});
it('Should change the displayed currency when a different one is selected', () => {
	let selectedCurrency = 'USD';

	const { rerender } = renderWithProviders(<CurrencySelector />, {
		preloadedState: {
			selectedCurrency: {
				currency: mockSupportedCurrencies.find(
					({ code }) => code === 'USD'
				) as SupportedCurrency,
			},
			supportedCurrencies: {
				currencies: mockSupportedCurrencies as SupportedCurrency[],
			},
		},
	});

	const selectButton = screen.getByRole('button');
	expect(selectButton).toBeVisible();
	expect(selectButton.textContent).toBe('USD');

	userEvent.click(selectButton);

	const selectMenu = screen.getByRole('menu');
	expect(selectMenu).toBeVisible();

	const btcOption = screen.getByText('BTC');
	userEvent.click(btcOption);

	expect(selectMenu).not.toBeInTheDocument();

	rerender(<CurrencySelector />);
	expect(selectButton.textContent).toBe('BTC');
});
it('Should render every supported currency on the select menu', () => {
	renderWithProviders(<CurrencySelector />, {
		preloadedState: {
			selectedCurrency: {
				currency: mockSupportedCurrencies.find(
					({ code }) => code === 'USD'
				) as SupportedCurrency,
			},
			supportedCurrencies: {
				currencies: mockSupportedCurrencies as SupportedCurrency[],
			},
		},
	});

	const selectButton = screen.getByRole('button');
	expect(selectButton).toBeVisible();

	userEvent.click(selectButton);

	const selectMenu = screen.getByRole('menu');
	expect(selectMenu).toBeVisible();

	mockSupportedCurrencies
		.filter((currency) => currency.code !== 'USD')
		.forEach((currency) => {
			expect(selectMenu).toHaveTextContent(currency.code);
		});
});
