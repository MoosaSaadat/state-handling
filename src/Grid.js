import React, { Component } from "react";
import Box from "./Box";
import "./Grid.css";

class Grid extends Component {
	static defaultProps = {
		numBoxes: 24,
		color: [
			"4F4F4F",
			"75DFE4",
			"E24440",
			"743D95",
			"79D77D",
			"333537",
			"FB710B",
			"2F517A",
			"D1D1D2",
			"EDD559",
			"CF7030",
			"DB9B5B",
			"B5C85C",
			"E9E198",
			"49EDEA",
			"FFBDE5",
			"C5BDFF",
			"DBFFEA",
			"FCFFDB",
			"ECC389",
			"F58235",
			"F5990B",
			"08A5B5",
			"19253D",
			"64A325",
			"FBD674",
			"F73702",
			"7C0907",
			"1D4165",
			"4B3E48"
		]
	};
	render () {
		const boxes = Array.from({
			length: this.props.numBoxes
		}).map((data, idx) => <Box key={idx} color={this.props.color} />);
		return <div className="Grid">{boxes}</div>;
	}
}

export default Grid;
