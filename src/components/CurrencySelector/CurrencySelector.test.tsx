import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Dispatch, SetStateAction } from "react";
import { supportedCurrencies } from "../../mocks";
import { CurrencySelector } from "./CurrencySelector";

it("Should show USD by default", () => {
  render(
    <CurrencySelector
      supportedCurrencies={supportedCurrencies}
      setSelectedCurrency={
        (() => undefined) as Dispatch<SetStateAction<string>>
      }
    />
  );

  const selectButton = screen.getByRole("button");
  expect(selectButton).toBeVisible();
  expect(selectButton.textContent).toBe("USD");
});
it("Should open/close the select menu when clicking the button", () => {
  render(
    <CurrencySelector
      supportedCurrencies={supportedCurrencies}
      setSelectedCurrency={
        (() => undefined) as Dispatch<SetStateAction<string>>
      }
    />
  );

  const selectButton = screen.getByRole("button");
  expect(selectButton).toBeVisible();

  userEvent.click(selectButton);

  const selectMenu = screen.getByRole("menu");
  expect(selectMenu).toBeVisible();

  userEvent.click(selectButton);

  expect(selectMenu).not.toBeInTheDocument();
});
it("Should close the select menu when clicking outside it", () => {
  render(
    <CurrencySelector
      supportedCurrencies={supportedCurrencies}
      setSelectedCurrency={
        (() => undefined) as Dispatch<SetStateAction<string>>
      }
    />
  );

  const selectButton = screen.getByRole("button");
  expect(selectButton).toBeVisible();

  console.log(selectButton.textContent);

  userEvent.click(selectButton);

  const selectMenu = screen.getByRole("menu");
  expect(selectMenu).toBeVisible();

  userEvent.click(document.body);

  expect(selectMenu).not.toBeInTheDocument();
});
it("Should change the displayed currency when a different one is selected", () => {
  let selectedCurrency = "USD";

  const component = (
    <CurrencySelector
      selectedCurrency={selectedCurrency}
      supportedCurrencies={supportedCurrencies}
      setSelectedCurrency={
        ((value: string) => (selectedCurrency = value)) as Dispatch<
          SetStateAction<string>
        >
      }
    />
  );

  const { rerender } = render(
    <CurrencySelector
      selectedCurrency={selectedCurrency}
      supportedCurrencies={supportedCurrencies}
      setSelectedCurrency={
        ((value: string) => (selectedCurrency = value)) as Dispatch<
          SetStateAction<string>
        >
      }
    />
  );

  const selectButton = screen.getByRole("button");
  expect(selectButton).toBeVisible();
  expect(selectButton.textContent).toBe("USD");

  userEvent.click(selectButton);

  const selectMenu = screen.getByRole("menu");
  expect(selectMenu).toBeVisible();

  const btcOption = screen.getByText("BTC");
  userEvent.click(btcOption);

  expect(selectMenu).not.toBeInTheDocument();

  rerender(
    <CurrencySelector
      selectedCurrency={selectedCurrency}
      supportedCurrencies={supportedCurrencies}
      setSelectedCurrency={
        ((value: string) => (selectedCurrency = value)) as Dispatch<
          SetStateAction<string>
        >
      }
    />
  );
  expect(selectButton.textContent).toBe("BTC");
});
it("Should render every supported currency on the select menu", () => {
  render(
    <CurrencySelector
      supportedCurrencies={supportedCurrencies}
      setSelectedCurrency={
        (() => undefined) as Dispatch<SetStateAction<string>>
      }
    />
  );

  const selectButton = screen.getByRole("button");
  expect(selectButton).toBeVisible();

  userEvent.click(selectButton);

  const selectMenu = screen.getByRole("menu");
  expect(selectMenu).toBeVisible();

  supportedCurrencies
    .filter((currency) => currency !== "USD")
    .forEach((currency) => {
      expect(selectMenu).toHaveTextContent(currency);
    });
});
//should show all the supported currencies
