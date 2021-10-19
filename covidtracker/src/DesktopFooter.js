import { Link } from "react-router-dom";

const DesktopFooter = () => {
	return (
		<section className="desktop-footer">
			<div className="desktop-footer-wrapper">
				<div className="desktop-left-footer">
					<div className="desktop-footer-logos">
						<Link to="/">
							<img
								src="img/coronaviruslogo.png"
								alt="corona tracker logo"
								className="logo-img"
							/>
						</Link>
						<p>CORONA TRACKER</p>
					</div>

					<section className="desktop-footer-email">
						<p>
							<em>
								Subscribe For The Most Up-To-Date Covid Information On Your
								Campus!
							</em>
						</p>
						<div className="desktop-form-wrapper">
							<div className="form">
								<input type="text" name="email" required />
								<label htmlFor="email" className="label-email">
									<span className="content-email">ENTER EMAIL</span>
								</label>
							</div>
							<button className="email-btn">Subscribe</button>
						</div>
					</section>
				</div>
				<div className="desktop-right-footer">
					<div className="desktop-social-icons-footer">
						<i className="fab fa-facebook-square"></i>
						<i className="fab fa-twitter-square"></i>
						<i className="fab fa-instagram-square"></i>
					</div>
					<ul>
						<li>
							<a href="privacy.html">PRIVACY</a>
						</li>
						<li>
							<a href="Terms.html">TERMS</a>
						</li>
						<li>
							<p>Phone: 1-800-123-4567</p>
						</li>
						<li>
							<a href="mailto: contact@campuscorona.edu">
								Email: contact@campuscorona.edu
							</a>
						</li>
						<li>
							<span>&#169;Copyright 2021 ReSkill America</span>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};
export default DesktopFooter;
