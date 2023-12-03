import SDK from "@uphold/uphold-sdk-javascript";
import { SupportedCurrency } from "../../types";
import { ExchangeRateCard } from "../ExchangeRateCard/ExchangeRateCard";

interface ConvertedCurrenciesListProps {
  selectedCurrency: SupportedCurrency;
  supportedCurrencies: SupportedCurrency[];
  currencyAmount: number;
  loading: boolean;
}

const sdk = new SDK({
  baseUrl: "http://api-sandbox.uphold.com",
  clientId: process.env.REACT_APP_SDK_CLIENT_ID ?? "",
  clientSecret: process.env.REACT_APP_SDK_CLIENT_SECRET ?? "",
});

export const ConvertedCurrenciesList = ({
  supportedCurrencies,
  selectedCurrency,
  currencyAmount,
  loading,
}: ConvertedCurrenciesListProps) => {
  return (
    <div className="flex justify-center mt-10 p-3 w-full">
      {supportedCurrencies.length > 0 && !!currencyAmount ? (
        <div className="flex flex-col h-[70vh] w-full overflow-auto no-scrollbar">
          {supportedCurrencies.map((currency, index) => (
            <ExchangeRateCard
              key={index}
              sdk={sdk}
              selectedCurrency={selectedCurrency}
              currency={currency}
              currencyAmount={currencyAmount}
            />
          ))}
        </div>
      ) : (
        "Enter an amount to check the rates."
      )}
    </div>
  );
};
