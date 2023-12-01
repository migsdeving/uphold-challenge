import SDK from "@uphold/uphold-sdk-javascript";
import { useEffect, useState } from "react";
import { CurrencyInput } from "./components/CurrencyInput";
import { ExchangeRateCard } from "./components/ExchangeRateCard";
import { Navbar } from "./components/Navbar";

type CurrencyData = {
  ask: string;
  bid: string;
  currency: string;
  pair: string;
  convertTo: string;
};

const sdk = new SDK({
  baseUrl: "http://api-sandbox.uphold.com",
  clientId: process.env.REACT_APP_SDK_CLIENT_ID ?? "",
  clientSecret: process.env.REACT_APP_SDK_CLIENT_SECRET ?? "",
});

function App() {
  const [currencyAmount, setCurrencyAmount] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [supportedCurrencies, setSupportedCurrencies] = useState<string[]>([]);
  const [tickerData, setTickerData] = useState<CurrencyData[]>([]);

  const filterAndSetCurrencies = (filteredTickers: CurrencyData[]) => {
    const supportedCurrencies = filteredTickers.map(
      (tickerData) => tickerData.convertTo
    );
    setSupportedCurrencies(supportedCurrencies);
  };

  const getRates = async () => {
    const cachedCurrencyData = localStorage.getItem(selectedCurrency);

    if (cachedCurrencyData) {
      const currencyData: CurrencyData[] = JSON.parse(cachedCurrencyData);
      setTickerData(currencyData);
    }

    const newCurrencyData: CurrencyData[] = await sdk.getTicker(
      selectedCurrency
    );
    // filtering to get only one-way rates (selected-anything)
    const filteredRates = newCurrencyData
      .filter((ticker) => ticker.currency === selectedCurrency)
      .map((ticker) => ({
        ...ticker,
        //inconsistent pair format from the api requires me to clean the data
        convertTo: ticker.pair
          .replace(`-${selectedCurrency}`, "")
          .replace(selectedCurrency, ""),
      }));
    if (!cachedCurrencyData) setTickerData(filteredRates);

    localStorage.setItem(selectedCurrency, JSON.stringify(filteredRates));

    if (supportedCurrencies.length === 0) filterAndSetCurrencies(filteredRates);
  };

  useEffect(() => {
    getRates();
  }, [selectedCurrency]);

  return (
    <main>
      <Navbar />
      <div className="flex  flex-col items-center mt-28">
        <h1 className="text-4xl text-black">Currency Converter</h1>
        <h2 className="mt-10 text-xl w-1/3 text-center text-[#8494A5] font-extralight">
          Receive competitive and transparent pricing with no hidden spreads.
          See how we compare.
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center">
        <CurrencyInput
          selectedCurrency={selectedCurrency}
          setSelectedCurrency={setSelectedCurrency}
          setCurrencyAmount={setCurrencyAmount}
          supportedCurrencies={supportedCurrencies}
        />
        <div className="flex justify-center mt-10">
          {tickerData.length > 0 && !!currencyAmount ? (
            <div className=" flex flex-col h-[70vh] overflow-auto bg-slate-200 p-5">
              {tickerData.map((currency, index) => (
                <ExchangeRateCard
                  key={index}
                  ticker={currency.convertTo}
                  ask={parseFloat(currency.ask)}
                  bid={parseFloat(currency.bid)}
                  currencyAmount={currencyAmount}
                />
              ))}
            </div>
          ) : (
            "Enter an amount to check the rates."
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
