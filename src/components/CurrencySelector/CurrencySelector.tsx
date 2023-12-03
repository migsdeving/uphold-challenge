// CustomDropdown.tsx
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { SupportedCurrency } from "../../types";
import { CurrencyImage } from "../CurrencyImage/CurrencyImage";
import { ChevronDown } from "../icons/ChevronDown";

interface CurrencySelectorProps {
  selectedCurrency: SupportedCurrency;
  supportedCurrencies: SupportedCurrency[];
  setSelectedCurrency: Dispatch<SetStateAction<SupportedCurrency>>;
}

export const CurrencySelector = ({
  selectedCurrency,
  supportedCurrencies,
  setSelectedCurrency,
}: CurrencySelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (currency: SupportedCurrency) => {
    setSelectedCurrency(currency);
    setIsOpen(false);
  };

  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(e?.target as Node) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [isOpen]);

  /*   const Popup = memo(function Popup({
    supportedCurrencies,
  }: {
    supportedCurrencies: SupportedCurrency[];
  }) {
    return (
      <div
        ref={popupRef}
        className="shadow-2xl rounded-lg no-scrollbar origin-top-right absolute right-0 mt-1 w-40 h-[210px] overflow-auto bg-white z-40"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div className="">
          {supportedCurrencies
            .filter((currency) => currency.code !== selectedCurrency.code)
            .map((currency, index) => (
              <div
                key={index}
                className="flex flex-row px-3 py-2 m-1 rounded-md items-center cursor-pointer hover:bg-slate-200"
                role="menuitem"
                onClick={() => handleSelect(currency)}
              >
                <CurrencyImage src={currency.image} />
                <span className="ml-3">{currency.code}</span>
              </div>
            ))}
        </div>
      </div>
    );
  }); */

  return (
    <div className="relative">
      <div>
        <button
          type="button"
          role="button"
          className="w-40 p-3 bg-white rounded-full flex items-center justify-around hover:bg-slate-100"
          aria-haspopup="true"
          aria-expanded={isOpen}
          onClick={(e) => {
            setIsOpen(!isOpen);
            e.stopPropagation();
          }}
        >
          <CurrencyImage src={selectedCurrency.image} />
          {selectedCurrency.code}
          <ChevronDown
            className={` transition ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      </div>
      {isOpen && (
        <div
          ref={popupRef}
          className="shadow-2xl rounded-lg no-scrollbar origin-top-right absolute right-0 mt-1 w-40 h-[210px] overflow-auto bg-white z-40"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="">
            {supportedCurrencies
              .filter((currency) => currency.code !== selectedCurrency.code)
              .map((currency, index) => (
                <div
                  key={index}
                  className="flex flex-row px-3 py-2 m-1 rounded-md items-center cursor-pointer hover:bg-slate-200"
                  role="menuitem"
                  onClick={() => handleSelect(currency)}
                >
                  <CurrencyImage src={currency.image} />
                  <span className="ml-3">{currency.code}</span>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
