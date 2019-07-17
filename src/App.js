import React from "react";
import CoinFlipper from "./CoinFlipper";
import Grid from "./Grid";
import Hangman from "./hangman/Hangman";
import "./App.css";

function App () {
	return (
		<div className="App">
			<div className="full-screen g1">
				<CoinFlipper />
			</div>
			<div className="full-screen g2">
				<Grid />
			</div>
			<div className="full-screen g3">
				<Hangman />
			</div>
		</div>
	);
}

export default App;
