import SDK from "@uphold/uphold-sdk-javascript";
import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import { ExchangeRateCard } from "./components/ExchangeRateCard";

type TickerData = {
  ask: string;
  bid: string;
  currency: string;
  pair: string;
};

const sdk = new SDK({
  baseUrl: "http://api-sandbox.uphold.com",
  clientId: process.env.REACT_APP_SDK_CLIENT_ID ?? "",
  clientSecret: process.env.REACT_APP_SDK_CLIENT_SECRET ?? "",
});

function App() {
  const [currencyAmount, setCurrencyAmount] = useState(0);
  const [inputAmount, setInputAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("AXL");
  const [supportedCurrencies, setSupportedCurrencies] = useState<string[]>([]);
  const [tickerData, setTickerData] = useState<TickerData[]>([]);

  const filterAndSetCurrencies = (filteredTickers: TickerData[]) => {
    console.log("setting currencies");
    //inconsistent pair format from the api requires me to clean the data
    const supportedCurrencies = filteredTickers
      .map((tickerData) => tickerData.pair)
      .map((item) =>
        item.replace(`-${selectedCurrency}`, "").replace(selectedCurrency, "")
      );

    setSupportedCurrencies(supportedCurrencies);
  };

  const fetchPairs = async () => {
    const allTickers: TickerData[] = await sdk.getTicker(selectedCurrency);

    // filtering to get only one-way rates (selected-anything)
    const filteredTickers = allTickers.filter(
      (ticker) => ticker.currency === selectedCurrency
    );

    if (supportedCurrencies.length === 0)
      filterAndSetCurrencies(filteredTickers);

    setTickerData(filteredTickers);
  };

  useEffect(() => {
    fetchPairs();
  }, [selectedCurrency]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrencyAmount(parseFloat(inputAmount));
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [inputAmount]);

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputAmount(e.target.value);
  };
  return (
    <div className="flex justify-center">
      <div className="w-[70vw] h-[80vh] mt-32 bg-gray-400 h-max-[80vh]">
        <div className="flex justify-center">
          <input
            value={inputAmount}
            onChange={handleAmountChange}
            type="number"
            style={{
              margin: 30,
            }}
          />
          <select
            value={selectedCurrency}
            style={{
              margin: 30,
            }}
            onChange={(e) => setSelectedCurrency(e.target.value)}
          >
            {supportedCurrencies.map((currency, index) => (
              <option key={index} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-center ">
          <div className="w-1/3 flex flex-col h-[70vh] overflow-auto bg-slate-200 p-5">
            {tickerData.map((currency) => (
              <ExchangeRateCard
                ticker={currency.pair
                  .replace(`-${selectedCurrency}`, "")
                  .replace(selectedCurrency, "")}
                ask={parseFloat(currency.ask)}
                bid={parseFloat(currency.bid)}
                currencyAmount={currencyAmount}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
