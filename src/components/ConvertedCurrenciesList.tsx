import { CurrencyData } from "../types";
import { ExchangeRateCard } from "./ExchangeRateCard";

interface ConvertedCurrenciesListProps {
  tickerData: CurrencyData[];
  currencyAmount: number;
  loading: boolean;
}

export const ConvertedCurrenciesList = ({
  tickerData,
  currencyAmount,
  loading,
}: ConvertedCurrenciesListProps) => {
  return (
    <div className="flex justify-center mt-10 p-3 w-full">
      {tickerData.length > 0 && !!currencyAmount ? (
        <div className=" flex flex-col h-[70vh] w-full overflow-auto no-scrollbar ">
          {tickerData.map((currency, index) => (
            <ExchangeRateCard
              key={index}
              ticker={currency.convertTo}
              ask={parseFloat(currency.ask)}
              bid={parseFloat(currency.bid)}
              currencyAmount={currencyAmount}
              loading={loading}
            />
          ))}
        </div>
      ) : (
        "Enter an amount to check the rates."
      )}
    </div>
  );
};
