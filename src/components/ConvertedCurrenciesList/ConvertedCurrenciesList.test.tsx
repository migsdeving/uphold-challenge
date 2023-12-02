import "@testing-library/jest-dom/extend-expect"; // Import the toBeVisible matcher
import { render, screen } from "@testing-library/react";
import { USDMock } from "../../mocks";
import { ConvertedCurrenciesList } from "./ConvertedCurrenciesList";

it("Should render the list of currencies", () => {
  render(
    <ConvertedCurrenciesList
      tickerData={USDMock}
      currencyAmount={100}
      loading={false}
    />
  );

  const currencyCards = screen.getAllByRole("listitem");
  expect(currencyCards).toHaveLength(USDMock.length);
});

it("Should not show the list of currencies when theres no input", () => {
  render(
    <ConvertedCurrenciesList
      tickerData={USDMock}
      currencyAmount={0}
      loading={false}
    />
  );

  const currencyCards = screen.queryAllByRole("listitem");
  expect(currencyCards).toHaveLength(0);

  const noAmountMessage = screen.getByText(
    "Enter an amount to check the rates."
  );

  expect(noAmountMessage).toBeVisible();
});
