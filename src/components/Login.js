import '../LoginPage.css';
import qrCode from '../assets/qr_code.png';
import { ReactComponent as DcMiniIcon } from '../assets/discord_mini_icon.svg';

function Login() {
	document.addEventListener('contextmenu', (event) => event.preventDefault());

	return (
		<div id="loginPage">
			<div id="loginBox">
				<div id="leftBox">
					<h2 id="welcomeBack">Welcome back!</h2>
					<p>We're so excited to see you again!</p>
					<div id="emailBox">
						<label>EMAIL OR PHONE NUMBER</label>
						<input
							type="text"
							autoComplete="off"
							maxLength="999"
							spellCheck="false"
							autoFocus
						/>
					</div>
					<div id="passwordBox">
						<label>PASSWORD</label>
						<input
							type="password"
							autoComplete="off"
							maxLength="999"
							spellCheck="false"
						/>
					</div>
					<a className="stickToLeft">Forgot your password?</a>
					<button id="authLoginBtn">Login</button>
					<span className="stickToLeft">
						Need an account? <a href="/register">Register</a>
					</span>
				</div>
				<div id="rightBox">
					<img id="qrCode" src={qrCode} />
					<DcMiniIcon />
					<h2>Log in with QR Code</h2>
					<p>
						Scan this with the <b>Discord mobile app</b> to log in instantly.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Login;
