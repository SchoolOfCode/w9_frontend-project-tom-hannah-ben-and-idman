import "./menu.css";

export default function Menu({ onClick, menuVis, closeMenu }) {
	let visibility = "hide";

	console.log(menuVis);

	if (menuVis) {
		visibility = "show";
	}

	return (
		<div id="sidebar" onClick={onClick} className={visibility}>
			<p>Hello</p>
			<form>
				<label>
					First name: <input type="text" placeholder="First name" />
				</label>
			</form>
		</div>
	);
}
