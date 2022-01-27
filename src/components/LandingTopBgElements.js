import MainPartBg from '../assets/center_bg_landing_header.svg';
import LeftPartBg from '../assets/left_bg_landing_header.svg';
import RightPartBg from '../assets/right_bg_landing_header.svg';

function LandingTopBgElements() {
	return (
		<div id="landingTopBgElements">
			<div className="container">
				<img id="LeftPartBg" src={LeftPartBg} />
				<img id="RightPartBg" src={RightPartBg} />
			</div>
		</div>
	);
}

export default LandingTopBgElements;
