import { useCallback, useState } from "react";

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
  const [isImageLoading, setIsImageLoading] = useState(true);
  const handleImageError = useCallback(
    ({ currentTarget }: React.SyntheticEvent<HTMLImageElement, Event>) => {
      currentTarget.onerror = null; // prevents looping
      currentTarget.src = "/assets/Crypto.png";
      setIsImageLoading(false);
    },
    []
  );

  return (
    <div className="flex justify-between items-center m-1">
      <div>{currencyAmount * ask}</div>
      <div className="flex justify-between items-center w-28 ">
        {isImageLoading && (
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-700 h-10 w-10"></div>
          </div>
        )}
        <img
          className={`${isImageLoading ? "hidden" : "block"}`}
          src={`/assets/${ticker}.png`}
          onError={handleImageError}
          alt={ticker}
          onLoad={() => {
            setIsImageLoading(false);
          }}
        />

        <div className="ml-2">{ticker}</div>
      </div>
    </div>
  );
};
