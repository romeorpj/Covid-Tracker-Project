import React from "react";
import "./Testing.css";
import doctor from "./images/—Pngtree—black man black doctor doctors_3921468 1.png";
import couple from "./images/college-couple.png";

function Testing() {
	return (
		<>
			<main>
				<div className="testing-section" />
				<div className="testing-header">
					<h1 className="covid-label">COVID-19 TRACKER</h1>
				</div>
				<h3 className="testing-requirement">Testing Requirements</h3>
				<p className="test-sub">
					Testing is available to students, faculty, and staff at the testing
					facility in the University Center.
				</p>
				<ul>
					Unvaccinated students, faculty, and staff with approved religious or
					medical exemptions :{" "}
					<span>
						testing is required twice per week with 48 hours between two tests
					</span>
					.
				</ul>
				<ul>
					Community members who are identified as close contacts of someone
					recently tested positive for COVID-19:{" "}
					<span>testing is required 3 to 5 days post exposure</span>.
				</ul>

				<div className="location-section">
					<h3 className="location-heading">Testing Location</h3>
					<img className="doctor-img" src={doctor} alt="doctor"/>
					<p className="location-sub">
						Testing is ongoing throughout the semester. Testing will occur every
						from 8:00AM - 6:00PM. <span>Walk-in only.</span>Please follow the
						guidelines below when you come in for testing:
					</p>
					<ul>
						Do not eat, drink, chew, smoke, or vape one hour before testing.
					</ul>
					<ul>
						Please bring a smartphone or tablet to complete all forms and
						documents.
					</ul>
					<ul>
						Tests taken before 4:00PM should be received the same evening.
					</ul>
					<ul>Tests taken after 4:00PM will be received the next day.</ul>
				</div>

				<div className="vaccination-section">
					<div className="vaccination-header" />
					<h1 className="vaccine-label">VACCINATION STATUS</h1>
				</div>
				<div className="vaccine-requirement">
					<h3 className="vaccine-sub">Vaccination Requirement</h3>
					<p className="vaccine-info">
						After considerable research and consultation with public health
						experts, our college is requiring all students and employees to
						complete COVID-19 vaccinations for the 2021-2022 academic year.
						<br></br>
						<br></br>
						Our college's decision is aligned with the recommendations of teh
						American College Health Association, which issued a{" "}
						<span>
							statement recognizing that comprenhensive COVID-19 vaccination
						</span>{" "}
						is the most effective way for institutition of higher education to
						return to a safe, robust, on-campus experience.{" "}
					</p>

					<div className="buttons" />
					<button className="clinic">Find a Vaccination Clinic Near You</button>
					<button className="campus">Get Vaccinated on Campus</button>
				</div>

				<div className="proof-section">
					<h3 className="proof-heading">How to Submit Proof of Vaccination</h3>
					<p className="vaccination-proof">
						Proof of one doses of the Johnson & Johnson Janssen or two doses of
						the Moderna or Pfizer vaccine was due by{" "}
						<span>August 30, 2021</span>, for all students, faculty, and staff.
						If you have not yet submitted proof of your completed vaccination
						series, please contact <span> health@college.edu </span> or{" "}
						<span> hr@college.edu </span>
						(faculty and staff) immediately.
					</p>

					<h3 className="vaccine-doc">Vaccination Document</h3>
					<img className="couple" src={couple} alt="college couple"/>
					<p className="vaccination-info">
						In order to be considered fully vaccinated, individuals should have
						obtained complete immunization (one-shot dose or second shot of two
						shot dose) by the August 13, deadline.
						<br></br>
						<br></br>
						Proof of vaccination should have been uploaded to the Vaccination
						Portal on or before August 13. Proof includes:
						<br></br>
						<br></br>A written certification of vaccination, such as a CDC
						vaccination card. Medical documents showing the date and type of
						vaccine adminstered.
						<span>
							Do not include any medical or genetic information with your proof
							of vaccination.
						</span>
					</p>
					<div className="document-btn" />
					<button className="vaccination-btn">
						Upload Vaccination Documents Here
					</button>
				</div>
			</main>
		</>
	);
}

export default Testing;
