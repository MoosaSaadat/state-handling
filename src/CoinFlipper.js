import React, { Component } from "react";
import Coin from "./Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
	constructor (props) {
		super();
		this.state = {
			currFace: true,
			headsCount: 0,
			tailsCount: 0
		};
		this.flipCoin = this.flipCoin.bind(this);
	}
	flipCoin () {
		let newFace = Math.floor(Math.random() * 2);
		this.setState({ currFace: newFace === 1 ? true : false });
		if (newFace === 1) {
			this.setState((st) => {
				return { headsCount: st.headsCount + 1 };
			});
		}
		else {
			this.setState((st) => {
				return { tailsCount: st.tailsCount + 1 };
			});
		}
		// console.log(newFace);
		// console.log(this.state.currFace);
		document.getElementById("coin-img").classList.add("rotate");
		setTimeout(function () {
			document.getElementById("coin-img").classList.remove("rotate");
		}, 500);
	}
	render () {
		return (
			<div className="CoinFlipper">
				<Coin isFaceUp={this.state.currFace} />
				<h1>You have got a {this.state.currFace ? "Heads" : "Tails"}</h1>
				<button onClick={this.flipCoin}>Flip Coin!</button>
				<h3>Total Count:</h3>
				<h3>Heads: {this.state.headsCount}</h3>
				<h3>Tails: {this.state.tailsCount}</h3>
			</div>
		);
	}
}

export default CoinFlipper;
