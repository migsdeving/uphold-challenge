import SDK from "@uphold/uphold-sdk-javascript";
import { useEffect, useState } from "react";
import { ConvertedCurrenciesList } from "./components/ConvertedCurrenciesList/ConvertedCurrenciesList";
import { CurrencyInput } from "./components/CurrencyInput/CurrencyInput";
import { Navbar } from "./components/Navbar";
import { CurrencyData } from "./types";

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
  const [isLoading, setIsLoading] = useState(false);

  const filterAndSetCurrencies = (filteredTickers: CurrencyData[]) => {
    const supportedCurrencies = filteredTickers.map(
      (tickerData) => tickerData.convertTo
    );
    setSupportedCurrencies(["USD", ...supportedCurrencies]);
  };

  const getRates = async () => {
    const cachedCurrencyData = localStorage.getItem(selectedCurrency);

    if (cachedCurrencyData) {
      const currencyData: CurrencyData[] = JSON.parse(cachedCurrencyData);
      setTickerData(currencyData);
    }
    //if currency is cached no need to set loading
    else if (currencyAmount) {
      setIsLoading(true);
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

    setIsLoading(false);
  };

  useEffect(() => {
    getRates();
  }, [selectedCurrency]);

  return (
    <main>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <div className="flex  flex-col items-center m-10">
          <h1 className="text-4xl text-black">Currency Converter</h1>
          <h2 className="mt-10 text-xl w-2/3 text-center text-[#8494A5] font-extralight">
            Receive competitive and transparent pricing with no hidden spreads.
            See how we compare.
          </h2>
        </div>
        <div className="w-[40vw] ">
          <CurrencyInput
            selectedCurrency={selectedCurrency}
            setSelectedCurrency={setSelectedCurrency}
            setCurrencyAmount={setCurrencyAmount}
            supportedCurrencies={supportedCurrencies}
            setIsLoading={setIsLoading}
          />
          <ConvertedCurrenciesList
            tickerData={tickerData}
            currencyAmount={currencyAmount}
            loading={isLoading}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
