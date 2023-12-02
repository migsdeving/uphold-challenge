import { render, screen } from "@testing-library/react";
import { ExchangeRateCard } from "./ExchangeRateCard";

it("Should render the correct values", () => {
  render(
    <ExchangeRateCard
      ticker="TEST"
      ask={10}
      currencyAmount={10}
      loading={false}
    />
  );

  const value = screen.getByText("100");
  const ticker = screen.getByText("TEST");

  expect(ticker).toBeVisible;
  expect(value).toBeVisible;

  const loadingSkeleton = screen.queryByTestId("conversion-loading-skeleton");

  expect(loadingSkeleton).not.toBeInTheDocument();
});
it("Should render loading skeleton", () => {
  render(
    <ExchangeRateCard
      ticker="TEST"
      ask={10}
      currencyAmount={10}
      loading={true}
    />
  );
  const loadingSkeleton = screen.getByTestId("conversion-loading-skeleton");
  expect(loadingSkeleton).toBeVisible();

  const value = screen.queryByText("100");
  const ticker = screen.getByText("TEST");

  expect(ticker).toBeVisible;
  expect(value).not.toBeInTheDocument();
});
