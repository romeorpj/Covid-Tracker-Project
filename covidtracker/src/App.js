<<<<<<< HEAD
import "./index.css";
import Header from "./Header";
import LandingPage from "./LandingPage";
import Testing from "./Testing";
import About from "./About";
import Faq from "./Faq";
import Contact from "./Contact";
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
=======

import Faq from './FAQ page/Faq';
import Contactpg from './Contact Page/contactpg'
function App() {
  return (
    <div className="App">
     <Contactpg/>
     {/* <Faq/> */}
    </div>
  );
>>>>>>> 5680eaaf04876dc24eb3d26ab2c2c185274457ae
}

export default App;
