import DesktopFooter from "./DesktopFooter";
import "../Footer/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="mobile-footer-container">
			<section className="mobile-footer-wrapper">
				<div className="mobile-footer-logos">
					<Link to="/">
						<img
							src="img/coronaviruslogo.png"
							alt="corona tracker logo"
							className="logo-img"
						/>
					</Link>
					<p>CORONA TRACKER</p>
				</div>
				<nav className="mobile-footer-nav">
					<ul className="mobile-footer-links">
						<li>
							<a href="home.html">HOME</a>
						</li>
						<li>
							<a href="testing.html">TESTING & VAX</a>
						</li>
						<li>
							<a href="About.html">ABOUT</a>
						</li>
						<li>
							<a href="faq.html">FREQUENTLY ASKED QUESTIONS</a>
						</li>
						<li>
							<a href="Contact.html">CONTACT US</a>
						</li>
					</ul>
					<div className="social-icons-footer">
						<i className="fab fa-facebook-square"></i>
						<i className="fab fa-twitter-square"></i>
						<i className="fab fa-instagram-square"></i>
					</div>
				</nav>
				<section className="mobile-footer-email">
					<p>
						<em>
							Subscribe For The Most Up-To-Date Covid Information On Your
							Campus!
						</em>
					</p>
					<div className="form">
						<input type="text" name="email" required />
						<label htmlFor="email" className="label-email">
							<span className="content-email">ENTER EMAIL</span>
						</label>
					</div>
					<button className="email-btn">Subscribe</button>
				</section>
				<section className="mobile-footer-resources">
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
				</section>
			</section>
			<DesktopFooter />
		</footer>
	);
};
export default Footer;
