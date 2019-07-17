import React, { Component } from "react";
import "./Box.css";

class Box extends Component {
	addHash (colorCode) {
		return "#" + colorCode;
	}
	constructor (props) {
		super(props);
		let idx = Math.floor(Math.random() * this.props.color.length);
		this.state = {
			color: this.addHash(this.props.color[idx])
		};
		this.changeColor = this.changeColor.bind(this);
	}
	changeColor () {
		let newColor;
		do {
			newColor = this.addHash(
				this.props.color[Math.floor(Math.random() * this.props.color.length)]
			);
		} while (newColor === this.state.color);
		this.setState({ color: newColor });
	}
	render () {
		return (
			<div
				className="Box"
				style={{ backgroundColor: this.state.color }}
				onClick={this.changeColor}>
				Click me!
			</div>
		);
	}
}

export default Box;
