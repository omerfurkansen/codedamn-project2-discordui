import '../LandingPage.css';
import Header from './Header';
import LandingTop from './LandingTop';
import LandingRest from './LandingRest';
import Footer from './Footer';
import LandingTopBgElements from './LandingTopBgElements';

function Landing() {
	return (
		<>
			<Header />
			<LandingTopBgElements />
			<LandingTop />
			<LandingRest />
			<Footer />
		</>
	);
}

export default Landing;
