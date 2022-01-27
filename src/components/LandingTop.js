import { ReactComponent as DownloadIcon } from '../assets/download_icon.svg';

function LandingTop() {
	return (
		<div id="landingTop">
			<div id="infoBox">
				<h1 style={{ fontSize: 56 }}>IMAGINE A PLACE...</h1>
				<p>
					...where you can belong to a school club, a gaming group, or a
					worldwide art community. <br /> Where just you and a handful of
					friends can spend time together. A place that makes it easy to <br />{' '}
					talk every day and hang out more often.
				</p>
				<div id="buttons">
					<button>
						<DownloadIcon width="20" style={{ marginRight: 10 }} />
						Download for Windows
					</button>
					<button id="blackButton">Open Discord in your browser</button>
				</div>
			</div>
		</div>
	);
}

export default LandingTop;
