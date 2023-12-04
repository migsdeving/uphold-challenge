import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ConvertedCurrenciesList } from "./components/ConvertedCurrenciesList/ConvertedCurrenciesList";
import { CurrencyInput } from "./components/CurrencyInput/CurrencyInput";
import { Navbar } from "./components/Navbar/Navbar";
import { SupportedCurrency, setCurrencies } from "./slices/supportedCurrencies";
import { RootState } from "./store";

function App() {
  const selectedCurrency = useSelector(
    (state: RootState) => state.selectedCurrency.currency
  );
  const supportedCurrencies = useSelector(
    (state: RootState) => state.supportedCurrencies.currencies
  );
  const dispatch = useDispatch();

  const getSupportedCurrencies = async () => {
    const fullData: SupportedCurrency[] = [];
    let lastAmountOfCurrencies = 150;
    let index = 0;

    while (lastAmountOfCurrencies >= 150) {
      try {
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
      } catch {
        lastAmountOfCurrencies = 1;
      }
    }

    return fullData;
  };

  const getRates = async () => {
    if (supportedCurrencies.length <= 1) {
      const currencies: SupportedCurrency[] = await getSupportedCurrencies();
      dispatch(setCurrencies(currencies));
    }
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
          <CurrencyInput />
          <ConvertedCurrenciesList itemsPerPage={30} />
        </div>
      </div>
    </main>
  );
}

export default App;
