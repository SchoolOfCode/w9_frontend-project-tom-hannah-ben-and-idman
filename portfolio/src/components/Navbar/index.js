import "./navbar.css";
import MenuButton from "../MenuContainer/MenuButton";

export default function Navbar({ menuOnClick }) {
	return (
		<div className="Navbar">
			<nav className="navbar-nav">
				<span className="navbarimg">
					<img
						className="navbar-logo"
						src="/logos/portfol-logo-noslogan-invert-horiz-xpnt-M.png"
						alt="Portfol.io logo"
					/>
				</span>
				<ul className="nav-list">
					<li>
						<MenuButton onClick={menuOnClick} type="upload" />
					</li>
					<li>Login</li>
					<li>Sign Up</li>
				</ul>
			</nav>
		</div>
	);
}
