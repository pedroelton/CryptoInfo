import { useEffect, useState } from "react";
import Axios from "axios";
import Coin from "./components/Coin";
import "./index.css";

function App() {
	const [listOfCoins, setListOfCoins] = useState([]);

	//?Refresh the information when the page is refreshed
	useEffect(() => {
		//?fetching the coinstats API
		Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=10").then(
			(response) => {
				setListOfCoins(response.data.coins);
				console.log(response.data);
			}
		);
	}, []);

	//TODO: Implementar Hovers
	//TODO: Implementar Framer Motion Effects
	//TODO: Implementar Pagination
	//TODO: Implementar Search
	//TODO: Testar outras APIs para outros APPs simples
	//? Tentar implementar Chart?

	return (
		<div className="bg-slate-900 text-slate-400 w-full h-full">
			<div className="flex-1 flex-wrap  lg:px-40 lg:py-10 p-4">
				{/* //?Using Map to loop and display dinamicaly all data of the API */}
				{listOfCoins.map((coin) => {
					return (
						<Coin
							icon={coin.icon}
							name={coin.name}
							price={coin.price}
							marketCap={coin.marketCap}
							priceChange1h={coin.priceChange1h}
							priceChange1d={coin.priceChange1d}
							priceChange1w={coin.priceChange1w}
							symbol={coin.symbol}
							rank={coin.rank}
							volume={coin.volume}
							websiteUrl={coin.websiteUrl}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
