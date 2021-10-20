import React from "react";
import "./contactpg.css";
import pic from "./julian-wan-DWaC44FUV5o-unsplash.svg";

export default function contactpg() {
	return (
		<div className="contactpg_container">
			<div className="contactpg_head">
				<h1 className="contactpg_h1">Contact Us</h1>
				<img src={pic} className="contactpg_pic" alt="contact us" />
			</div>

			<p className="contactpg_p">
				For any questions or concerns about coronavirus that have not been
				addressed, please contact us using the form below.
			</p>

			<div className="contactpg_form">
				<form action="/action_page.php">
					<label className="contactpg_label">Name</label>
					<br />
					<input type="text" name="title" className="contactpg_inputName" />
					<br />
					<label className="contactpg_label">Email</label>
					<br />
					<input type="email" name="title" className="contactpg_inputEmail" />
					<br />

					<label className="contactpg_label">
						I am a (please select below):
					</label>
					<br />
					<select id="contactpg_select" name="person" size="4">
						<option value="student">student</option>
						<option value="faculty">faculty</option>
						<option value="staff">staff</option>
						<option value="other">
							other (please specify in comment section)
						</option>
					</select>

					<br />
					<label className="contactpg_label">Comment/Question</label>
					<br />
					<textarea
						name="description"
						cols="84"
						rows="18"
						placeholder=""
						maxlength="5000"
						className="contactpg_box"
					/>
					<br />
					<button type="submit" className="contactpg_submit">
						Submit Form
					</button>
				</form>
			</div>
		</div>
	);
}
