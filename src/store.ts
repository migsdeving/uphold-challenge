import {
  PreloadedState,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import conversionRatesReducer from "./slices/conversionRate";
import currencyAmountReducer from "./slices/currencyAmount";
import selectedCurrencyReducer from "./slices/selectedCurrency";
import supportedCurrenciesReducer from "./slices/supportedCurrencies";

const rootReducer = combineReducers({
  supportedCurrencies: supportedCurrenciesReducer,
  selectedCurrency: selectedCurrencyReducer,
  currencyAmount: currencyAmountReducer,
  conversionRates: conversionRatesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];
export type AppStore = ReturnType<typeof setupStore>;
