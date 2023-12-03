import SDK from "@uphold/uphold-sdk-javascript";
import { useEffect, useState } from "react";
import { ConvertedCurrenciesList } from "./components/ConvertedCurrenciesList/ConvertedCurrenciesList";
import { CurrencyInput } from "./components/CurrencyInput/CurrencyInput";
import { Navbar } from "./components/Navbar/Navbar";
import { CurrencyData, SupportedCurrency } from "./types";

const USD = {
  code: "USD",
  features: ["buy", "deposit", "sell", "transfer", "withdraw"],
  formatting: {
    decimal: ".",
    format: "__symbol__ __value__ __code__",
    grouping: ",",
    precision: 2,
  },
  image: "https://cdn.uphold.com/assets/USD.svg",
  name: "US Dollar",
  shortName: "USD",
  status: "open",
  symbol: "$",
  type: "fiat",
} as SupportedCurrency;

const sdk = new SDK({
  baseUrl: "http://api-sandbox.uphold.com",
  clientId: process.env.REACT_APP_SDK_CLIENT_ID ?? "",
  clientSecret: process.env.REACT_APP_SDK_CLIENT_SECRET ?? "",
});

function App() {
  const [currencyAmount, setCurrencyAmount] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState(USD);
  const [supportedCurrencies, setSupportedCurrencies] = useState<
    SupportedCurrency[]
  >([]);
  const [tickerData, setTickerData] = useState<CurrencyData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getSupportedCurrencies = async () => {
    const fullData: SupportedCurrency[] = [];
    let lastAmountOfCurrencies = 150;
    let index = 0;

    while (lastAmountOfCurrencies >= 150) {
      const res = await fetch("/v0/assets", {
        headers: {
          referrerPolicy: "unsafe-url",
          Range: `items=${index * 150}-${index * 150 + (150 - 1)}`,
        },
      });
      const data = await res.json();
      fullData.push(...data);
      lastAmountOfCurrencies = data.length;
      index++;
    }

    console.log(fullData.find((cur) => cur.code === "USD"));
    return fullData;
  };

  const getRates = async () => {
    if (supportedCurrencies.length === 0) {
      const currencies: SupportedCurrency[] = await getSupportedCurrencies();
      setSupportedCurrencies(currencies);
    }

    /* const cachedCurrencyData = localStorage.getItem(selectedCurrency.code);

    if (cachedCurrencyData) {
      const currencyData: CurrencyData[] = JSON.parse(cachedCurrencyData);
      setTickerData(currencyData);
    }
    //if currency is cached no need to set loading
    else if (currencyAmount) {
      setIsLoading(true);
    }

    const newCurrencyData: CurrencyData[] = await sdk.getTicker(
      selectedCurrency.code
    );

    // filtering to get only one-way rates (selected-anything)
    const filteredRates = newCurrencyData.filter(
      (ticker) => ticker.currency === selectedCurrency.code
    );

    if (!cachedCurrencyData) setTickerData(filteredRates);

    localStorage.setItem(selectedCurrency.code, JSON.stringify(filteredRates));

    if (supportedCurrencies.length === 0) {
      const currencies: SupportedCurrency[] = await getSupportedCurrencies();
      setSupportedCurrencies(currencies);
      console.log(currencies.find((cur) => cur.code === "USD"));
    }

    setIsLoading(false); */
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
            supportedCurrencies={supportedCurrencies}
            selectedCurrency={selectedCurrency}
            currencyAmount={currencyAmount}
            loading={isLoading}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
