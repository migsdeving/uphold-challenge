import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../mocks/mock-store';
import { USDMock, mockSupportedCurrencies } from '../../../mocks/mocks';
import { SupportedCurrency } from '../../slices/supportedCurrencies';
import { ExchangeRateCard } from './ExchangeRateCard';

test('Should render the correct values', () => {
	renderWithProviders(
		<ExchangeRateCard
			currency={mockSupportedCurrencies[0]}
			rate={USDMock[0]}
		/>,
		{
			preloadedState: {
				selectedCurrency: {
					currency: mockSupportedCurrencies.find(
						({ code }) => code === 'USD'
					) as SupportedCurrency,
				},
				currencyAmount: { value: 10 },
				supportedCurrencies: {
					currencies: mockSupportedCurrencies as SupportedCurrency[],
				},
			},
		}
	);
	const value = screen.getByText('100');
	const ticker = screen.getByText('BAT');

	expect(ticker).toBeVisible;
	expect(value).toBeVisible;

	const loadingSkeleton = screen.queryByTestId('conversion-loading-skeleton');

	expect(loadingSkeleton).not.toBeInTheDocument();
});
