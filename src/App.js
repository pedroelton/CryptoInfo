import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";

function App() {
	const [listOfCoins, setListOfCoins] = useState([]);

	//?Refresh the information when the page is refreshed
	useEffect(() => {
		//!fetching the coinstats API
		Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=10").then(
			(response) => {
				setListOfCoins(response.data.coins);
				console.log(response.data);
			}
		);
	}, []);

	return (
		<div className="App">
			<div className="cryptoHeader">
				<h1>Crypto Info</h1>
			</div>
			<div className="cryptoDisplay">
				{/* //!Using Map to loop and display dinamicaly all data of the API */}
				{listOfCoins.map((coin) => {
					return (
						<>
							<img src={coin.icon} alt="Coin Icon" />
							<h2>{coin.name}</h2>
							<h3>Current Price: {coin.price}</h3>
							<p>MarketCap: {coin.marketCap}</p>
							<p>Price change in 1h: {coin.priceChange1h}</p>
							<p>Price change in 1d: {coin.priceChange1d}</p>
							<p>Price change in 1w: {coin.priceChange1w}</p>
							<p>Ticker: {coin.symbol}</p>
							<p>Rank: {coin.rank}</p>
							<p>Volume: {coin.volume}</p>
							<a href={coin.websiteUrl}>
								<small>Website</small>
							</a>
						</>
					);
				})}
			</div>
		</div>
	);
}

export default App;
