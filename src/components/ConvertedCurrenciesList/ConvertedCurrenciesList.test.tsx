import "@testing-library/jest-dom/extend-expect"; // Import the toBeVisible matcher
import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../../mocks/mock-store";
import { USDMock, mockSupportedCurrencies } from "../../../mocks/mocks";
import { ConvertedCurrenciesList } from "./ConvertedCurrenciesList";

it("Should render the list of currencies", () => {
  renderWithProviders(<ConvertedCurrenciesList itemsPerPage={100} />, {
    preloadedState: {
      supportedCurrencies: { currencies: mockSupportedCurrencies },
      currencyAmount: { value: 10 },
      conversionRates: { rates: { USD: USDMock } },
    },
  });

  waitFor(() => {
    const currencyCards = screen.getAllByRole("listitem");
    expect(currencyCards).toHaveLength(USDMock.length);
  });
});

it("Should not show the list of currencies when theres no input", () => {
  renderWithProviders(<ConvertedCurrenciesList itemsPerPage={100} />, {
    preloadedState: {
      supportedCurrencies: { currencies: mockSupportedCurrencies },
      conversionRates: { rates: { USD: USDMock } },
    },
  });

  const currencyCards = screen.queryAllByRole("listitem");
  expect(currencyCards).toHaveLength(0);

  const noAmountMessage = screen.getByText(
    "Enter an amount to check the rates."
  );

  expect(noAmountMessage).toBeVisible();
});
