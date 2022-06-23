import "./menu.css";
import Upload from "../../Upload";
import { FaRegWindowClose } from "react-icons/fa";

export default function Menu({ onClick, menuVis, closeMenu }) {
	let visibility = "hide";

	console.log(menuVis);

	if (menuVis) {
		visibility = "show";
	}

	return (
		<div id="sidebar" className={visibility}>
			<div className="menu-close">
				<span className="menu-close-span" onClick={closeMenu}>
					<FaRegWindowClose />
				</span>
			</div>
			<Upload />
		</div>
	);
}
