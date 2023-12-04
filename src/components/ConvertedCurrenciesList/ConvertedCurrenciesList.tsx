import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setConversionRates } from "../../slices/conversionRate";
import { SupportedCurrency } from "../../slices/supportedCurrencies";
import { RootState } from "../../store";
import { sdk } from "../../utils";
import { ExchangeRateCard } from "../ExchangeRateCard/ExchangeRateCard";
import { ExchangeRateCardSkeleton } from "../ExchangeRateCard/ExchangeRateCardSkeleton";

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

  const [isLoading, setIsLoading] = useState(false);

  const getCurrencyRate = (currency: SupportedCurrency) => {
    const exchangePairHifen = `${currency.code}-${selectedCurrency.code}`;
    const exchangePairSecondConcat = `${currency.code}${selectedCurrency.code}`;

    const rate = conversionRates?.find(
      (rate) =>
        rate.pair === exchangePairHifen ||
        rate.pair === exchangePairSecondConcat
    );
    return rate;
  };

  const fetchRates = async () => {
    if (!conversionRates && currencyAmount) setIsLoading(true);

    try {
      const tickers: any[] = await sdk.getTicker(selectedCurrency.code);

      const filteredTickers = tickers.filter(
        (ticker) => ticker.currency === selectedCurrency.code
      );
      dispatch(
        setConversionRates({
          key: selectedCurrency.code,
          data: filteredTickers,
        })
      );
    } catch (e) {}
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRates();
  }, [selectedCurrency]);

  return (
    <div className="flex justify-center mt-10 p-3 w-full">
      {isLoading ? (
        <ExchangeRateCardSkeleton />
      ) : supportedCurrencies.length > 0 && !!currencyAmount ? (
        <div className="flex flex-col h-[70vh] w-full overflow-auto">
          <div className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300 overflow-y-scroll h-full">
            {supportedCurrencies.map((currency, index) => {
              const rate = getCurrencyRate(currency);
              return rate ? (
                <ExchangeRateCard key={index} rate={rate} currency={currency} />
              ) : (
                <></>
              );
            })}
          </div>
        </div>
      ) : (
        "Enter an amount to check the rates."
      )}
    </div>
  );
};
