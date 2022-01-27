import FirstImage from '../assets/invite_only_landing.svg';
import SecondImage from '../assets/hanging_out_easy_landing.svg';
import ThirdImage from '../assets/fandom_landing.svg';
import FourthImage from '../assets/just_chiling_landing.svg';
import { ReactComponent as DownloadIcon } from '../assets/download_icon.svg';

function LandingRest() {
	function isSeen(element) {
		return (
			(element.getBoundingClientRect().top >= 0 &&
				window.innerHeight >= element.getBoundingClientRect().top) ||
			(element.getBoundingClientRect().bottom >= 0 &&
				window.innerHeight >= element.getBoundingClientRect().bottom)
		);
	}

	window.addEventListener('scroll', () => {
		isSeen(document.getElementById('firstBox')) &&
			(document.getElementById('firstBox').style.animation = 'fadeIn 2s');
		isSeen(document.getElementById('secondBox')) &&
			(document.getElementById('secondBox').style.animation = 'fadeIn 2s');
		isSeen(document.getElementById('thirdBox')) &&
			(document.getElementById('thirdBox').style.animation = 'fadeIn 2s');
		isSeen(document.getElementById('fourthBox')) &&
			(document.getElementById('fourthBox').style.animation = 'fadeIn 2s');
	});

	return (
		<div id="landingRest">
			<div className="landingChildBox" id="firstBox">
				<div className="container">
					<img src={FirstImage} style={{ width: 670 }} />
					<div>
						<h2>Create an invite-only place where you belong</h2>
						<p>
							Discord servers are organized into topic-based channels where you
							can collaborate, share, and just talk about your day without
							clogging up a group chat.
						</p>
					</div>
				</div>
			</div>
			<div
				className="landingChildBox"
				id="secondBox"
				style={{ backgroundColor: '#f6f6f6' }}
			>
				<div className="container">
					<div>
						<h2>Where hanging out is easy</h2>
						<p>
							Grab a seat in a voice channel when you’re free. Friends in your
							server can see you’re around and instantly pop in to talk without
							having to call.
						</p>
					</div>
					<img src={SecondImage} style={{ width: 670 }} />
				</div>
			</div>
			<div className="landingChildBox" id="thirdBox">
				<div className="container">
					<img src={ThirdImage} style={{ width: 670 }} />
					<div>
						<h2>From few to a fandom</h2>
						<p>
							Get any community running with moderation tools and custom member
							access. Give members special powers, set up private channels, and
							more.
						</p>
					</div>
				</div>
			</div>
			<div id="fourthBox" style={{ backgroundColor: '#f6f6f6' }}>
				<div className="container">
					<div>
						<h1>RELIABLE TECH FOR STAYING CLOSE</h1>
						<p>
							Low-latency voice and video feels like you’re in the same room.
							Wave hello over video, watch friends stream their games, or gather
							up and have a drawing session with screen share.
						</p>
					</div>
					<img src={FourthImage} style={{ width: 1200 }} />
					<div id="h2BackgroundBox">
						<h2>Ready to start your journey?</h2>
					</div>
					<button>
						<DownloadIcon width="20" style={{ marginRight: 10 }} />
						Download for Windows
					</button>
				</div>
			</div>
		</div>
	);
}

export default LandingRest;
