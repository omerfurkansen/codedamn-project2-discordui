import '../RegisterPage.css';

function Register() {
	document.addEventListener('contextmenu', (event) => event.preventDefault());

	let months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	let days = [];
	let years = [];

	for (let i = 1; i <= 31; i++) {
		days.push(i);
	}

	for (let i = 1900; i <= 2022; i++) {
		years.push(i);
	}

	return (
		<div id="registerPage">
			<div id="registerBox">
				<h2>Create an account</h2>
				<div className="registerChild" id="emailBox">
					<label>EMAIL</label>
					<input
						type="email"
						autoComplete="off"
						maxLength="999"
						spellCheck="false"
						autoFocus
					/>
				</div>
				<div className="registerChild" id="usernameBox">
					<label>USERNAME</label>
					<input
						type="text"
						autoComplete="off"
						maxLength="999"
						spellCheck="false"
					/>
				</div>
				<div className="registerChild" id="passwordBox">
					<label>PASSWORD</label>
					<input
						type="password"
						autoComplete="off"
						maxLength="999"
						spellCheck="false"
					/>
				</div>
				<div className="registerChild" id="birthdayBox">
					<label>DATE OF BIRTH</label>
					<div id="selectionBoxes">
						<select style={{ width: 153 }}>
							{months.map((month) => (
								<option>{month}</option>
							))}
						</select>
						<select style={{ width: 100 }}>
							{days.map((day) => (
								<option>{day}</option>
							))}
						</select>
						<select style={{ width: 120 }}>
							{years.map((year) => (
								<option>{year}</option>
							))}
						</select>
					</div>
				</div>
				<button id="continueBtn">Continue</button>
				<a className="stickToLeft" href="/login">
					Already have an account?
				</a>
				<span className="stickToLeft" id="byRegistering">
					By registering, you agree to Discord's <a>Terms of Service</a> and{' '}
					<a>Privacy Policy</a>.
				</span>
			</div>
		</div>
	);
}

export default Register;
