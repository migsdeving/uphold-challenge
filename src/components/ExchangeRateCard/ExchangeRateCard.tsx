import { useSelector } from 'react-redux';
import { Rate } from '../../slices/conversionRate';
import { SupportedCurrency } from '../../slices/supportedCurrencies';
import { RootState } from '../../store';
import { CurrencyImage } from '../CurrencyImage/CurrencyImage';

interface ExchangeRateCardProps {
	currency: SupportedCurrency;
	rate: Rate;
}
export const ExchangeRateCard = ({ currency, rate }: ExchangeRateCardProps) => {
	const currencyAmount = useSelector(
		(state: RootState) => state.currencyAmount.value
	);

	return (
		<div
			data-testid={`${currency.code}-conversion`}
			role="listitem"
			className="flex justify-between items-center p-3 rounded-md text-xl text-dark-800 hover:bg-slate-100"
		>
			<div>{((currencyAmount || 0) * 1) / parseFloat(rate.ask)}</div>
			<div className="flex px-3 py-2 mr-5  items-center w-28 text-base">
				<CurrencyImage src={currency.image} alt={currency.code} />
				<div className="ml-3">{currency.code}</div>
			</div>
		</div>
	);
};
