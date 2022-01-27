import { ReactComponent as Logo } from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

function Header() {
	const navigate = useNavigate();

	return (
		<div id="header">
			<div className="container">
				<div className="logo">
					<Logo color="white" />
				</div>
				<div id="navigations">
					<a>Download</a>
					<a>Nitro</a>
					<a>Safety</a>
					<a>Support</a>
					<a>Blog</a>
					<a>Careers</a>
				</div>
				<div id="loginDiv">
					<button
						id="login"
						onClick={() => {
							navigate('/login');
						}}
					>
						Login
					</button>
				</div>
			</div>
		</div>
	);
}

export default Header;
