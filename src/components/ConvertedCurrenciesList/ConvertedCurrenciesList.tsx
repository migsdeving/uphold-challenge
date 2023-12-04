import SDK from "@uphold/uphold-sdk-javascript";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Rate, setConversionRates } from "../../slices/conversionRate";
import { RootState } from "../../store";
import { ExchangeRateCard } from "../ExchangeRateCard/ExchangeRateCard";

const sdk = new SDK({
  baseUrl: "http://api-sandbox.uphold.com",
  clientId: process.env.REACT_APP_SDK_CLIENT_ID ?? "",
  clientSecret: process.env.REACT_APP_SDK_CLIENT_SECRET ?? "",
});

export const ConvertedCurrenciesList = () => {
  const supportedCurrencies = useSelector(
    (state: RootState) => state.supportedCurrencies.currencies
  );
  const currencyAmount = useSelector(
    (state: RootState) => state.currencyAmount.value
  );
  const selectedCurrency = useSelector(
    (state: RootState) => state.selectedCurrency.currency
  );

  const conversionRates = useSelector(
    (state: RootState) => state.conversionRates.rates[selectedCurrency.code]
  );

  const dispatch = useDispatch();

  const fetchRates = async () => {
    const tickers: Rate[] = await sdk.getTicker(selectedCurrency.code);
    const filteredTickers = tickers.filter(
      (ticker) => ticker.currency === selectedCurrency.code
    );
    dispatch(
      setConversionRates({ key: selectedCurrency.code, data: filteredTickers })
    );
  };

  useEffect(() => {
    fetchRates();
  }, [selectedCurrency]);

  return (
    <div className="flex justify-center mt-10 p-3 w-full">
      {supportedCurrencies.length > 0 && !!currencyAmount ? (
        <div className="flex flex-col h-[70vh] w-full overflow-auto no-scrollbar">
          {supportedCurrencies.map((currency, index) => {
            const exchangePairHifen = `${currency.code}-${selectedCurrency.code}`;
            const exchangePairSecondConcat = `${currency.code}${selectedCurrency.code}`;

            const rate = conversionRates?.find(
              (rate) =>
                rate.pair === exchangePairHifen ||
                rate.pair === exchangePairSecondConcat
            );
            return rate ? (
              <ExchangeRateCard key={index} rate={rate} currency={currency} />
            ) : (
              <></>
            );
          })}
        </div>
      ) : (
        "Enter an amount to check the rates."
      )}
    </div>
  );
};
