import { CurrencyImage } from "./CurrencyImage";

interface ExchangeRateCardProps {
  ticker: string;
  bid: number;
  ask: number;
  currencyAmount: number;
}

export const ExchangeRateCard = ({
  ticker,
  bid,
  ask,
  currencyAmount,
}: ExchangeRateCardProps) => {
  return (
    <div className="flex justify-between items-center m-1">
      <div>{currencyAmount * ask}</div>
      <div className="flex justify-between items-center w-28 ">
        <CurrencyImage src={`/assets/${ticker}.png`} alt={ticker} />
        <div className="ml-2">{ticker}</div>
      </div>
    </div>
  );
};
