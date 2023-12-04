import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Rate {
  ask: string;
  bid: string;
  currency: string;
  pair: string;
}

export interface ConversionRatesState {
  rates: Record<string, Rate[]>;
}

const initialState: ConversionRatesState = {
  rates: {},
};

export const conversionRatesSlice = createSlice({
  name: "conversionRates",
  initialState,
  reducers: {
    setConversionRates: (
      state,
      action: PayloadAction<{ key: string; data: Rate[] }>
    ) => {
      const { key, data } = action.payload;
      state.rates[key] = data;
    },
  },
});

export const { setConversionRates } = conversionRatesSlice.actions;
export default conversionRatesSlice.reducer;
