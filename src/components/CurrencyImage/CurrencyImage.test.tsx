/* import { render, screen } from "@testing-library/react";
import { CurrencyImage } from "./CurrencyImage";

it("Hides image while loading", () => {
  render(<CurrencyImage src="/assets/noImage.png" alt="Currency" />);

  const loadingState = screen.getByTestId("loading-state");
  expect(loadingState).toBeInTheDocument();

  const image = screen.getByRole("img", { hidden: true });
  expect(image).toBeInTheDocument();
});
 */
