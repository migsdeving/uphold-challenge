import { CurrencyImage } from "./CurrencyImage";

interface ExchangeRateCardProps {
  ticker: string;
  bid: number;
  ask: number;
  currencyAmount: number;
  loading: boolean;
}
export const ExchangeRateCard = ({
  ticker,
  bid,
  ask,
  currencyAmount,
  loading,
}: ExchangeRateCardProps) => {
  return (
    <div className="flex justify-between items-center p-3 rounded-md text-xl text-dark-800 hover:bg-slate-100">
      {loading ? (
        <div className="h-3 bg-slate-700 rounded w-48"></div>
      ) : (
        <div>{currencyAmount * ask}</div>
      )}
      <div className="flex px-3 py-2 mr-5  items-center w-28 text-base	">
        <CurrencyImage src={`/assets/${ticker}.png`} alt={ticker} />
        <div className="ml-3">{ticker}</div>
      </div>
    </div>
  );
};
