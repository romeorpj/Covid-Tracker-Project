import Header from "./Header/Header";
import LandingPage from "./LandingPage/LandingPage";
import Testing from "./Testing page/Testing";
import About from "./About Page/About";
import Faq from "./FAQ page/Faq";
import Contact from "./Contact Page/contactpg";
import Footer from "./Footer/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/" exact component={LandingPage} />
				<Route path="/Testing" component={Testing} />
				<Route path="/About" component={About} />
				<Route path="/Faq" component={Faq} />
				<Route path="/Contact" component={Contact} />
			</Switch>
			<Footer />
		</Router>
	);
}
export default App;
