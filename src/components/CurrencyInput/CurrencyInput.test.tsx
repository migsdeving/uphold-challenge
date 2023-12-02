import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { supportedCurrencies } from "../../mocks";
import { CurrencyInput } from "./CurrencyInput";

it("Input field updates value when the user types", () => {
  render(
    <CurrencyInput
      selectedCurrency="USD"
      supportedCurrencies={supportedCurrencies}
      setSelectedCurrency={() => undefined}
      setCurrencyAmount={() => undefined}
      setIsLoading={() => undefined}
    />
  );

  const inputElement = screen.getByPlaceholderText("0.00");
  expect(inputElement).toBeVisible();

  fireEvent.change(inputElement, { target: { value: "123.45" } });

  expect(inputElement).toHaveValue(123.45);
});

it("handles the input debounce correctly", async () => {
  jest.useFakeTimers();
  const mockSetCurrencyAmount = jest.fn();
  const mockSetIsLoading = jest.fn();

  render(
    <CurrencyInput
      selectedCurrency="USD"
      supportedCurrencies={supportedCurrencies}
      setSelectedCurrency={() => undefined}
      setCurrencyAmount={mockSetCurrencyAmount}
      setIsLoading={mockSetIsLoading}
    />
  );

  const inputElement = screen.getByPlaceholderText("0.00");

  act(() => {
    fireEvent.change(inputElement, { target: { value: "123.45" } });
    expect(mockSetCurrencyAmount).not.toHaveBeenCalled();
    jest.advanceTimersByTime(500); // Advance time to trigger the debounce timeout
  });

  await waitFor(() => {
    expect(mockSetCurrencyAmount).toHaveBeenCalledWith(123.45);
  });
  jest.useRealTimers();
});

it("should set loading to true when input amount changes", () => {
  jest.useFakeTimers();

  const mockSetIsLoading = jest.fn();

  render(
    <CurrencyInput
      selectedCurrency="USD"
      supportedCurrencies={supportedCurrencies}
      setSelectedCurrency={() => undefined}
      setCurrencyAmount={() => undefined}
      setIsLoading={mockSetIsLoading}
    />
  );

  const inputElement = screen.getByPlaceholderText("0.00");

  act(() => {
    fireEvent.change(inputElement, { target: { value: "123.45" } });
    expect(mockSetIsLoading).toHaveBeenCalledWith(true);
    jest.advanceTimersByTime(500); // Advance time to trigger the debounce timeout
  });
  expect(mockSetIsLoading).toHaveBeenCalledWith(false);
});
