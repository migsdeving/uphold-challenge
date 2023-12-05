import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { SupportedCurrency } from './supportedCurrencies';

export interface SelectedCurrencyState {
	currency: SupportedCurrency;
}

const initialState: SelectedCurrencyState = {
	currency: {
		code: 'USD',
		features: ['buy', 'deposit', 'sell', 'transfer', 'withdraw'],
		formatting: {
			decimal: '.',
			format: '__symbol__ __value__ __code__',
			grouping: ',',
			precision: 2,
		},
		image: 'https://cdn.uphold.com/assets/USD.svg',
		name: 'US Dollar',
		shortName: 'USD',
		status: 'open',
		symbol: '$',
		type: 'fiat',
	} as SupportedCurrency,
};

export const selectedCurrencySlice = createSlice({
	name: 'selectedCurrency',
	initialState,
	reducers: {
		setSelectedCurrency: (
			currency,
			action: PayloadAction<SupportedCurrency>
		) => {
			currency.currency = action.payload;
		},
	},
});

export const { setSelectedCurrency } = selectedCurrencySlice.actions;

export default selectedCurrencySlice.reducer;
