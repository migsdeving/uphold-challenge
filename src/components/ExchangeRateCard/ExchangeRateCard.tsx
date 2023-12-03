import { useEffect, useState } from "react";
import { CurrencyData, SupportedCurrency } from "../../types";
import { CurrencyImage } from "../CurrencyImage/CurrencyImage";
import { ExchangeRateCardSkeleton } from "./ExchangeRateCardSkeleton";

interface ExchangeRateCardProps {
  sdk: any;
  selectedCurrency: SupportedCurrency;
  currency: SupportedCurrency;
  currencyAmount: number;
}
export const ExchangeRateCard = ({
  sdk,
  selectedCurrency,
  currency,
  currencyAmount,
}: ExchangeRateCardProps) => {
  const [currencyData, setCurrencyData] = useState<CurrencyData>();
  const [isLoading, setIsLoading] = useState(false);

  const getCurrencyData = async () => {
    setIsLoading(true);
    try {
      const newCurrencyData: CurrencyData = await sdk.getTicker(
        `${selectedCurrency.code}-${currency.code}`
      );
      setCurrencyData(newCurrencyData);
    } catch (e) {}

    setIsLoading(false);
  };

  useEffect(() => {
    getCurrencyData();
  }, [selectedCurrency]);

  return (
    <>
      {currencyData && currencyData.currency !== selectedCurrency.code ? (
        <div
          role="listitem"
          className="flex justify-between items-center p-3 rounded-md text-xl text-dark-800 hover:bg-slate-100"
        >
          {isLoading ? (
            <ExchangeRateCardSkeleton />
          ) : (
            <>
              <div>{currencyAmount * parseFloat(currencyData?.ask || "0")}</div>
              <div className="flex px-3 py-2 mr-5  items-center w-28 text-base">
                <CurrencyImage src={currency.image} alt={currency.code} />
                <div className="ml-3">{currency.code}</div>
              </div>
            </>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
