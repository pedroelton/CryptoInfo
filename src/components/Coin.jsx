function Coin({
	icon,
	name,
	price,
	marketCap,
	priceChange1h,
	priceChange1d,
	priceChange1w,
	symbol,
	rank,
	volume,
	websiteUrl,
}) {
	return (
		<div className="w-auto p-4 m-4 border-[1px] border-slate-700 rounded-lg bg-slate-800 flex justify-between lg:flex-row flex-col shadow-lg">
			<div className="flex text-2xl items-start flex-col justify-center mb-5 lg:mb-0">
				<div className="flex justify-center lg:items-start items-center gap-4 w-full lg:flex-row flex-col">
					<div className="h-full flex items-center">
						<h3>#{rank}</h3>
					</div>

					<div className="h-full flex items-center lg:p-4">
						<img src={icon} alt="Coin Icon" className="m-2 w-16" />
					</div>
					<div className="flex justify-between lg:items-start items-center w-full gap-2 flex-col">
						<h2 className="text-white">
							{name} <span>({symbol})</span>{" "}
						</h2>
						<h3 className="text-lg text-slate-300">US$ {price}</h3>
						<p>{priceChange1h}%</p>
					</div>
				</div>
			</div>

			<div className="flex justify-center items-center gap-2 flex-col my-5 lg:my-0">
				<p className="font-bold text-slate-300">Volume</p>
				<p> US$ {volume}</p>
				<p className="font-bold text-slate-300">MarketCap</p>
				<p>US${marketCap}</p>
			</div>

			<div className="flex justify-center items-center gap-4 flex-col my-5 lg:my-0">
				<h3 className="font-bold text-slate-300">Price Change</h3>
				<div className="flex justify-between items-center gap-4">
					<p>1h: {priceChange1h}%</p>
					<p>1d: {priceChange1d}%</p>
					<p>1w: {priceChange1w}%</p>
				</div>
				<a href={websiteUrl} className="font-bold text-orange-400">
					<p>Website</p>
				</a>
			</div>
		</div>
	);
}

export default Coin;
