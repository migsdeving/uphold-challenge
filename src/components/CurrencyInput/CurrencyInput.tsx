import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrencyAmount } from "../../slices/currencyAmount";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector";

const DEBOUNCE_TIME = 500;

export const CurrencyInput = () => {
  const [inputAmount, setInputAmount] = useState("");
  const dispatch = useDispatch();

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputAmount(e.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(setCurrencyAmount(parseFloat(inputAmount)));
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
      <CurrencySelector />
    </div>
  );
};
