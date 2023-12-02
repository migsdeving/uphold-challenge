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
  setSelectedCurrency: Dispatch<SetStateAction<string>>;
  supportedCurrencies: string[];
  setCurrencyAmount: Dispatch<SetStateAction<number>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const DEBOUNCE_TIME = 500;

export const CurrencyInput = ({
  selectedCurrency,
  supportedCurrencies,
  setSelectedCurrency,
  setCurrencyAmount,
  setIsLoading,
}: CurrencyInputProps) => {
  const [inputAmount, setInputAmount] = useState("");
  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputAmount(e.target.value);
  };

  useEffect(() => {
    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      setCurrencyAmount(parseFloat(inputAmount));
      setIsLoading(false);
    }, DEBOUNCE_TIME);
    return () => clearTimeout(timeoutId);
  }, [inputAmount]);

  return (
    <div className="flex justify-between bg-[#F5F9FC] rounded-lg p-3 w-full">
      <input
        value={inputAmount}
        onChange={handleAmountChange}
        placeholder="0.00"
        type="number"
        className="focus:border-none text-5xl bg-transparent outline-none appearance-none"
        onWheel={(e) => e.currentTarget.blur()}
      />
      <CurrencySelector
        selectedCurrency={selectedCurrency}
        supportedCurrencies={supportedCurrencies}
        onChangeSelection={(selection) => setSelectedCurrency(selection)}
      />
    </div>
  );
};
