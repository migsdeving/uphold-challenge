import { configureStore } from "@reduxjs/toolkit";
import conversionRatesReducer from "./slices/conversionRate";
import currencyAmountReducer from "./slices/currencyAmount";
import selectedCurrencyReducer from "./slices/selectedCurrency";
import supportedCurrenciesReducer from "./slices/supportedCurrencies";

export const store = configureStore({
  reducer: {
    supportedCurrencies: supportedCurrenciesReducer,
    selectedCurrency: selectedCurrencyReducer,
    currencyAmount: currencyAmountReducer,
    conversionRates: conversionRatesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
