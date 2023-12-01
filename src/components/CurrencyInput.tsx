import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface CurrencyInputProps {
  selectedCurrency: string;
  supportedCurrencies: string[];
  setSelectedCurrency: Dispatch<SetStateAction<string>>;
  setCurrencyAmount: Dispatch<SetStateAction<number>>;
}

const DEBOUNCE_TIME = 500;

export const CurrencyInput = ({
  selectedCurrency,
  supportedCurrencies,
  setSelectedCurrency,
  setCurrencyAmount,
}: CurrencyInputProps) => {
  const [inputAmount, setInputAmount] = useState("");
  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputAmount(e.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrencyAmount(parseFloat(inputAmount));
    }, DEBOUNCE_TIME);
    return () => clearTimeout(timeoutId);
  }, [inputAmount]);
  return (
    <div className="flex justify-center">
      <input
        value={inputAmount}
        onChange={handleAmountChange}
        type="number"
        className="m-7"
      />
      <select
        value={selectedCurrency}
        className="m-7"
        onChange={(e) => setSelectedCurrency(e.target.value)}
      >
        {supportedCurrencies.map((currency, index) => (
          <option key={index} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};
