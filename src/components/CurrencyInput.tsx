import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { CurrencySelector } from "./CurrencySelector";

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
    <div className="flex justify-between bg-[#F5F9FC]  mt-20 rounded-lg	p-3">
      <input
        value={inputAmount}
        onChange={handleAmountChange}
        placeholder="0.00"
        type="number"
        className="focus:border-none text-5xl bg-transparent outline-none appearance-none"
        onWheel={(e) => e.currentTarget.blur()}
      />

      {/*  <select
          value={selectedCurrency}
          className="p-3 rounded-full"
          onChange={(e) => setSelectedCurrency(e.target.value)}
        >
          {supportedCurrencies.map((currency, index) => (
            <option key={index} value={currency}>
              {currency}
            </option>
          ))}
        </select> */}

      <CurrencySelector
        selectedCurrency={selectedCurrency}
        supportedCurrencies={supportedCurrencies}
        onChangeSelection={(selection) => setSelectedCurrency(selection)}
      />
    </div>
  );
};
