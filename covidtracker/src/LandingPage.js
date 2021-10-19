import CovidDashboard from "./CovidDashboard";

import "./index.css";
const LandingPage = () => {
	return (
		<div className="dashboard-container">
			<main>
				<h1>COVID-19 DASHBOARD</h1>
				{/* <div className="dashboard-wrapper">
					<div className="dashboard-element"> */}

				<CovidDashboard />

				<p className="dashboard-element__para">
					The university is continually monitoring conditions to determine what
					mitigation actions the campus community should take to keep themselves
					and others safer. These conditions contribute to the current campus
					status.
					<br />
					<br />
					The COVID-19 monitor is a dashboard that reflects details about
					current conditions on our campus. The dashboard will be updated with
					the latest information at the end of the day at 5:00PM. University
					leadership uses this information to determine the campus alert level.
				</p>
			</main>
			<section className="guidance-section">
				<img
					src="img/FA-Covid-head.svg"
					alt="person with covid-19 wearing mask"
					className="guidance-section__img"
				/>

				<div className="guidance-section__text">
					<h2>Overall Guidance for Fall 2021</h2>
					<p>
						Based on current conditions, our campus will require face coverings
						to be worn while inside all campus buildings.
						<br /> <br />
						This applies to all individuals - students, faculty, staff, and
						visitors - regardless of vaccination status.
					</p>
				</div>
			</section>
		</div>
	);
};

export default LandingPage;
