export const ExchangeRateCardSkeleton = () => (
  <>
    <div
      data-testid="conversion-loading-skeleton"
      className="h-3 bg-slate-700 rounded w-48"
    ></div>
    <div className="flex px-3 py-2 mr-5  items-center w-28 text-base">
      <div data-testid="loading-state" className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-700 h-10 w-10"></div>
      </div>
      <div className="ml-3 h-3 bg-slate-700 rounded w-16"></div>
    </div>
  </>
);
