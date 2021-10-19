import React from "react";
import numeral from "numeral";

function Cards(props) {
	// prettyNum uses the numeral package to format numbers
	const prettyNum = (stat) =>
		stat ? `+${numeral(stat).format("0.0a")}` : "+0";

	return (
		<div className="cards">
			<div className="cards__info">
				<p className="cards__headline">
					Covid Cases in {props.yourState.state}
				</p>
				<p className="cards__data">{prettyNum(props.yourState.cases)}</p>
			</div>
			<div className="cards__info">
				<p className="cards__headline">Recovered: </p>
				<p className="cards__data">{prettyNum(props.yourState.recovered)}</p>
			</div>
			<div className="cards__info">
				<p className="cards__headline">Deaths: </p>
				<p className="cards__data">{prettyNum(props.yourState.deaths)}</p>
			</div>
			<div className="cards__info">
				<p className="cards__headline">Currently Infected: </p>
				<p className="cards__data">{prettyNum(props.yourState.active)}</p>

				<br />
			</div>
		</div>
	);
}

export default Cards;
