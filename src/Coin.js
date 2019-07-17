import React, { Component } from "react";
import "./Coin.css";

class Coin extends Component {
	render () {
		return (
			<div id={"coin-img"} className="Coin">
				<img
					src={
						this.props.isFaceUp ? (
							"https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg"
						) : (
							"http://www.pcgscoinfacts.com/UserImages/71009269r.jpg"
						)
					}
					alt={this.props.isFaceUp ? "Coin-Heads-JPG" : "Coin-Tails-JPG"}
				/>
			</div>
		);
	}
}

export default Coin;
