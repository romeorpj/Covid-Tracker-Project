import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css";

function Header() {
	const [active, setActive] = useState(false);
	return (
		<div>
			<header>
				<div className="header-container">
					<div className="mobile-menu">
						<div className="logo">
							<Link to="/">
								<img
									src="img/coronaviruslogo.png"
									alt="corona tracker logo"
									className="logo-img"
								/>
							</Link>
							<Link to="/">
								<p className={active ? "white-mobile-title" : "mobile-title"}>
									CAMPUS
									<br />
									CORONA TRACKER
								</p>
							</Link>
						</div>

						<section
							className="hamburger-menu"
							onClick={() => setActive(!active)}
						>
							{active ? (
								<i className="fas fa-times white-nav"></i>
							) : (
								<i className="fas fa-bars"></i>
							)}
						</section>
					</div>
					<nav className={active ? "nav active" : "nav"}>
						<ul className="nav-links">
							<Link to="/">
								<li>
									<span>HOME</span>
								</li>
							</Link>
							<Link to="/testing">
								<li>
									<span>TESTING-VACCINATION</span>
								</li>
							</Link>
							<Link to="/about">
								<li>
									<span>ABOUT</span>
								</li>
							</Link>
							<Link to="/faq">
								<li>
									<span>FAQ</span>
								</li>
							</Link>
							<Link to="/contact">
								<li>
									<span>CONTACT US</span>
								</li>
							</Link>
						</ul>
					</nav>
				</div>
			</header>
		</div>
	);
}

export default Header;
