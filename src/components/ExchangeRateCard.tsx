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
        <img
          src={`/assets/${ticker}.png`}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = "/assets/Crypto.png";
          }}
        />
        <div className="ml-2">{ticker}</div>
      </div>
    </div>
  );
};
