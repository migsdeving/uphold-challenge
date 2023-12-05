import { useCallback, useState } from 'react';

interface CurrencyImageProps {
	src: string;
	alt?: string;
}

export const CurrencyImage = ({ src, alt }: CurrencyImageProps) => {
	const [isImageLoading, setIsImageLoading] = useState(true);

	const altText = alt ? { alt: alt } : {};

	const handleImageError = useCallback(
		({ currentTarget }: React.SyntheticEvent<HTMLImageElement, Event>) => {
			currentTarget.onerror = null;
			currentTarget.src = '/assets/Crypto.png';
			setIsImageLoading(false);
		},
		[src]
	);
	return (
		<>
			{isImageLoading && (
				<div
					data-testid="loading-state"
					className="animate-pulse flex space-x-4"
				>
					<div className="rounded-full bg-slate-700 h-10 w-10"></div>
				</div>
			)}
			<img
				className={`${isImageLoading ? 'hidden' : 'block'}`}
				width={40}
				height={40}
				src={src}
				onError={handleImageError}
				{...altText}
				onLoad={() => {
					setIsImageLoading(false);
				}}
			/>
		</>
	);
};
