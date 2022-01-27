import USAFlag from '../assets/usa_flag.png';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as TwitterIcon } from '../assets/twitter_icon.svg';
import { ReactComponent as InstagramIcon } from '../assets/instagram_icon.svg';
import { ReactComponent as FacebookIcon } from '../assets/facebook_icon.svg';
import { ReactComponent as YoutubeIcon } from '../assets/youtube_icon.svg';
import { useNavigate } from 'react-router-dom';

function Footer() {
	const navigate = useNavigate();

	return (
		<div id="footer">
			<div className="container">
				<div id="footerUpper">
					<div id="footerFirstBox">
						<h1 style={{ color: '#5865f2', lineHeight: 1 }}>IMAGINE A PLACE</h1>
						<div id="flagAndCountry">
							<img src={USAFlag} style={{ width: 25 }} />
							English, USA
						</div>
						<div id="socials" style={{ color: '#ffffff' }}>
							<TwitterIcon />
							<InstagramIcon />
							<FacebookIcon />
							<YoutubeIcon />
						</div>
					</div>
					<div id="footerRest">
						<ul>
							<lh>Product</lh>
							<li>Download</li>
							<li>Nitro</li>
							<li>Status</li>
						</ul>
						<ul>
							<lh>Company</lh>
							<li>About</li>
							<li>Jobs</li>
							<li>Branding</li>
							<li>Newsroom</li>
						</ul>
						<ul>
							<lh>Resources</lh>
							<li>College</li>
							<li>Support</li>
							<li>Safety</li>
							<li>Blog</li>
							<li>Feedback</li>
							<li>Developers</li>
							<li>StreamKit</li>
						</ul>
						<ul>
							<lh>Policies</lh>
							<li>Terms</li>
							<li>Privacy</li>
							<li>Cookie Settings</li>
							<li>Guidelines</li>
							<li>Acknowledgements</li>
							<li>Licenses</li>
							<li>Moderation</li>
						</ul>
					</div>
				</div>
				<div id="footerBottom">
					<div className="logo">
						<Logo color="white" />
					</div>
					<button id="signUp" onClick={() => navigate('/register')}>
						Sign Up
					</button>
				</div>
			</div>
		</div>
	);
}

export default Footer;
