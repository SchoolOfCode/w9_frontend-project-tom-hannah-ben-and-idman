import "./navbar.css";

export default function Navbar() {
	return (
		<div className="Navbar">
			<nav className="navbar-nav">
				<span className="navbarimg">
					<img
						id="navbar-logo"
						src="/logos/portfol-logo-noslogan-invert-horiz-M.png"
						alt="Portfol.io logo"
					/>
				</span>
				<ul id="nav-list">
					<li>Upload</li>
					<li>Login</li>
					<li>Sign Up</li>
				</ul>
			</nav>
		</div>
	);
}
