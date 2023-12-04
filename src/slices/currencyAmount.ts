import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface CurrencyAmountState {
  value: number | undefined;
}

const initialState: CurrencyAmountState = {
  value: undefined,
};

export const currencyAmountSlice = createSlice({
  name: "currencyAmount",
  initialState,
  reducers: {
    setCurrencyAmount: (amount, action: PayloadAction<number>) => {
      amount.value = action.payload;
    },
  },
});

export const { setCurrencyAmount } = currencyAmountSlice.actions;

export default currencyAmountSlice.reducer;
