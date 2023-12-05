import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../mocks/mock-store';
import { USDMock, mockSupportedCurrencies } from '../../mocks/mocks';
import { SupportedCurrency } from '../../slices/supportedCurrencies';
import { CurrencyInput } from './CurrencyInput';

it('updates input field value when the user types', () => {
	renderWithProviders(<CurrencyInput />, {
		preloadedState: {
			selectedCurrency: {
				currency: mockSupportedCurrencies.find(
					({ code }) => code === 'USD'
				) as SupportedCurrency,
			},
			supportedCurrencies: {
				currencies: mockSupportedCurrencies as SupportedCurrency[],
			},
			conversionRates: { rates: { USD: USDMock } },
		},
	});

	const inputElement = screen.getByPlaceholderText('0.00');
	expect(inputElement).toBeVisible();

	fireEvent.change(inputElement, { target: { value: '123.45' } });

	expect(inputElement).toHaveValue(123.45);
});
it("validates that the mouse-wheel doesn't trigger the number input", () => {
	renderWithProviders(<CurrencyInput />, {
		preloadedState: {
			selectedCurrency: {
				currency: mockSupportedCurrencies.find(
					({ code }) => code === 'USD'
				) as SupportedCurrency,
			},
			supportedCurrencies: {
				currencies: mockSupportedCurrencies as SupportedCurrency[],
			},
			conversionRates: { rates: { USD: USDMock } },
		},
	});

	const inputElement = screen.getByPlaceholderText('0.00');

	fireEvent.wheel(inputElement);

	expect(document.activeElement).not.toBe(inputElement);
});

it('handles the input debounce correctly', async () => {
	jest.useFakeTimers();
	const mockSetCurrencyAmount = jest.fn();
	const mockSetIsLoading = jest.fn();

	renderWithProviders(<CurrencyInput />, {
		preloadedState: {
			selectedCurrency: {
				currency: mockSupportedCurrencies.find(
					({ code }) => code === 'USD'
				) as SupportedCurrency,
			},
			supportedCurrencies: {
				currencies: mockSupportedCurrencies as SupportedCurrency[],
			},
			conversionRates: { rates: { USD: USDMock } },
		},
	});

	const inputElement = screen.getByPlaceholderText('0.00');

	act(() => {
		fireEvent.change(inputElement, { target: { value: '123.45' } });
		expect(screen.queryByText('BAT')).not.toBeInTheDocument();
		jest.advanceTimersByTime(500); // Advance time to trigger the debounce timeout
	});

	await waitFor(() => {
		expect(screen.queryByText('BAT')).not.toBeInTheDocument();
	});
	jest.useRealTimers();
});

/* it("should set loading to true when input amount changes", () => {
  jest.useFakeTimers();

  const mockSetIsLoading = jest.fn();

  renderWithProviders(<CurrencyInput />, {
    preloadedState: {
      selectedCurrency: {
        currency: mockSupportedCurrencies.find(
          ({ code }) => code === "USD"
        ) as SupportedCurrency,
      },
      supportedCurrencies: {
        currencies: mockSupportedCurrencies as SupportedCurrency[],
      },
      conversionRates: { rates: { USD: USDMock } },
    },
  });

  const inputElement = screen.getByPlaceholderText("0.00");

  act(() => {
    fireEvent.change(inputElement, { target: { value: "123.45" } });
    expect(mockSetIsLoading).toHaveBeenCalledWith(true);
    jest.advanceTimersByTime(500); // Advance time to trigger the debounce timeout
  });
  expect(mockSetIsLoading).toHaveBeenCalledWith(false);
}); */
