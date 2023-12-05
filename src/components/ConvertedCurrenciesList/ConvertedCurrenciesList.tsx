import { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setConversionRates } from '../../slices/conversionRate';
import { SupportedCurrency } from '../../slices/supportedCurrencies';
import { RootState } from '../../store';
import { sdk } from '../../utils';
import { ExchangeRateCard } from '../ExchangeRateCard/ExchangeRateCard';
import { ExchangeRateCardSkeleton } from '../ExchangeRateCard/ExchangeRateCardSkeleton';

interface ConvertedCurrenciesListProps {
	itemsPerPage: number;
}

export const ConvertedCurrenciesList = ({
	itemsPerPage,
}: ConvertedCurrenciesListProps) => {
	const [page, setPage] = useState(1);
	const listInnerRef = useRef<HTMLDivElement>(null);

	const supportedCurrencies = useSelector(
		(state: RootState) => state.supportedCurrencies.currencies
	);
	const currencyAmount = useSelector(
		(state: RootState) => state.currencyAmount.value
	);
	const selectedCurrency = useSelector(
		(state: RootState) => state.selectedCurrency.currency
	);

	const conversionRates = useSelector(
		(state: RootState) => state.conversionRates.rates[selectedCurrency.code]
	);

	const dispatch = useDispatch();

	const [isLoading, setIsLoading] = useState(false);

	const getCurrencyRate = (currency: SupportedCurrency) => {
		const exchangePairHifen = `${currency.code}-${selectedCurrency.code}`;
		const exchangePairSecondConcat = `${currency.code}${selectedCurrency.code}`;

		const rate = conversionRates?.find(
			(rate) =>
				rate.pair === exchangePairHifen ||
				rate.pair === exchangePairSecondConcat
		);
		return rate;
	};

	const fetchRates = async () => {
		if (!conversionRates && currencyAmount) setIsLoading(true);

		try {
			const tickers: any[] = await sdk.getTicker(selectedCurrency.code);

			const filteredTickers = tickers.filter(
				(ticker) => ticker.currency === selectedCurrency.code
			);
			dispatch(
				setConversionRates({
					key: selectedCurrency.code,
					data: filteredTickers,
				})
			);
		} catch (e) {}
		setIsLoading(false);
	};

	useEffect(() => {
		fetchRates();
		setPage(1);
	}, [selectedCurrency]);

	const handleInfiniteLoading = (e: any) => {
		const debounceDelay = 500;

		if ((handleInfiniteLoading as any).timer) {
			clearTimeout((handleInfiniteLoading as any).timer);
		}

		(handleInfiniteLoading as any).timer = setTimeout(() => {
			const bottom =
				e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 10;

			if (bottom) {
				setPage((prev: number) => prev + 1);
			}
		}, debounceDelay);
	};

	const isListFull = useMemo(
		() => page * itemsPerPage > supportedCurrencies.length,
		[page]
	);

	return (
		<div className="flex justify-center mt-10 p-3 w-full">
			{isLoading ? (
				<ExchangeRateCardSkeleton />
			) : supportedCurrencies.length > 0 && !!currencyAmount ? (
				<div className="flex flex-col h-[80vh] w-full overflow-auto">
					<div
						role="list"
						onScroll={handleInfiniteLoading}
						ref={listInnerRef}
						className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300 overflow-y-scroll h-full"
					>
						{supportedCurrencies
							.slice(0, page * itemsPerPage)
							.map((currency, index) => {
								const rate = getCurrencyRate(currency);
								return rate ? (
									<ExchangeRateCard
										key={index}
										rate={rate}
										currency={currency}
									/>
								) : (
									<></>
								);
							})}
						{!isListFull ? <ExchangeRateCardSkeleton /> : <></>}
					</div>
				</div>
			) : (
				'Enter an amount to check the rates.'
			)}
		</div>
	);
};
