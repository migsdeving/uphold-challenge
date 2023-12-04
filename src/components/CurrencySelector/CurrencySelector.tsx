// CustomDropdown.tsx
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCurrency } from "../../slices/selectedCurrency";
import { SupportedCurrency } from "../../slices/supportedCurrencies";
import { RootState } from "../../store";
import { CurrencyImage } from "../CurrencyImage/CurrencyImage";
import { ChevronDown } from "../icons/ChevronDown";

export const CurrencySelector = () => {
  const supportedCurrencies = useSelector(
    (state: RootState) => state.supportedCurrencies.currencies
  );

  const selectedCurrency = useSelector(
    (state: RootState) => state.selectedCurrency.currency
  );

  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (currency: SupportedCurrency) => {
    dispatch(setSelectedCurrency(currency));
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
          <div className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300 overflow-y-scroll h-full">
            <div className="">
              {supportedCurrencies
                .filter((currency) => currency.code !== selectedCurrency.code)
                .map((currency, index) => (
                  <div
                    data-testid={`${currency.code}-selector`}
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
        </div>
      )}
    </div>
  );
};
