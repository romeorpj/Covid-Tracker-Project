import Header from "./Header";
import LandingPage from "./LandingPage";
import Testing from "./Testing page/Testing";
import About from "./About Page/About";
import Faq from "./FAQ page/Faq";
import Contact from "./Contact Page/contactpg";
import Footer from "./Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
	return (
		<Router>
			<div>
				<Header />
				<Switch>
					<Route path="/" exact component={LandingPage} />
					<Route path="/Testing" component={Testing} />
					<Route path="/About" component={About} />
					<Route path="/Faq" component={Faq} />
					<Route path="/Contact" component={Contact} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}
export default App;
