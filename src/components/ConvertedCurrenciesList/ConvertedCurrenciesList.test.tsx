import '@testing-library/jest-dom/extend-expect'; // Import the toBeVisible matcher
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../mocks/mock-store';
import {
	USDMock,
	USDlONGMock,
	mockLongListSupportedCurrencies,
	mockSupportedCurrencies,
} from '../../mocks/mocks';
import { ConvertedCurrenciesList } from './ConvertedCurrenciesList';

it('Should render the list of currencies', () => {
	renderWithProviders(<ConvertedCurrenciesList itemsPerPage={100} />, {
		preloadedState: {
			supportedCurrencies: { currencies: mockSupportedCurrencies },
			currencyAmount: { value: 10 },
			conversionRates: { rates: { USD: USDMock } },
		},
	});

	waitFor(() => {
		const currencyCards = screen.getAllByRole('listitem');
		expect(currencyCards).toHaveLength(USDMock.length);
	});
});

it('Should not show the list of currencies when theres no input', () => {
	renderWithProviders(<ConvertedCurrenciesList itemsPerPage={100} />, {
		preloadedState: {
			supportedCurrencies: { currencies: mockSupportedCurrencies },
			conversionRates: { rates: { USD: USDMock } },
		},
	});

	const currencyCards = screen.queryAllByRole('listitem');
	expect(currencyCards).toHaveLength(0);

	const noAmountMessage = screen.getByText(
		'Enter an amount to check the rates.'
	);

	expect(noAmountMessage).toBeVisible();
});
it('Should permorm the infinite loading correctly', () => {
	renderWithProviders(<ConvertedCurrenciesList itemsPerPage={10} />, {
		preloadedState: {
			supportedCurrencies: {
				currencies: mockLongListSupportedCurrencies,
			},
			conversionRates: {
				rates: {
					USD: USDlONGMock,
				},
			},
			currencyAmount: { value: 10 },
		},
	});

	const currencyCards = screen.queryAllByRole('listitem');
	expect(currencyCards).toHaveLength(8);

	fireEvent.scroll(currencyCards[0], { target: { scrollY: 100 } });

	const skeleton = screen.getByTestId('conversion-loading-skeleton');
	expect(skeleton).toBeVisible();

	waitFor(() => {
		const currencyCards = screen.queryAllByRole('listitem');
		expect(currencyCards).toHaveLength(20);
	});

	fireEvent.scroll(currencyCards[0], { target: { scrollY: 100 } });
	expect(skeleton).toBeVisible();

	waitFor(() => {
		const currencyCards = screen.queryAllByRole('listitem');
		expect(currencyCards).toHaveLength(30);
	});
});
