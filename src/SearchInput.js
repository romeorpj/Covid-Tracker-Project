import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import axios from "axios";

function SearchInput() {
	const [location, setLocation] = useState("");
	const [stateObj, setStateObj] = useState("");

	useEffect(() => {
		axios
			.get(`https://disease.sh/v3/covid-19/states/${location}`)
			.then((res) => {
				setStateObj(res.data);
				console.log(stateObj);
			})
			.catch((err) => {
				console.log(`${err}`);
			});
	}, [location, stateObj]);

	// const onSubmit = (e) => {
	// 	e.preventDefault();
	// 	if (!location || location === "") return;

	// 	// console.log(location);
	// };
	return (
		<div className="search-inputs">
			<form>
				<label htmlFor="citySearch" className="search__labels">
					Enter State:
				</label>
				<input
					type="search"
					name="stateSearch"
					id="stateSearch"
					className="inputs"
					placeholder="Required*"
					required
					value={location}
					onChange={(e) => setLocation(e.target.value)}
				/>
				{/* <button className="search-btn" onClick={onSubmit}>
					Search
				</button> */}
			</form>

			<hr />
			<h2 className="state-callout">{stateObj.state} Coronavirus</h2>
			<Cards yourState={stateObj} />
			{/* <Cards stateName={singleState} /> */}
		</div>
	);
}

export default SearchInput;
